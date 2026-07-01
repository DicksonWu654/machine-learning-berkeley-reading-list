# Image Captioning / VQA

Source section from the archived ML@B reading list. This markdown version keeps the paper metadata and topic nesting, while omitting the original long-form explanatory prose.

- Source archive: https://web.archive.org/web/20240105220759/https://ml.berkeley.edu/reading-list/
- Entries in this section: 52

Priority labels in this repository: Core, Recommended, Supplemental, Reference.

## Image Captioning Datasets

- [COCO](https://arxiv.org/abs/1405.0312) - Microsoft COCO: Common Objects in Context. _Core._
- [Flick30k Entities](https://arxiv.org/abs/1505.04870) - Flickr30k Entities: Collecting Region-to-Phrase Correspondences for Richer Image-to-Sentence Models. _Supplemental._
- [DAQUAR](https://papers.nips.cc/paper/5411-a-multi-world-approach-to-question-answering-about-real-world-scenes-based-on-uncertain-input.pdf) - A Multi-World Approach to Question Answeringabout Real-World Scenes based on Uncertain Inputs. _Supplemental._
- [Conceptual Captions](https://www.aclweb.org/anthology/P18-1238.pdf) - Conceptual Captions: A Cleaned, Hypernymed, Image Alt-text Dataset For Automatic Image Captioning. _Recommended._

## Visual Question Answering Datasets

- [Visual7W](https://arxiv.org/abs/1511.03416) - Visual7W: Grounded Question Answering in Images. _Supplemental._
- [Original VQA Paper](https://arxiv.org/abs/1505.00468) - VQA: Visual Question Answering. _Core._
- [Visual Madlibs](https://arxiv.org/abs/1506.00278) - Visual Madlibs: Fill in the blank Image Generation and Question Answering. _Supplemental._
- [COCO-QA](https://arxiv.org/abs/1505.02074) - Exploring Models and Data for Image Question Answering. _Supplemental._
- [CLEVR](https://arxiv.org/abs/1612.06890) - CLEVR: A Diagnostic Dataset for Compositional Language and Elementary Visual Reasoning. _Supplemental._

## Evaluation Metrics

- [BLEU](https://dl.acm.org/citation.cfm?id=1073135) - BLEU: A Method for Automatic Evaluation of Machine Translation. _Recommended._
- [Meteor](https://dl.acm.org/citation.cfm?id=1626389) - Meteor: An Automatic Metric for MT Evaluation with High Levels of Correlation with Human Judgments. _Supplemental._
- [ROUGE](https://www.aclweb.org/anthology/W04-1013/) - ROUGE: A Package for Automatic Evaluation of Summaries. _Supplemental._
- [CIDEr](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Vedantam_CIDEr_Consensus-Based_Image_2015_CVPR_paper.pdf) - CIDEr: Consensus-based Image Description Evaluation. _Core._
- [SPICE](https://arxiv.org/abs/1607.08822) - SPICE: Semantic Propositional Image Caption Evaluation. _Core._
- [Policy Gradients for SPIDEr](https://arxiv.org/abs/1612.00370) - Improved Image Captioning via Policy Gradient optimization of SPIDEr. _Reference._
- [Word Mover's Distance](https://www.aclweb.org/anthology/E17-1019/) - Re-evaluating Automatic Metrics for Image Captioning. _Supplemental._

## Attention Models

- [Knowing When to Look: Adaptive Attention via A Visual Sentinel for Image Captioning](https://arxiv.org/abs/1612.01887). _Recommended._
- [Bottom-Up and Top-Down Attention for Image Captioning and Visual Question Answering](https://arxiv.org/abs/1707.07998). _Core._
- [Show, Attend, and Tell](https://arxiv.org/abs/1502.03044) - Show, Attend and Tell: Neural Image Caption Generation with Visual Attention. _Recommended._
- [Conceptual Captions (Transformer Language Model)](https://www.aclweb.org/anthology/P18-1238.pdf) - Conceptual Captions: A Cleaned, Hypernymed, Image Alt-text Dataset For Automatic Image Captioning. _Recommended._
- [FiLM](https://arxiv.org/abs/1709.07871) - FiLM: Visual Reasoning with a General Conditioning Layer. _Recommended._
- [Incorporating Copying Mechanism in Image Captioning for Learning Novel Objects](https://arxiv.org/abs/1708.05271). _Supplemental._

## Modular Architectures

- [Neural Baby Talk](https://arxiv.org/abs/1803.09845). _Recommended._
- [Neural Module Networks](https://arxiv.org/abs/1511.02799). _Reference._
- [Learning to Compose Neural Networks for Question Answering](https://arxiv.org/abs/1601.01705). _Core._
- [Learning to Reason: End-to-End Module Networks for Visual Question Answering](https://arxiv.org/abs/1704.05526). _Recommended._
- [Modeling Relationships in Referential Expressions with Compositional Modular Networks](https://arxiv.org/abs/1611.09978). _Supplemental._

## Foundations

- [Baby Talk](http://tamaraberg.com/papers/generation_cvpr11.pdf) - Baby Talk: Understanding and Generating Image Descriptions. _Supplemental._
- [Show and Tell](https://arxiv.org/abs/1411.4555) - Show and Tell: A Neural Image Caption Generator. _Recommended._
- [Long-term Recurrent Convolutional Networks for Visual Recognition and Description](https://arxiv.org/abs/1411.4389). _Supplemental._

## Other Versions of Image Captioning

- [DenseCap](https://arxiv.org/abs/1511.07571) - DenseCap: Fully Convolutional Localization Networks for Dense Captioning. _Supplemental._
- [Deep Visual-Semantic Alignments for Generating Image Descriptions](https://arxiv.org/abs/1412.2306). _Recommended._
- [Nocaps](https://arxiv.org/abs/1812.08658) - Nocaps: Novel Object Captioning at Scale. _Supplemental._
- [Deep Compositional Captioning](https://arxiv.org/abs/1511.05284) - Deep Compositional Captioning: Describing Novel Object Categories without Paired Training Data. _Recommended._
- [Captioning Images with Diverse Objects](https://arxiv.org/abs/1606.07770). _Supplemental._

## Incorporating Visual Attributes

- [Boosting Image Captioning with Attributes](https://arxiv.org/abs/1611.01646). _Recommended._
- [Image Captioning with Semantic Attention](https://arxiv.org/abs/1603.03925). _Supplemental._
- [Show, Observe, and Tell](https://www.ijcai.org/proceedings/2018/0084.pdf) - Show, Observe and Tell: Attribute-driven Attention Model for Image Captioning. _Supplemental._

## Decoding Methods

- [Beam Search](https://en.wikipedia.org/wiki/Beam_search). _Recommended._
- [Guided Open Vocabulary Image Captioning with Constrained Beam Search](https://arxiv.org/abs/1612.00576). _Recommended._
- [Lexically Constrained Decoding for Sequence Generation Using Grid Beam Search](https://arxiv.org/abs/1704.07138). _Supplemental._

## Style Transfer

- [Show, Adapt, and Tell](https://arxiv.org/abs/1705.00930) - Show, Adapt and Tell: Adversarial Training of Cross-domain Image Captioner. _Recommended._
- [StyleNet](https://www.microsoft.com/en-us/research/uploads/prod/2017/06/Generating-Attractive-Visual-Captions-with-Styles.pdf) - StyleNet: Generating Attractive Visual Captions with Styles. _Supplemental._

## Discriminability

- [Discriminability Objective for Training Descriptive Captions](https://arxiv.org/abs/1803.04376). _Supplemental._
- [Show, Tell, and Discriminate](https://arxiv.org/abs/1803.08314) - Show, Tell and Discriminate: Image Captioning by Self-retrieval with Partially Labeled Data. _Supplemental._

## Navigation

- [Vision-and-Language Navigation](https://arxiv.org/abs/1711.07280) - Vision-and-Language Navigation: Interpreting Visually-Grounded Navigation Instructions in Real Environments. _Core._

## Open-Source Pretrained Models

- [Pythia](https://github.com/facebookresearch/pythia). _Reference._

## Field Leaders

- [Trevor Darrell](https://people.eecs.berkeley.edu/~trevor/). _Reference._
- [Devi Parikh](https://www.cc.gatech.edu/~parikh/). _Reference._
- [Dhruv Batra](https://www.cc.gatech.edu/~dbatra/). _Reference._
- [Peter Anderson](https://panderson.me/). _Reference._
- [Stefen Lee](http://web.engr.oregonstate.edu/~leestef/). _Reference._

---

Credit for the original curation belongs to Machine Learning at Berkeley and the contributors named in the original archived site. See [ATTRIBUTION.md](../ATTRIBUTION.md).
