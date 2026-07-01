# Machine Learning at Berkeley Reading List

This repository preserves a markdown version of the archived **Machine Learning at Berkeley Reading List** so it remains easy to find, browse, and cite from GitHub.

All credit for the original reading-list curation belongs to Machine Learning at Berkeley and the original contributors. This repository is an independent preservation/reformatting project and is not an official ML@B publication.

- Original archived page: https://web.archive.org/web/20240105220759/https://ml.berkeley.edu/reading-list/
- Sections preserved: 11
- Paper/resource entries preserved: 272
- Unique paper/resource titles: 267

## Topics

- [Introduction](topics/introduction.md) - 0 entries
- [ImageNet Architectures and Tricks](topics/imagenet-architectures-and-tricks.md) - 15 entries
- [Object Detection and Segmentation](topics/object-detection-and-segmentation.md) - 17 entries
- [Systems for ML](topics/systems-for-ml.md) - 36 entries
- [Unsupervised Learning](topics/unsupervised-learning.md) - 57 entries
- [Theory](topics/theory.md) - 30 entries
- [Neural Architecture Search](topics/neural-architecture-search.md) - 13 entries
- [Reinforcement Learning](topics/reinforcement-learning.md) - 35 entries
- [Sequential / NLP](topics/sequential-nlp.md) - 12 entries
- [Image Captioning / VQA](topics/image-captioning-vqa.md) - 52 entries
- [Miscellaneous](topics/miscellaneous.md) - 5 entries

## Priority Labels

The archived app used numeric relevance markers. This markdown version renders them as:

- **Core**: highest-priority entries from the source metadata.
- **Recommended**: useful follow-up readings from the source metadata.
- **Supplemental**: additional context or specialized readings from the source metadata.
- **Reference**: background, tools, people, or optional resources from the source metadata.

## Attribution

The source archive named these original contributors: Chris Bender, Phillip Kravtsov, Brian Friedenberg, Murtaza Dalal, Rohan Taori, Brandon Trabucco.

See [ATTRIBUTION.md](ATTRIBUTION.md) for the full credit and rights note.

## Regenerating The Markdown

The generated files can be recreated from the archived JavaScript bundle with Node.js 18 or newer:

```bash
node tools/generate-markdown.mjs
```

The generator keeps factual paper/resource metadata and topic nesting. It does not reproduce the original long-form explanatory prose.
