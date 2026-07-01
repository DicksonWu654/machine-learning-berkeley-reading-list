import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const ARCHIVE_PAGE =
  "https://web.archive.org/web/20240105220759/https://ml.berkeley.edu/reading-list/";
const ARCHIVE_BUNDLE =
  "https://web.archive.org/web/20240105220759js_/https://ml.berkeley.edu/reading-list/static/js/main.c4e41ed2.chunk.js";

const ROOT_TOPIC_FILES = [
  "intro",
  "imagenet",
  "detection",
  "systems",
  "unsupervised",
  "theory",
  "nas",
  "rl",
  "sequential",
  "captioning",
  "misc",
];

const CONTRIBUTOR_NAMES = [
  "Chris Bender",
  "Phillip Kravtsov",
  "Brian Friedenberg",
  "Murtaza Dalal",
  "Rohan Taori",
  "Brandon Trabucco",
];

const PRIORITY_LABELS = {
  0: "Reference",
  1: "Supplemental",
  2: "Recommended",
  3: "Core",
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const escapePipes = (value) => String(value ?? "").replaceAll("|", "\\|");

const cleanArchivedUrl = (url) => {
  if (!url) return "";
  const archivePrefix = "https://web.archive.org/web/20240105220759/";
  if (url.startsWith(archivePrefix)) {
    return url.slice(archivePrefix.length);
  }
  return url;
};

const decodeBundleString = (raw) => {
  // The bundle stores JSON inside a JavaScript single-quoted string literal.
  // Evaluating only that literal is enough to decode JS escapes before JSON.parse.
  const decoded = Function(`"use strict"; return '${raw}';`)();
  return JSON.parse(decoded);
};

const extractTopicMap = (bundle) => {
  const mapMatch = bundle.match(/var r=\{((?:"\.\/[a-z]+\.json":\d+,?)+)\};function n/);
  if (!mapMatch) {
    throw new Error("Could not find the webpack JSON module map.");
  }

  const moduleNames = [...mapMatch[1].matchAll(/"\.\/([a-z]+)\.json":(\d+)/g)]
    .map((match) => ({ name: match[1], id: Number(match[2]) }))
    .sort((a, b) => a.id - b.id)
    .map((entry) => entry.name);

  const payloads = [
    ...bundle.matchAll(/function\(e\)\{e\.exports=JSON\.parse\('((?:\\.|[^'])*)'\)\}/g),
  ].map((match) => decodeBundleString(match[1]));

  if (moduleNames.length !== payloads.length) {
    throw new Error(
      `Expected ${moduleNames.length} JSON payloads but found ${payloads.length}.`
    );
  }

  return Object.fromEntries(moduleNames.map((name, index) => [name, payloads[index]]));
};

const walkPapers = (node, callback, trail = []) => {
  if (node.type === "paper") {
    callback(node, trail);
    return;
  }
  for (const child of node.children ?? []) {
    walkPapers(child, callback, [...trail, node.name]);
  }
};

const countPapers = (node) => {
  let count = 0;
  walkPapers(node, () => {
    count += 1;
  });
  return count;
};

const collectStats = (topics) => {
  const paperTitles = new Set();
  let totalEntries = 0;

  for (const topic of topics) {
    walkPapers(topic, (paper) => {
      totalEntries += 1;
      paperTitles.add(paper.title);
    });
  }

  return {
    sectionCount: topics.length,
    entryCount: totalEntries,
    uniquePaperCount: paperTitles.size,
  };
};

const renderPaper = (paper) => {
  const label = paper.flavor || paper.title || "Untitled resource";
  const title = paper.title && paper.title !== label ? ` - ${paper.title}` : "";
  const priority = PRIORITY_LABELS[paper.relevance] ?? `Priority ${paper.relevance}`;
  const link = cleanArchivedUrl(paper.link);
  const linkedLabel = link ? `[${escapePipes(label)}](${link})` : `**${escapePipes(label)}**`;
  const authors =
    Array.isArray(paper.authors) && paper.authors.length > 0
      ? ` Authors listed in source: ${paper.authors.join(", ")}.`
      : "";
  return `- ${linkedLabel}${escapePipes(title)}. _${priority}._${authors}`;
};

const renderTopicChildren = (children, depth = 2) => {
  const lines = [];
  for (const child of children ?? []) {
    if (child.type === "topic") {
      lines.push(`${"#".repeat(depth)} ${child.name}`);
      lines.push("");
      lines.push(...renderTopicChildren(child.children, depth + 1));
    } else if (child.type === "paper") {
      lines.push(renderPaper(child));
    }
  }
  if (lines.length > 0 && lines.at(-1) !== "") {
    lines.push("");
  }
  return lines;
};

const renderTopicFile = (topic, slug) => {
  const paperCount = countPapers(topic);
  const lines = [
    `# ${topic.name}`,
    "",
    `Source section from the archived ML@B reading list. This markdown version keeps the paper metadata and topic nesting, while omitting the original long-form explanatory prose.`,
    "",
    `- Source archive: ${ARCHIVE_PAGE}`,
    `- Entries in this section: ${paperCount}`,
    "",
    "Priority labels in this repository: Core, Recommended, Supplemental, Reference.",
    "",
    ...renderTopicChildren(topic.children, 2),
    "---",
    "",
    "Credit for the original curation belongs to Machine Learning at Berkeley and the contributors named in the original archived site. See [ATTRIBUTION.md](../ATTRIBUTION.md).",
    "",
  ];

  return lines.join("\n");
};

const renderReadme = (topics) => {
  const stats = collectStats(topics);
  const topicRows = topics
    .map((topic) => {
      const slug = slugify(topic.name);
      return `- [${topic.name}](topics/${slug}.md) - ${countPapers(topic)} entries`;
    })
    .join("\n");

  return `# Machine Learning at Berkeley Reading List

This repository preserves a markdown version of the archived **Machine Learning at Berkeley Reading List** so it remains easy to find, browse, and cite from GitHub.

All credit for the original reading-list curation belongs to Machine Learning at Berkeley and the original contributors. This repository is an independent preservation/reformatting project and is not an official ML@B publication.

- Original archived page: ${ARCHIVE_PAGE}
- Sections preserved: ${stats.sectionCount}
- Paper/resource entries preserved: ${stats.entryCount}
- Unique paper/resource titles: ${stats.uniquePaperCount}

## Topics

${topicRows}

## Priority Labels

The archived app used numeric relevance markers. This markdown version renders them as:

- **Core**: highest-priority entries from the source metadata.
- **Recommended**: useful follow-up readings from the source metadata.
- **Supplemental**: additional context or specialized readings from the source metadata.
- **Reference**: background, tools, people, or optional resources from the source metadata.

## Attribution

The source archive named these original contributors: ${CONTRIBUTOR_NAMES.join(", ")}.

See [ATTRIBUTION.md](ATTRIBUTION.md) for the full credit and rights note.

## Regenerating The Markdown

The generated files can be recreated from the archived JavaScript bundle with Node.js 18 or newer:

\`\`\`bash
node tools/generate-markdown.mjs
\`\`\`

The generator keeps factual paper/resource metadata and topic nesting. It does not reproduce the original long-form explanatory prose.
`;
};

const renderAttribution = () => `# Attribution

This repository exists to make the archived Machine Learning at Berkeley reading list easier to discover and browse in markdown form.

Original curation credit belongs to Machine Learning at Berkeley and the contributors named in the archived site:

${CONTRIBUTOR_NAMES.map((name) => `- ${name}`).join("\n")}

Source archive:

- ${ARCHIVE_PAGE}

The generated topic files preserve factual paper/resource metadata and topic organization from the archived public bundle. This repository intentionally omits the original long-form explanatory section prose and uses new repository-level wording.

This project is independent and is not affiliated with, endorsed by, or maintained by Machine Learning at Berkeley unless they choose to adopt it later.
`;

const renderLicense = () => `Creative Commons Attribution 4.0 International

The original Machine Learning at Berkeley reading-list curation is credited to Machine Learning at Berkeley and the original contributors named in ATTRIBUTION.md.

New repository text, formatting, and generator code in this preservation project are offered under CC BY 4.0. No additional rights are claimed over third-party paper titles, author names, linked resources, or original ML@B materials.

License text: https://creativecommons.org/licenses/by/4.0/
`;

const renderGitignore = () => `node_modules/
.DS_Store
`;

const main = async () => {
  const response = await fetch(ARCHIVE_BUNDLE);
  if (!response.ok) {
    throw new Error(`Failed to fetch archived bundle: ${response.status}`);
  }

  const bundle = await response.text();
  const topicMap = extractTopicMap(bundle);
  const topics = ROOT_TOPIC_FILES.map((name) => {
    const topic = topicMap[name];
    if (!topic) {
      throw new Error(`Missing expected topic JSON: ${name}`);
    }
    return topic;
  });

  await rm("topics", { recursive: true, force: true });
  await mkdir("topics", { recursive: true });

  await writeFile("README.md", renderReadme(topics));
  await writeFile("ATTRIBUTION.md", renderAttribution());
  await writeFile("LICENSE", renderLicense());
  await writeFile(".gitignore", renderGitignore());

  for (const topic of topics) {
    const slug = slugify(topic.name);
    await writeFile(path.join("topics", `${slug}.md`), renderTopicFile(topic, slug));
  }

  const stats = collectStats(topics);
  console.log(
    `Generated ${stats.sectionCount} topic files with ${stats.entryCount} entries (${stats.uniquePaperCount} unique titles).`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
