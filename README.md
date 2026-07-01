# Machine Learning at Berkeley Reading List

This repository preserves a markdown version of the archived **Machine Learning at Berkeley Reading List** so it remains easy to find, browse, and cite from GitHub.

All credit for the original reading-list curation belongs to Machine Learning at Berkeley and the original contributors. This repository is an independent preservation/reformatting project and is not an official ML@B publication.

- Original archived page: https://web.archive.org/web/20240105220759/https://ml.berkeley.edu/reading-list/
- Sections preserved: 11
- Paper/resource entries preserved: 272
- Unique paper/resource titles: 267

## Contents

- [Introduction](#introduction) - 0 entries
- [ImageNet Architectures and Tricks](#imagenet-architectures-and-tricks) - 15 entries
- [Object Detection and Segmentation](#object-detection-and-segmentation) - 17 entries
- [Systems for ML](#systems-for-ml) - 36 entries
- [Unsupervised Learning](#unsupervised-learning) - 57 entries
- [Theory](#theory) - 30 entries
- [Neural Architecture Search](#neural-architecture-search) - 13 entries
- [Reinforcement Learning](#reinforcement-learning) - 35 entries
- [Sequential / NLP](#sequential--nlp) - 12 entries
- [Image Captioning / VQA](#image-captioning--vqa) - 52 entries
- [Miscellaneous](#miscellaneous) - 5 entries

## Priority Labels

The archived app used numeric relevance markers. This markdown version renders them as:

- **Core**: highest-priority entries from the source metadata.
- **Recommended**: useful follow-up readings from the source metadata.
- **Supplemental**: additional context or specialized readings from the source metadata.
- **Reference**: background, tools, people, or optional resources from the source metadata.

## Introduction

Entries in this section: 0.

## ImageNet Architectures and Tricks

Entries in this section: 15.

### Architectures

- [AlexNet](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks) - ImageNet Classification with Deep Convolutional Neural Networks. _Supplemental._
- [GoogLeNet](https://arxiv.org/abs/1409.4842) - Going Deeper with Convolutions. _Recommended._
- [Inception-v2/v3](https://arxiv.org/abs/1512.00567) - Rethinking the Inception Architecture for Computer Vision. _Supplemental._
- [ResNet](https://arxiv.org/abs/1512.03385) - Deep Residual Learning for Image Recognition. _Core._
- [ResNet-v2](https://arxiv.org/abs/1603.05027) - Identity Mappings in Deep Residual Networks. _Supplemental._
- [ResNeXt](https://arxiv.org/abs/1611.05431) - Aggregated Residual Transformations for Deep Neural Networks. _Supplemental._
- [VGG](https://arxiv.org/abs/1409.1556) - Very Deep Convolutional Networks for Large-Scale Image Recognition. _Supplemental._
- [EfficientNet](https://arxiv.org/abs/1905.11946) - EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks. _Core._

### Tricks

- [Batch Norm](https://arxiv.org/abs/1502.03167) - Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift. _Core._
- [Dropout](http://jmlr.org/papers/v15/srivastava14a.html) - Dropout: A Simple Way to Prevent Neural Networks from Overfitting. _Recommended._
- [Layer Norm](https://arxiv.org/abs/1607.06450) - Layer Normalization. _Supplemental._
- [Group Norm](https://arxiv.org/abs/1803.08494) - Group Normalization. _Recommended._
- [Squeeze & Excitation](https://arxiv.org/abs/1709.01507) - Squeeze-and-Excitation Networks. _Recommended._
- [Xception](https://arxiv.org/abs/1610.02357) - Xception: Deep Learning with Depthwise Separable Convolutions. _Supplemental._

### Other

- [ImageNet Dataset](http://www.image-net.org/papers/imagenet_cvpr09.pdf) - ImageNet: A Large-Scale Hierarchical Image Database. _Supplemental._

## Object Detection and Segmentation

Entries in this section: 17.

### Shallow Stuff

- [Selective Search](http://www.huppelen.nl/publications/selectiveSearchDraft.pdf) - Selective Search for Object Recognition. _Recommended._
- [DPM](http://cs.brown.edu/people/pfelzens/papers/lsvm-pami.pdf) - Object Detection with Discriminatively Trained Part Based Models. _Supplemental._
- [HOG](https://lear.inrialpes.fr/people/triggs/pubs/Dalal-cvpr05.pdf) - Histograms of Oriented Gradients for Human Detection. _Supplemental._

### 2D

- [R-CNN](https://arxiv.org/abs/1311.2524) - Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation. _Recommended._
- [Fast R-CNN](https://arxiv.org/abs/1504.08083). _Recommended._
- [Faster R-CNN](https://arxiv.org/abs/1506.01497) - Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks. _Core._
- [Mask R-CNN](https://arxiv.org/abs/1703.06870). _Core._
- [Yolo](https://arxiv.org/abs/1506.02640) - You Only Look Once: Unified, Real-Time Object Detection. _Recommended._
- [SSD](https://arxiv.org/abs/1512.02325) - SSD: Single Shot MultiBox Detector. _Supplemental._
- [Fast Yolo](https://arxiv.org/abs/1709.05943) - Fast YOLO: A Fast You Only Look Once System for Real-time Embedded Object Detection in Video. _Supplemental._
- [U-Net](https://arxiv.org/abs/1505.04597) - U-Net: Convolutional Networks for Biomedical Image Segmentation. _Recommended._
- [DeepLab-v3](https://arxiv.org/abs/1706.05587) - Rethinking Atrous Convolution for Semantic Image Segmentation. _Recommended._

### 3D

- [PointNet](https://arxiv.org/abs/1612.00593) - PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation. _Core._
- [Mesh R-CNN](https://arxiv.org/abs/1906.02739). _Core._
- [PointNet++](https://arxiv.org/abs/1706.02413) - PointNet++: Deep Hierarchical Feature Learning on Point Sets in a Metric Space. _Supplemental._
- [Frustum PointNet](https://arxiv.org/abs/1711.08488) - Frustum PointNets for 3D Object Detection from RGB-D Data. _Supplemental._
- [VoxelNet](https://arxiv.org/abs/1711.06396) - VoxelNet: End-to-End Learning for Point Cloud Based 3D Object Detection. _Recommended._

## Systems for ML

Entries in this section: 36.

### Overviews

- [Hidden Technical Debt in Machine Learning Systems](https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems). _Core._
- [A Berkeley View of Systems Challenges for AI](https://arxiv.org/abs/1712.05855). _Recommended._

### Small Models

- [MobileNet](https://arxiv.org/abs/1704.04861) - MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications. _Core._
- [MobileNet-v2](https://arxiv.org/abs/1801.04381) - MobileNetV2: Inverted Residuals and Linear Bottlenecks. _Recommended._
- [MobileNet-v3](https://arxiv.org/abs/1905.02244) - Searching for MobileNetV3. _Recommended._
- [SqueezeNet](https://arxiv.org/abs/1602.07360) - SqueezeNet: AlexNet-Level Accuracy with 50x Fewer Parameters and <0.5MB Model Size. _Supplemental._
- [EfficientNet](https://arxiv.org/abs/1905.11946) - EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks. _Core._
- [SqueezeDet](https://arxiv.org/abs/1612.01051) - SqueezeDet: Unified, Small, Low Power Fully Convolutional Neural Networks for Real-Time Object Detection for Autonomous Driving. _Supplemental._

### Hyperparameter Search

- [Hyperband](https://arxiv.org/abs/1603.06560) - Hyperband: A Novel Bandit-Based Approach to Hyperparameter Optimization. _Core._
- [ASHA](https://arxiv.org/abs/1810.05934) - Massively Parallel Hyperparameter Tuning. _Core._
- [PBT](https://arxiv.org/abs/1711.09846) - Population Based Training of Neural Networks. _Recommended._

### Quantization

- [A Survey on Methods and Theories of Quantized Neural Networks](https://arxiv.org/abs/1808.04752). _Reference._
- [Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference](https://arxiv.org/abs/1712.05877). _Reference._
- [Fixed Point Quantization of Deep Convolutional Networks](https://arxiv.org/abs/1511.06393). _Reference._
- [Mixed Precision Quantization of ConvNets via Differentiable Neural Architecture Search](https://arxiv.org/abs/1812.00090). _Reference._
- [XNOR-Net](https://arxiv.org/abs/1603.05279) - XNOR-Net: ImageNet Classification Using Binary Convolutional Neural Networks. _Reference._

### Model Serving

- [InferLine](https://ucbrise.github.io/cs294-ai-sys-fa19/assets/preprint/inferline_draft.pdf) - InferLine: Prediction Pipeline Provisioning and Management for Tight Latency Objectives. _Recommended._

### Graph Compilation

- [TVM](https://arxiv.org/abs/1802.04799) - TVM: An Automated End-to-End Optimizing Compiler for Deep Learning. _Core._

### Distributed Training

### Background

- [HogWild](https://people.eecs.berkeley.edu/~brecht/papers/hogwildTR.pdf) - Hogwild!: A Lock-Free Approach to Parallelizing Stochastic Gradient Descent. _Core._
- [Parameter Server](https://www.cs.cmu.edu/~muli/file/parameter_server_osdi14.pdf) - Scaling Distributed Machine Learning with the Parameter Server. _Core._
- [AllReduce](http://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/) - AllReduce Blog Post. _Recommended._
- [Data Parallel vs Model Parallel](https://en.wikipedia.org/w/index.php?title=Data_parallelism&oldid=807618997#Data_Parallelism_vs._Model_Parallelism[4]) - Data Parallel vs Model Parallel (Wikipedia). _Core._
- [Distributed Overview](https://arxiv.org/abs/1802.09941) - Demystifying Parallel and Distributed Deep Learning: An In-Depth Concurrency Analysis. _Core._

### Data Parallelism

- [Horovod](https://arxiv.org/abs/1802.05799) - Horovod: Fast and Easy Distributed Deep Learning in TensorFlow. _Reference._

### Model Parallelism

- [GPipe](https://arxiv.org/abs/1811.06965) - GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism. _Reference._
- [PipeDream](https://cs.stanford.edu/~matei/papers/2019/sosp_pipedream.pdf) - PipeDream: Fast and Efficient Pipeline Parallel DNN Training. _Reference._

### Some Tricks

- [Gradient Compression](https://arxiv.org/abs/1802.07389) - 3LC: Lightweight and Effective Traffic Compression for Distributed Machine Learning. _Reference._
- [Gradent Sparsification](https://arxiv.org/abs/1710.09854) - Gradient Sparsification for Communication-Efficient Distributed Optimization. _Reference._

### ImageNet in ___ Minutes

- [Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour](https://arxiv.org/abs/1706.02677). _Reference._
- [With Hierarchical All-Reduce](https://arxiv.org/abs/1807.11205) - Highly Scalable Deep Learning Training System with Mixed-Precision: Training ImageNet in Four Minutes. _Reference._

### Some Tools

- [Horovod](https://github.com/horovod/horovod). _Reference._
- [BytePS](https://github.com/bytedance/byteps). _Reference._
- [TensorFlow Distributed](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy). _Reference._
- [PyTorch Distributed DataParallel](https://pytorch.org/docs/stable/nn.html#torch.nn.parallel.DistributedDataParallel). _Reference._

### Low Memory

### Training

- [RevNet](https://arxiv.org/abs/1707.04585) - The Reversible Residual Network: Backpropagation Without Storing Activations. _Reference._
- [Gradient Checkpointing](https://arxiv.org/pdf/1904.10631.pdf) - Low-Memory Neural Network Training: A Technical Report. _Reference._

## Unsupervised Learning

Entries in this section: 57.

### Generative Adversarial Networks

- [GAN](https://arxiv.org/abs/1406.2661) - Generative Adversarial Networks.. _Core._ Authors listed in source: Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio.
- [DCGAN](https://arxiv.org/abs/1511.06434) - Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks. _Recommended._ Authors listed in source: Alec Radford, Luke Metz, Soumith Chintala.
- [InfoGAN](https://arxiv.org/abs/1606.03657) - InfoGAN: Interpretable Representation Learning by Information Maximizing Generative Adversarial Nets. _Supplemental._ Authors listed in source: Xi Chen, Yan Duan, Rein Houthooft, John Schulman, Ilya Sutskever, Pieter Abbeel.
- [Improved GAN](https://arxiv.org/abs/1606.03498) - Improved Techniques for Training GANs. _Recommended._ Authors listed in source: Tim Salimans, Ian Goodfellow, Wojciech Zaremba, Vicki Cheung, Alec Radford, Xi Chen.
- [WGAN](https://arxiv.org/abs/1701.07875) - Wasserstein GAN. _Recommended._ Authors listed in source: Martin Arjovsky, Soumith Chintala, Léon Bottou.
- [WGAN-GP](https://arxiv.org/abs/1704.00028) - Improved Training of Wasserstein GANs. _Supplemental._ Authors listed in source: Ishaan Gulrajani, Faruk Ahmed, Martin Arjovsky, Vincent Dumoulin, Aaron Courville.
- [MMD GAN](https://arxiv.org/abs/1705.08584) - MMD GAN: Towards Deeper Understanding of Moment Matching Network. _Supplemental._ Authors listed in source: Chun-Liang Li, Wei-Cheng Chang, Yu Cheng, Yiming Yang, Barnabás Póczos.
- [StyleGAN](https://arxiv.org/abs/1812.04948) - A Style-Based Generator Architecture for Generative Adversarial Networks. _Recommended._ Authors listed in source: Tero Karras, Samuli Laine, Timo Aila.
- [PG-GAN](https://arxiv.org/abs/1710.10196) - Progressive Growing of GANs for Improved Quality, Stability, and Variation. _Recommended._ Authors listed in source: Tero Karras, Timo Aila, Samuli Laine, Jaakko Lehtinen.
- [SA-GAN](https://arxiv.org/abs/1805.08318) - Self-Attention Generative Adversarial Networks. _Recommended._ Authors listed in source: Han Zhang, Ian Goodfellow, Dimitris Metaxas, Augustus Odena.
- [SN-GAN](https://openreview.net/pdf?id=B1QRgziT-) - Spectral Normalization for Generative Adversarial Networks. _Core._ Authors listed in source: Takeru Miyato, Toshiki Kataoka, Masanori Koyama, Yuichi Yoshida.
- [BigGAN](https://arxiv.org/abs/1809.11096) - Large Scale GAN Training for High Fidelity Natural Image Synthesis. _Core._ Authors listed in source: Andrew Brock, Jeff Donahue, Karen Simonyan.
- [S3GAN](https://arxiv.org/abs/1903.02271) - High-Fidelity Image Generation With Fewer Labels. _Recommended._ Authors listed in source: Mario Lucic, Michael Tschannen, Marvin Ritter, Xiaohua Zhai, Olivier Bachem, Sylvain Gelly.

### Style Transfer and Colorization

- [pix2pix](https://arxiv.org/abs/1611.07004) - Image-to-Image Translation with Conditional Adversarial Networks. _Recommended._ Authors listed in source: Phillip Isola, Jun-Yan Zhu, Tinghui Zhou, Alexei A. Efros.
- [CycleGAN](https://arxiv.org/abs/1703.10593) - Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks. _Core._ Authors listed in source: Jun-Yan Zhu, Taesung Park, Phillip Isola, Alexei A. Efros.
- [Attention-Guided CycleGAN](https://arxiv.org/abs/1806.02311) - Unsupervised Attention-Guided Image to Image Translation.. _Supplemental._ Authors listed in source: Youssef A. Mejjati, Christian Richardt, James Tompkin, Darren Cosker, Kwang In Kim.
- [vid2vid](https://arxiv.org/abs/1808.06601) - Video-to-Video Synthesis. _Recommended._ Authors listed in source: Ting-Chun Wang, Ming-Yu Liu, Jun-Yan Zhu, Guilin Liu, Andrew Tao, Jan Kautz, Bryan Catanzaro.
- [Everybody Dance Now](https://arxiv.org/abs/1808.07371). _Supplemental._ Authors listed in source: Caroline Chan, Shiry Ginosar, Tinghui Zhou, Alexei A. Efros.
- [Style Transfer](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf) - Image Style Transfer Using Convolutional Neural Networks. _Core._ Authors listed in source: Leon A. Gatys, Alexander S. Ecker, Matthias Bethge.
- [Fast Style Transfer](https://arxiv.org/abs/1603.08155) - Perceptual Losses for Real-Time Style Transfer and Super-Resolution. _Recommended._ Authors listed in source: Justin Johnson, Alexandre Alahi, Li Fei-Fei.
- [Image Colorization](https://arxiv.org/abs/1603.08511) - Colorful Image Colorization. _Recommended._ Authors listed in source: Richard Zhang, Phillip Isola, Alexei A. Efros.
- [Tracking Emerges](https://arxiv.org/abs/1806.09594) - Tracking Emerges by Colorizing Videos. _Recommended._ Authors listed in source: Carl Vondrick, Abhinav Shrivastava, Alireza Fathi, Sergio Guadarrama, Kevin Murphy.

### Autoregressive Models

- [MADE](https://arxiv.org/abs/1502.03509) - MADE: Masked Autoencoder for Distribution Estimation. _Supplemental._ Authors listed in source: Mathieu Germain, Karol Gregor, Iain Murray, Hugo Larochelle.
- [Pixel Recurrent Neural Networks](https://arxiv.org/abs/1601.06759). _Recommended._ Authors listed in source: Aaron van den Oord, Nal Kalchbrenner, Koray Kavukcuoglu.
- [PixelCNN](https://arxiv.org/abs/1606.05328) - Conditional Image Generation with PixelCNN Decoders. _Core._ Authors listed in source: Aaron van den Oord, Nal Kalchbrenner, Oriol Vinyals, Lasse Espeholt, Alex Graves, Koray Kavukcuoglu.
- [PixelCNN++](https://arxiv.org/abs/1701.05517) - PixelCNN++: Improving the PixelCNN with Discretized Logistic Mixture Likelihood and Other Modifications. _Recommended._ Authors listed in source: Tim Salimans, Andrej Karpathy, Xi Chen, Diederik P. Kingma.
- [PixelSNAIL](https://arxiv.org/abs/1712.09763) - PixelSNAIL: An Improved Autoregressive Generative Model. _Recommended._ Authors listed in source: Xi Chen, Nikhil Mishra, Mostafa Rohaninejad, Pieter Abbeel.
- [WaveNet](https://arxiv.org/abs/1609.03499) - WaveNet: A Generative Model for Raw Audio. _Core._ Authors listed in source: Aaron van den Oord, Sander Dieleman, Heiga Zen, Karen Simonyan, Oriol Vinyals, Alex Graves, Nal Kalchbrenner, Andrew Senior, Koray Kavukcuoglu.
- [WaveRNN](https://arxiv.org/abs/1802.08435) - Efficient Neural Audio Synthesis. _Recommended._ Authors listed in source: Nal Kalchbrenner, Erich Elsen, Karen Simonyan, Seb Noury, Norman Casagrande, Edward Lockhart, Florian Stimberg, Aaron van den Oord, Sander Dieleman, Koray Kavukcuoglu.
- [SPN](https://arxiv.org/abs/1812.01608) - Generating High Fidelity Images with Subscale Pixel Networks and Multidimensional Upscaling. _Recommended._ Authors listed in source: Jacob Menick, Nal Kalchbrenner.
- [Image Transformer](https://arxiv.org/abs/1802.05751) - Generating High Fidelity Images with Subscale Pixel Networks and Multidimensional Upscaling. _Recommended._ Authors listed in source: Niki Parmar, Ashish Vaswani, Jakob Uszkoreit, Łukasz Kaiser, Noam Shazeer, Alexander Ku, Dustin Tran.

### Normalizing Flows

- [NICE](https://arxiv.org/abs/1410.8516) - NICE: Non-linear Independent Components Estimation. _Recommended._ Authors listed in source: Laurent Dinh, David Krueger, Yoshua Bengio.
- [RealNVP](https://arxiv.org/abs/1605.08803) - Density Estimation Using Real NVP. _Core._ Authors listed in source: Laurent Dinh, Jascha Sohl-Dickstein, Samy Bengio.
- [Glow](https://arxiv.org/abs/1807.03039) - Glow: Generative Flow with Invertible 1x1 Convolutions. _Core._ Authors listed in source: Diederik P. Kingma, Prafulla Dhariwal.
- [WaveGlow](https://arxiv.org/abs/1811.00002) - WaveGlow: A Flow-based Generative Network for Speech Synthesis. _Supplemental._ Authors listed in source: Ryan Prenger, Rafael Valle, Bryan Catanzaro.
- [Flow++](https://arxiv.org/abs/1902.00275) - Flow++: Improving Flow-Based Generative Models with Variational Dequantization and Architecture Design. _Supplemental._ Authors listed in source: Jonathan Ho, Xi Chen, Aravind Srinivas, Yan Duan, Pieter Abbeel.
- [Parallel WaveNet](https://arxiv.org/abs/1711.10433) - Parallel WaveNet: Fast High-Fidelity Speech Synthesis. _Recommended._ Authors listed in source: Aaron van den Oord, Yazhe Li, Igor Babuschkin, Karen Simonyan, Oriol Vinyals, Koray Kavukcuoglu, George van den Driessche, Edward Lockhart, Luis C. Cobo, Florian Stimberg, Norman Casagrande, Dominik Grewe, Seb Noury, Sander Dieleman, Erich Elsen, Nal Kalchbrenner, Heiga Zen, Alex Graves, Helen King, Tom Walters, Dan Belov, Demis Hassabis.

### Variational AutoEncoders

- [VAE Tutorial](https://arxiv.org/abs/1606.05908) - Tutorial on Variational Autoencoders. _Core._ Authors listed in source: Carl Doersch.
- [beta-VAE](https://openreview.net/forum?id=Sy2fzU9gl) - beta-VAE: Learning Basic Visual Concepts with a Constrained Variational Framework. _Supplemental._ Authors listed in source: Irina Higgins, Loic Matthey, Arka Pal, Christopher Burgess, Xavier Glorot, Matthew Botvinick, Shakir Mohamed, Alexander Lerchner.
- [VQ-VAE](https://arxiv.org/abs/1711.00937) - Neural Discrete Representation Learning. _Recommended._ Authors listed in source: Aaron van den Oord, Oriol Vinyals, Koray Kavukcuoglu.
- [VQ-VAE-2](https://arxiv.org/abs/1906.00446) - Generating Diverse High-Fidelity Images with VQ-VAE-2. _Recommended._ Authors listed in source: Ali Razavi, Aaron van den Oord, Oriol Vinyals.
- [Variational Inference with Flows](https://arxiv.org/abs/1505.05770) - Variational Inference with Normalizing Flows. _Supplemental._ Authors listed in source: Danilo Jimenez Rezende, Shakir Mohamed.
- [IAF](https://arxiv.org/abs/1606.04934) - Improving Variational Inference with Inverse Autoregressive Flow. _Recommended._ Authors listed in source: Diederik P. Kingma, Tim Salimans, Rafal Jozefowicz, Xi Chen, Ilya Sutskever, Max Welling.
- [Variational Lossy Autoencoder](https://arxiv.org/abs/1611.02731). _Supplemental._ Authors listed in source: Xi Chen, Diederik P. Kingma, Tim Salimans, Yan Duan, Prafulla Dhariwal, John Schulman, Ilya Sutskever, Pieter Abbeel.

### Other Representation Learning

- [SDAE](http://www.jmlr.org/papers/volume11/vincent10a/vincent10a.pdf) - Stacked Denoising Autoencoders: Learning Useful Representations in a Deep Network with a Local Denoising Criterion. _Supplemental._ Authors listed in source: Pascal Vincent, Hugo Larochelle, Isabelle Lojoie, Yoshua Bengio, Pierre-Antoine Manzagol.
- [Revisiting Self-Sup Learning](https://arxiv.org/abs/1901.09005) - Revisiting Self-Supervised Visual Representation Learning. _Recommended._ Authors listed in source: Alexander Kolesnikov, Xiaohua Zhai, Lucas Beyer.
- [Puzzle](https://arxiv.org/abs/1505.05192) - Unsupervised Visual Representation Learning by Context Prediction. _Supplemental._ Authors listed in source: Carl Doersch, Abhinav Gupta, Alexei A. Efros.
- [RotNet](https://arxiv.org/abs/1803.07728) - Unsupervised Representation Learning by Predicting Image Rotations. _Core._ Authors listed in source: Spyros Gidaris, Praveer Singh, Nikos Komodakis.
- [CPC](https://arxiv.org/abs/1807.03748) - Representation Learning with Contrastive Predictive Coding. _Core._ Authors listed in source: Aaron van den Oord, Yazhe Li, Oriol Vinyals.
- [Imagenet Transfer](https://arxiv.org/abs/1805.08974) - Do Better ImageNet Models Transfer Better?. _Recommended._ Authors listed in source: Simon Kornblith, Jonathon Shlens, Quoc V. Le.
- [Instagram Models](https://arxiv.org/abs/1805.00932) - Exploring the Limits of Weakly Supervised Pretraining. _Recommended._ Authors listed in source: Dhruv Mahajan, Ross Girshick, Vignesh Ramanathan, Kaiming He, Manohar Paluri, Yixuan Li, Ashwin Bharambe, Laurens van der Maaten.

### Evaluating Generative Models

- [A Note](https://arxiv.org/abs/1511.01844) - A Note on the Evaluation of Generative Models. _Recommended._ Authors listed in source: Lucas Theis, Aaron van den Oord, Matthias Bethge.
- [A Note on IS](https://arxiv.org/abs/1801.01973) - A Note on the Inception Score. _Core._ Authors listed in source: Shane Barratt, Rishi Sharma.
- [FID Explanation](https://medium.com/@jonathan_hui/gan-how-to-measure-gan-performance-64b988c47732) - How to measure GAN performance. _Recommended._ Authors listed in source: Jonathan Hui.
- [NND](https://openreview.net/forum?id=HkxKH2AcFm) - Towards GAN Benchmarks Which Require Generalization. _Recommended._ Authors listed in source: Ishaan Gulrajani, Colin Raffel, Luke Metz.
- [Pros & Cons of GAN Metrics](https://arxiv.org/abs/1802.03446) - Pros and Cons of GAN Evaluation Measures. _Supplemental._ Authors listed in source: Ali Borji.
- [Skill Rating](https://arxiv.org/abs/1808.04888) - Skill Rating for Generative Models. _Supplemental._ Authors listed in source: Catherine Olsson, Surya Bhupatiraju, Tom Brown, Augustus Odena, Ian Goodfellow.

## Theory

Entries in this section: 30.

### Generalization

- [Rethinking Generalization](https://arxiv.org/abs/1611.03530) - Understanding Deep Learning Requires Rethinking Generalization. _Core._
- [Large-Batch Training](https://arxiv.org/abs/1609.04836) - On Large-Batch Training for Deep Learning: Generalization Gap and Sharp Minima. _Recommended._
- [Sharp Minima](https://arxiv.org/abs/1703.04933) - Sharp Minima Can Generalize for Deep Nets. _Supplemental._
- [Parameter-Function Map](https://arxiv.org/abs/1805.08522) - Deep Learning Generalizes Because the Parameter-Function Map is Biased Towards Simple Functions. _Core._

### Robustness

### Adversarial Robustness

- [Towards Evaluating the Robustness of Neural Networks](https://arxiv.org/abs/1608.04644). _Reference._
- [Towards Deep Learning Models Resistant to Adversarial Attacks](https://arxiv.org/abs/1706.06083). _Reference._
- [Robustness May Be At Odds With Accuracy](https://arxiv.org/abs/1805.12152). _Reference._
- [Adversarially Robust Generalization Requires More Data](https://arxiv.org/abs/1804.11285). _Reference._
- [Adversarial Examples Are Not Bugs, They Are Features](https://arxiv.org/abs/1905.02175). _Reference._
- [Certified Adversarial Robustness via Randomized Smoothing](https://arxiv.org/abs/1902.02918). _Reference._

### Non-Adversarial Robustness

- [Generalisation in Humans and Deep Neural Networks](https://arxiv.org/abs/1808.08750). _Reference._
- [Benchmarking Neural Network Robustness to Common Corruptions and Surface Variations](https://arxiv.org/abs/1807.01697). _Recommended._
- [Texture Bias](https://arxiv.org/abs/1811.12231) - ImageNet-Trained Cnns Are Biased Towards Texture; Increasing Shape Bias Improves Accuracy and Robustness . _Core._
- [Do ImageNet Classifiers Generalize to ImageNet?](https://arxiv.org/abs/1902.10811). _Core._
- [When Robustness Doesn't Promote Robustness](https://openreview.net/forum?id=HyxPIyrFvH) - When Robustness Doesn’t Promote Robustness: Synthetic vs. Natural Distribution Shifts on ImageNet. _Recommended._
- [Should Adversarial Attacks Use Pixel p-Norm?](https://arxiv.org/abs/1906.02439). _Reference._
- [Transfer of Adversarial Robustness Between Perturbation Types](https://arxiv.org/abs/1905.01034). _Reference._

### Optimization

### Optimizers

- [Adagrad](http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf) - Adaptive Subgradient Methods for Online Learning and Stochastic Optimization. _Supplemental._
- [Adadelta](https://arxiv.org/abs/1212.5701) - ADADELTA: An Adaptive Learning Rate Method. _Supplemental._
- [RMSProp](https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf) - RMSProp Slides. _Supplemental._
- [Adam](https://arxiv.org/abs/1412.6980) - Adam: A Method for Stochastic Optimization. _Core._
- [RAdam](https://arxiv.org/abs/1908.03265) - On the Variance of the Adaptive Learning Rate and Beyond. _Recommended._
- [Lookahead](https://arxiv.org/abs/1907.08610) - Lookahead Optimizer: k Steps Forward, 1 Step Back. _Recommended._

### Non-Optimizers

- [One Neuron](https://arxiv.org/abs/1805.08671) - Adding One Neuron Can Eliminate All Bad Local Minima. _Supplemental._
- [Goldilocks Zone](https://arxiv.org/abs/1807.02581) - The Goldilocks Zone: Towards Better Understanding of Neural Network Loss Landscapes. _Recommended._
- [The Lottery Ticket Hypothesis](https://arxiv.org/abs/1803.03635) - The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks. _Core._
- [Visualizing the Loss Landscape of Neural Nets](https://arxiv.org/abs/1712.09913). _Recommended._
- [Qualitatively Characterizing Neural Network Optimization Problems](https://arxiv.org/abs/1412.6544). _Recommended._
- [Large-Batch Training](https://arxiv.org/abs/1812.06162) - An Empirical Model of Large-Batch Training. _Core._
- [On The Marginal Value of Adaptive Gradient Methods in Machine Learning](https://arxiv.org/abs/1705.08292). _Recommended._

## Neural Architecture Search

Entries in this section: 13.

### Random Search

- [Random Search](https://arxiv.org/abs/1902.07638) - Random Search and Reproducibility for Neural Architecture Search. _Core._

### RL Based

- [NAS with RL](https://arxiv.org/abs/1611.01578) - Neural Architecture Search with Reinforcement Learning. _Core._
- [Optimizer Search](https://arxiv.org/abs/1709.07417) - Neural Optimizer Search with Reinforcement Learning. _Supplemental._
- [ENAS](https://arxiv.org/abs/1802.03268) - Efficient Neural Architecture Search via Parameter Sharing. _Recommended._
- [NASNet](https://arxiv.org/abs/1707.07012) - Learning Transferable Architectures for Scalable Image Recognition. _Recommended._
- [MobileNet-v3](https://arxiv.org/abs/1905.02244) - Searching for MobileNetV3. _Recommended._

### Hierarchial

- [Hierarchical Representations](https://arxiv.org/abs/1711.00436) - Hierarchical Representations for Efficient Architecture Search. _Recommended._
- [PNAS](https://arxiv.org/abs/1712.00559) - Progressive Neural Architecture Search. _Core._

### Differentiable

- [DARTS](https://arxiv.org/abs/1806.09055) - DARTS: Differentiable Architecture Search. _Core._
- [DARTS+](https://arxiv.org/abs/1909.06035) - Improved Differentiable Architecture Search with Early Stopping. _Supplemental._

### Evolutionary

- [AmoebaNet](https://arxiv.org/abs/1802.01548) - Regularized Evolution for Image Classifier Architecture Search. _Recommended._

### Other Architecture Search

- [Weight Sharing](http://proceedings.mlr.press/v80/bender18a/bender18a.pdf) - Understanding and Simplifying One-Shot Architecture Search. _Supplemental._
- [MorphNet](https://arxiv.org/abs/1711.06798) - MorphNet: Fast & Simple Resource-Constrained Structure Learning of Deep Networks. _Supplemental._

## Reinforcement Learning

Entries in this section: 35.

### Q Learning

- [DQN](https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf) - Playing Atari With Deep Reinforcement Learning. _Reference._
- [DDPG](https://arxiv.org/abs/1509.02971) - Continuous Control with Deep Reinforcement Learning. _Reference._
- [TD3](https://arxiv.org/abs/1802.09477) - Addressing Function Approximation Error in Actor-Critic Methods. _Reference._
- [SAC](https://arxiv.org/abs/1801.01290) - Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor. _Reference._

### Policy Gradients

- [REINFORCE](http://www-anw.cs.umass.edu/~barto/courses/cs687/williams92simple.pdf) - Simple Statistical Gradient-following Algorithms for Connectionist Reinforcement Learning. _Reference._
- [TRPO](https://arxiv.org/abs/1502.05477) - Trust Region Policy Optimization. _Reference._
- [PPO](https://arxiv.org/abs/1707.06347) - Proximal Policy Optimization Algorithms. _Reference._

### Model Based RL

- **Dyna**. _Reference._
- [GPS](https://graphics.stanford.edu/projects/gpspaper/gps_full.pdf) - Guided Policy Search. _Reference._
- [MBPO](https://arxiv.org/abs/1906.08253) - When to Trust Your Model: Model-Based Policy Optimization. _Reference._
- [DSAE](https://arxiv.org/abs/1509.06113) - Deep Spatial Autoencoders for Visuomotor Learning. _Reference._
- [PETS](https://arxiv.org/abs/1805.12114) - Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models. _Reference._
- [POPLIN](https://arxiv.org/abs/1906.08649) - Exploring Model-based Planning with Policy Networks. _Reference._

### Meta RL

- [MAML](https://arxiv.org/abs/1703.03400) - Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks. _Reference._
- [PEARL](https://arxiv.org/abs/1903.08254) - Efficient Off-Policy Meta-Reinforcement Learning via Probabilistic Context Variables. _Reference._

### Off-Policy RL

- [BEAR](https://arxiv.org/abs/1906.00949) - Stabilizing Off-Policy Q-Learning via Bootstrapping Error Reduction. _Reference._
- [BCQ](https://arxiv.org/abs/1812.02900) - Off-Policy Deep Reinforcement Learning without Exploration. _Reference._

### Goal Conditioned RL

- [HER](https://arxiv.org/abs/1707.01495) - Hindsight Experience Replay. _Reference._
- [UVF](http://proceedings.mlr.press/v37/schaul15.pdf) - Universal Value Function Approximators. _Reference._
- [RIG](https://arxiv.org/abs/1807.04742) - Visual Reinforcement Learning with Imagined Goals. _Reference._
- [Goal GAN](https://arxiv.org/abs/1705.06366) - Automatic Goal Generation for Reinforcement Learning Agents. _Reference._

### Inverse RL / Reward Learning

- [GAIL](https://arxiv.org/abs/1606.03476) - Generative Adversarial Imitation Learning. _Reference._
- [VICE](https://arxiv.org/abs/1805.11686) - Variational Inverse Control with Events: A General Framework for Data-Driven Reward Definition. _Reference._
- [Maximum Entropy Inverse Reinforcement Learning](https://www.aaai.org/Papers/AAAI/2008/AAAI08-227.pdf). _Reference._
- [Maximum Entropy Deep Inverse Reinforcement Learning](https://arxiv.org/abs/1507.04888). _Reference._

### Imitation Learning

- **Behavioral Cloning**. _Reference._
- [DAgger](https://www.cs.cmu.edu/~sross1/publications/Ross-AIStats11-NoRegret.pdf) - A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning. _Reference._
- [MIL](https://arxiv.org/abs/1709.04905) - One-Shot Visual Imitation Learning via Meta-Learning. _Reference._

### Exploration

- [Curiosity](https://pathak22.github.io/noreward-rl/resources/icml17.pdf) - Curiosity-driven Exploration by Self-supervised Prediction. _Reference._
- [Count-Based Exploration](https://arxiv.org/abs/1606.01868) - Unifying Count-Based Exploration and Intrinsic Motivation. _Reference._

### Self-Play

- [AlphaGo](https://www.nature.com/articles/nature16961) - Mastering the Game of Go with Deep Neural Networks and Tree Search. _Reference._
- [AlphaZero](https://arxiv.org/abs/1712.01815) - Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm. _Reference._
- [Asymmetric Self-Play](https://arxiv.org/abs/1703.05407) - Intrinsic Motivation and Automatic Curricula via Asymmetric Self-Play. _Reference._
- [Multi-Agent Competition](https://arxiv.org/abs/1710.03748) - Emergent Complexity via Multi-Agent Competition. _Reference._
- [OpenAI Hide-and-Seek](https://arxiv.org/abs/1909.07528) - Emergent Tool Use From Multi-Agent Autocurricula. _Reference._

## Sequential / NLP

Entries in this section: 12.

### Word Vectors

- [Word2Vec](https://arxiv.org/abs/1301.3781) - Efficient Estimation of Word Representations in Vector Space. _Core._
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - GloVe: Global Vectors for Word Representation. _Supplemental._
- [Poincare GloVe](https://arxiv.org/abs/1810.06546) - Poincaré GloVe: Hyperbolic Word Embeddings. _Supplemental._

### Attention

- [Align & Translate](https://arxiv.org/abs/1409.0473) - Neural Machine Translation by Jointly Learning to Align and Translate. _Recommended._
- [ByteNet](https://arxiv.org/abs/1610.10099) - Neural Machine Translation in Linear Time. _Supplemental._
- [Transformer](https://arxiv.org/abs/1706.03762) - Attention is All You Need. _Core._
- [Transformer-XL](https://arxiv.org/abs/1901.02860) - Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context. _Supplemental._
- [Reformer](https://openreview.net/forum?id=rkgNKkHtvB) - The Reformer: The Efficient Transformer. _Recommended._

### Unsupervised

- [BERT](https://arxiv.org/abs/1810.04805) - BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. _Core._
- [GPT](https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf) - Improving Language Understanding by Generative Pre-Training. _Supplemental._
- [GPT-2](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) - Language Models are Unsupervised Multitask Learners. _Recommended._
- [XLNet](https://arxiv.org/abs/1906.08237) - XLNet: Generalized Autoregressive Pretraining for Language Understanding. _Recommended._

## Image Captioning / VQA

Entries in this section: 52.

### Image Captioning Datasets

- [COCO](https://arxiv.org/abs/1405.0312) - Microsoft COCO: Common Objects in Context. _Core._
- [Flick30k Entities](https://arxiv.org/abs/1505.04870) - Flickr30k Entities: Collecting Region-to-Phrase Correspondences for Richer Image-to-Sentence Models. _Supplemental._
- [DAQUAR](https://papers.nips.cc/paper/5411-a-multi-world-approach-to-question-answering-about-real-world-scenes-based-on-uncertain-input.pdf) - A Multi-World Approach to Question Answeringabout Real-World Scenes based on Uncertain Inputs. _Supplemental._
- [Conceptual Captions](https://www.aclweb.org/anthology/P18-1238.pdf) - Conceptual Captions: A Cleaned, Hypernymed, Image Alt-text Dataset For Automatic Image Captioning. _Recommended._

### Visual Question Answering Datasets

- [Visual7W](https://arxiv.org/abs/1511.03416) - Visual7W: Grounded Question Answering in Images. _Supplemental._
- [Original VQA Paper](https://arxiv.org/abs/1505.00468) - VQA: Visual Question Answering. _Core._
- [Visual Madlibs](https://arxiv.org/abs/1506.00278) - Visual Madlibs: Fill in the blank Image Generation and Question Answering. _Supplemental._
- [COCO-QA](https://arxiv.org/abs/1505.02074) - Exploring Models and Data for Image Question Answering. _Supplemental._
- [CLEVR](https://arxiv.org/abs/1612.06890) - CLEVR: A Diagnostic Dataset for Compositional Language and Elementary Visual Reasoning. _Supplemental._

### Evaluation Metrics

- [BLEU](https://dl.acm.org/citation.cfm?id=1073135) - BLEU: A Method for Automatic Evaluation of Machine Translation. _Recommended._
- [Meteor](https://dl.acm.org/citation.cfm?id=1626389) - Meteor: An Automatic Metric for MT Evaluation with High Levels of Correlation with Human Judgments. _Supplemental._
- [ROUGE](https://www.aclweb.org/anthology/W04-1013/) - ROUGE: A Package for Automatic Evaluation of Summaries. _Supplemental._
- [CIDEr](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Vedantam_CIDEr_Consensus-Based_Image_2015_CVPR_paper.pdf) - CIDEr: Consensus-based Image Description Evaluation. _Core._
- [SPICE](https://arxiv.org/abs/1607.08822) - SPICE: Semantic Propositional Image Caption Evaluation. _Core._
- [Policy Gradients for SPIDEr](https://arxiv.org/abs/1612.00370) - Improved Image Captioning via Policy Gradient optimization of SPIDEr. _Reference._
- [Word Mover's Distance](https://www.aclweb.org/anthology/E17-1019/) - Re-evaluating Automatic Metrics for Image Captioning. _Supplemental._

### Attention Models

- [Knowing When to Look: Adaptive Attention via A Visual Sentinel for Image Captioning](https://arxiv.org/abs/1612.01887). _Recommended._
- [Bottom-Up and Top-Down Attention for Image Captioning and Visual Question Answering](https://arxiv.org/abs/1707.07998). _Core._
- [Show, Attend, and Tell](https://arxiv.org/abs/1502.03044) - Show, Attend and Tell: Neural Image Caption Generation with Visual Attention. _Recommended._
- [Conceptual Captions (Transformer Language Model)](https://www.aclweb.org/anthology/P18-1238.pdf) - Conceptual Captions: A Cleaned, Hypernymed, Image Alt-text Dataset For Automatic Image Captioning. _Recommended._
- [FiLM](https://arxiv.org/abs/1709.07871) - FiLM: Visual Reasoning with a General Conditioning Layer. _Recommended._
- [Incorporating Copying Mechanism in Image Captioning for Learning Novel Objects](https://arxiv.org/abs/1708.05271). _Supplemental._

### Modular Architectures

- [Neural Baby Talk](https://arxiv.org/abs/1803.09845). _Recommended._
- [Neural Module Networks](https://arxiv.org/abs/1511.02799). _Reference._
- [Learning to Compose Neural Networks for Question Answering](https://arxiv.org/abs/1601.01705). _Core._
- [Learning to Reason: End-to-End Module Networks for Visual Question Answering](https://arxiv.org/abs/1704.05526). _Recommended._
- [Modeling Relationships in Referential Expressions with Compositional Modular Networks](https://arxiv.org/abs/1611.09978). _Supplemental._

### Foundations

- [Baby Talk](http://tamaraberg.com/papers/generation_cvpr11.pdf) - Baby Talk: Understanding and Generating Image Descriptions. _Supplemental._
- [Show and Tell](https://arxiv.org/abs/1411.4555) - Show and Tell: A Neural Image Caption Generator. _Recommended._
- [Long-term Recurrent Convolutional Networks for Visual Recognition and Description](https://arxiv.org/abs/1411.4389). _Supplemental._

### Other Versions of Image Captioning

- [DenseCap](https://arxiv.org/abs/1511.07571) - DenseCap: Fully Convolutional Localization Networks for Dense Captioning. _Supplemental._
- [Deep Visual-Semantic Alignments for Generating Image Descriptions](https://arxiv.org/abs/1412.2306). _Recommended._
- [Nocaps](https://arxiv.org/abs/1812.08658) - Nocaps: Novel Object Captioning at Scale. _Supplemental._
- [Deep Compositional Captioning](https://arxiv.org/abs/1511.05284) - Deep Compositional Captioning: Describing Novel Object Categories without Paired Training Data. _Recommended._
- [Captioning Images with Diverse Objects](https://arxiv.org/abs/1606.07770). _Supplemental._

### Incorporating Visual Attributes

- [Boosting Image Captioning with Attributes](https://arxiv.org/abs/1611.01646). _Recommended._
- [Image Captioning with Semantic Attention](https://arxiv.org/abs/1603.03925). _Supplemental._
- [Show, Observe, and Tell](https://www.ijcai.org/proceedings/2018/0084.pdf) - Show, Observe and Tell: Attribute-driven Attention Model for Image Captioning. _Supplemental._

### Decoding Methods

- [Beam Search](https://en.wikipedia.org/wiki/Beam_search). _Recommended._
- [Guided Open Vocabulary Image Captioning with Constrained Beam Search](https://arxiv.org/abs/1612.00576). _Recommended._
- [Lexically Constrained Decoding for Sequence Generation Using Grid Beam Search](https://arxiv.org/abs/1704.07138). _Supplemental._

### Style Transfer

- [Show, Adapt, and Tell](https://arxiv.org/abs/1705.00930) - Show, Adapt and Tell: Adversarial Training of Cross-domain Image Captioner. _Recommended._
- [StyleNet](https://www.microsoft.com/en-us/research/uploads/prod/2017/06/Generating-Attractive-Visual-Captions-with-Styles.pdf) - StyleNet: Generating Attractive Visual Captions with Styles. _Supplemental._

### Discriminability

- [Discriminability Objective for Training Descriptive Captions](https://arxiv.org/abs/1803.04376). _Supplemental._
- [Show, Tell, and Discriminate](https://arxiv.org/abs/1803.08314) - Show, Tell and Discriminate: Image Captioning by Self-retrieval with Partially Labeled Data. _Supplemental._

### Navigation

- [Vision-and-Language Navigation](https://arxiv.org/abs/1711.07280) - Vision-and-Language Navigation: Interpreting Visually-Grounded Navigation Instructions in Real Environments. _Core._

### Open-Source Pretrained Models

- [Pythia](https://github.com/facebookresearch/pythia). _Reference._

### Field Leaders

- [Trevor Darrell](https://people.eecs.berkeley.edu/~trevor/). _Reference._
- [Devi Parikh](https://www.cc.gatech.edu/~parikh/). _Reference._
- [Dhruv Batra](https://www.cc.gatech.edu/~dbatra/). _Reference._
- [Peter Anderson](https://panderson.me/). _Reference._
- [Stefen Lee](http://web.engr.oregonstate.edu/~leestef/). _Reference._

## Miscellaneous

Entries in this section: 5.

### Augmentation

- [Mixup](https://arxiv.org/abs/1710.09412) - Mixup: Beyond Empirical Risk Minimization. _Recommended._
- [AutoAugment](https://arxiv.org/abs/1805.09501) - AutoAugment: Learning Augmentation Policies from Data. _Core._
- [PBA](https://arxiv.org/abs/1905.05393) - Population Based Augmentation: Efficient Learning of Augmentation Policy Schedules. _Supplemental._
- [RandAugment](https://arxiv.org/abs/1909.13719) - RandAugment: Practical Automated Data Augmentation with a Reduced Search Space. _Recommended._

### Other

- [Neural ODEs](https://arxiv.org/abs/1806.07366) - Neural Ordinary Differential Equations. _Reference._

## Attribution

Original curation credit belongs to Machine Learning at Berkeley and the contributors named in the archived site:

- Chris Bender
- Phillip Kravtsov
- Brian Friedenberg
- Murtaza Dalal
- Rohan Taori
- Brandon Trabucco

Source archive:

- https://web.archive.org/web/20240105220759/https://ml.berkeley.edu/reading-list/

This markdown version preserves factual paper/resource metadata and topic organization from the archived public bundle. It intentionally omits the original long-form explanatory section prose and uses new repository-level wording.

This project is independent and is not affiliated with, endorsed by, or maintained by Machine Learning at Berkeley unless they choose to adopt it later.
