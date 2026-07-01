# Unsupervised Learning

Source section from the archived ML@B reading list. This markdown version keeps the paper metadata and topic nesting, while omitting the original long-form explanatory prose.

- Source archive: https://web.archive.org/web/20240105220759/https://ml.berkeley.edu/reading-list/
- Entries in this section: 57

Priority labels in this repository: Core, Recommended, Supplemental, Reference.

## Generative Adversarial Networks

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

## Style Transfer and Colorization

- [pix2pix](https://arxiv.org/abs/1611.07004) - Image-to-Image Translation with Conditional Adversarial Networks. _Recommended._ Authors listed in source: Phillip Isola, Jun-Yan Zhu, Tinghui Zhou, Alexei A. Efros.
- [CycleGAN](https://arxiv.org/abs/1703.10593) - Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks. _Core._ Authors listed in source: Jun-Yan Zhu, Taesung Park, Phillip Isola, Alexei A. Efros.
- [Attention-Guided CycleGAN](https://arxiv.org/abs/1806.02311) - Unsupervised Attention-Guided Image to Image Translation.. _Supplemental._ Authors listed in source: Youssef A. Mejjati, Christian Richardt, James Tompkin, Darren Cosker, Kwang In Kim.
- [vid2vid](https://arxiv.org/abs/1808.06601) - Video-to-Video Synthesis. _Recommended._ Authors listed in source: Ting-Chun Wang, Ming-Yu Liu, Jun-Yan Zhu, Guilin Liu, Andrew Tao, Jan Kautz, Bryan Catanzaro.
- [Everybody Dance Now](https://arxiv.org/abs/1808.07371). _Supplemental._ Authors listed in source: Caroline Chan, Shiry Ginosar, Tinghui Zhou, Alexei A. Efros.
- [Style Transfer](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf) - Image Style Transfer Using Convolutional Neural Networks. _Core._ Authors listed in source: Leon A. Gatys, Alexander S. Ecker, Matthias Bethge.
- [Fast Style Transfer](https://arxiv.org/abs/1603.08155) - Perceptual Losses for Real-Time Style Transfer and Super-Resolution. _Recommended._ Authors listed in source: Justin Johnson, Alexandre Alahi, Li Fei-Fei.
- [Image Colorization](https://arxiv.org/abs/1603.08511) - Colorful Image Colorization. _Recommended._ Authors listed in source: Richard Zhang, Phillip Isola, Alexei A. Efros.
- [Tracking Emerges](https://arxiv.org/abs/1806.09594) - Tracking Emerges by Colorizing Videos. _Recommended._ Authors listed in source: Carl Vondrick, Abhinav Shrivastava, Alireza Fathi, Sergio Guadarrama, Kevin Murphy.

## Autoregressive Models

- [MADE](https://arxiv.org/abs/1502.03509) - MADE: Masked Autoencoder for Distribution Estimation. _Supplemental._ Authors listed in source: Mathieu Germain, Karol Gregor, Iain Murray, Hugo Larochelle.
- [Pixel Recurrent Neural Networks](https://arxiv.org/abs/1601.06759). _Recommended._ Authors listed in source: Aaron van den Oord, Nal Kalchbrenner, Koray Kavukcuoglu.
- [PixelCNN](https://arxiv.org/abs/1606.05328) - Conditional Image Generation with PixelCNN Decoders. _Core._ Authors listed in source: Aaron van den Oord, Nal Kalchbrenner, Oriol Vinyals, Lasse Espeholt, Alex Graves, Koray Kavukcuoglu.
- [PixelCNN++](https://arxiv.org/abs/1701.05517) - PixelCNN++: Improving the PixelCNN with Discretized Logistic Mixture Likelihood and Other Modifications. _Recommended._ Authors listed in source: Tim Salimans, Andrej Karpathy, Xi Chen, Diederik P. Kingma.
- [PixelSNAIL](https://arxiv.org/abs/1712.09763) - PixelSNAIL: An Improved Autoregressive Generative Model. _Recommended._ Authors listed in source: Xi Chen, Nikhil Mishra, Mostafa Rohaninejad, Pieter Abbeel.
- [WaveNet](https://arxiv.org/abs/1609.03499) - WaveNet: A Generative Model for Raw Audio. _Core._ Authors listed in source: Aaron van den Oord, Sander Dieleman, Heiga Zen, Karen Simonyan, Oriol Vinyals, Alex Graves, Nal Kalchbrenner, Andrew Senior, Koray Kavukcuoglu.
- [WaveRNN](https://arxiv.org/abs/1802.08435) - Efficient Neural Audio Synthesis. _Recommended._ Authors listed in source: Nal Kalchbrenner, Erich Elsen, Karen Simonyan, Seb Noury, Norman Casagrande, Edward Lockhart, Florian Stimberg, Aaron van den Oord, Sander Dieleman, Koray Kavukcuoglu.
- [SPN](https://arxiv.org/abs/1812.01608) - Generating High Fidelity Images with Subscale Pixel Networks and Multidimensional Upscaling. _Recommended._ Authors listed in source: Jacob Menick, Nal Kalchbrenner.
- [Image Transformer](https://arxiv.org/abs/1802.05751) - Generating High Fidelity Images with Subscale Pixel Networks and Multidimensional Upscaling. _Recommended._ Authors listed in source: Niki Parmar, Ashish Vaswani, Jakob Uszkoreit, Łukasz Kaiser, Noam Shazeer, Alexander Ku, Dustin Tran.

## Normalizing Flows

- [NICE](https://arxiv.org/abs/1410.8516) - NICE: Non-linear Independent Components Estimation. _Recommended._ Authors listed in source: Laurent Dinh, David Krueger, Yoshua Bengio.
- [RealNVP](https://arxiv.org/abs/1605.08803) - Density Estimation Using Real NVP. _Core._ Authors listed in source: Laurent Dinh, Jascha Sohl-Dickstein, Samy Bengio.
- [Glow](https://arxiv.org/abs/1807.03039) - Glow: Generative Flow with Invertible 1x1 Convolutions. _Core._ Authors listed in source: Diederik P. Kingma, Prafulla Dhariwal.
- [WaveGlow](https://arxiv.org/abs/1811.00002) - WaveGlow: A Flow-based Generative Network for Speech Synthesis. _Supplemental._ Authors listed in source: Ryan Prenger, Rafael Valle, Bryan Catanzaro.
- [Flow++](https://arxiv.org/abs/1902.00275) - Flow++: Improving Flow-Based Generative Models with Variational Dequantization and Architecture Design. _Supplemental._ Authors listed in source: Jonathan Ho, Xi Chen, Aravind Srinivas, Yan Duan, Pieter Abbeel.
- [Parallel WaveNet](https://arxiv.org/abs/1711.10433) - Parallel WaveNet: Fast High-Fidelity Speech Synthesis. _Recommended._ Authors listed in source: Aaron van den Oord, Yazhe Li, Igor Babuschkin, Karen Simonyan, Oriol Vinyals, Koray Kavukcuoglu, George van den Driessche, Edward Lockhart, Luis C. Cobo, Florian Stimberg, Norman Casagrande, Dominik Grewe, Seb Noury, Sander Dieleman, Erich Elsen, Nal Kalchbrenner, Heiga Zen, Alex Graves, Helen King, Tom Walters, Dan Belov, Demis Hassabis.

## Variational AutoEncoders

- [VAE Tutorial](https://arxiv.org/abs/1606.05908) - Tutorial on Variational Autoencoders. _Core._ Authors listed in source: Carl Doersch.
- [beta-VAE](https://openreview.net/forum?id=Sy2fzU9gl) - beta-VAE: Learning Basic Visual Concepts with a Constrained Variational Framework. _Supplemental._ Authors listed in source: Irina Higgins, Loic Matthey, Arka Pal, Christopher Burgess, Xavier Glorot, Matthew Botvinick, Shakir Mohamed, Alexander Lerchner.
- [VQ-VAE](https://arxiv.org/abs/1711.00937) - Neural Discrete Representation Learning. _Recommended._ Authors listed in source: Aaron van den Oord, Oriol Vinyals, Koray Kavukcuoglu.
- [VQ-VAE-2](https://arxiv.org/abs/1906.00446) - Generating Diverse High-Fidelity Images with VQ-VAE-2. _Recommended._ Authors listed in source: Ali Razavi, Aaron van den Oord, Oriol Vinyals.
- [Variational Inference with Flows](https://arxiv.org/abs/1505.05770) - Variational Inference with Normalizing Flows. _Supplemental._ Authors listed in source: Danilo Jimenez Rezende, Shakir Mohamed.
- [IAF](https://arxiv.org/abs/1606.04934) - Improving Variational Inference with Inverse Autoregressive Flow. _Recommended._ Authors listed in source: Diederik P. Kingma, Tim Salimans, Rafal Jozefowicz, Xi Chen, Ilya Sutskever, Max Welling.
- [Variational Lossy Autoencoder](https://arxiv.org/abs/1611.02731). _Supplemental._ Authors listed in source: Xi Chen, Diederik P. Kingma, Tim Salimans, Yan Duan, Prafulla Dhariwal, John Schulman, Ilya Sutskever, Pieter Abbeel.

## Other Representation Learning

- [SDAE](http://www.jmlr.org/papers/volume11/vincent10a/vincent10a.pdf) - Stacked Denoising Autoencoders: Learning Useful Representations in a Deep Network with a Local Denoising Criterion. _Supplemental._ Authors listed in source: Pascal Vincent, Hugo Larochelle, Isabelle Lojoie, Yoshua Bengio, Pierre-Antoine Manzagol.
- [Revisiting Self-Sup Learning](https://arxiv.org/abs/1901.09005) - Revisiting Self-Supervised Visual Representation Learning. _Recommended._ Authors listed in source: Alexander Kolesnikov, Xiaohua Zhai, Lucas Beyer.
- [Puzzle](https://arxiv.org/abs/1505.05192) - Unsupervised Visual Representation Learning by Context Prediction. _Supplemental._ Authors listed in source: Carl Doersch, Abhinav Gupta, Alexei A. Efros.
- [RotNet](https://arxiv.org/abs/1803.07728) - Unsupervised Representation Learning by Predicting Image Rotations. _Core._ Authors listed in source: Spyros Gidaris, Praveer Singh, Nikos Komodakis.
- [CPC](https://arxiv.org/abs/1807.03748) - Representation Learning with Contrastive Predictive Coding. _Core._ Authors listed in source: Aaron van den Oord, Yazhe Li, Oriol Vinyals.
- [Imagenet Transfer](https://arxiv.org/abs/1805.08974) - Do Better ImageNet Models Transfer Better?. _Recommended._ Authors listed in source: Simon Kornblith, Jonathon Shlens, Quoc V. Le.
- [Instagram Models](https://arxiv.org/abs/1805.00932) - Exploring the Limits of Weakly Supervised Pretraining. _Recommended._ Authors listed in source: Dhruv Mahajan, Ross Girshick, Vignesh Ramanathan, Kaiming He, Manohar Paluri, Yixuan Li, Ashwin Bharambe, Laurens van der Maaten.

## Evaluating Generative Models

- [A Note](https://arxiv.org/abs/1511.01844) - A Note on the Evaluation of Generative Models. _Recommended._ Authors listed in source: Lucas Theis, Aaron van den Oord, Matthias Bethge.
- [A Note on IS](https://arxiv.org/abs/1801.01973) - A Note on the Inception Score. _Core._ Authors listed in source: Shane Barratt, Rishi Sharma.
- [FID Explanation](https://medium.com/@jonathan_hui/gan-how-to-measure-gan-performance-64b988c47732) - How to measure GAN performance. _Recommended._ Authors listed in source: Jonathan Hui.
- [NND](https://openreview.net/forum?id=HkxKH2AcFm) - Towards GAN Benchmarks Which Require Generalization. _Recommended._ Authors listed in source: Ishaan Gulrajani, Colin Raffel, Luke Metz.
- [Pros & Cons of GAN Metrics](https://arxiv.org/abs/1802.03446) - Pros and Cons of GAN Evaluation Measures. _Supplemental._ Authors listed in source: Ali Borji.
- [Skill Rating](https://arxiv.org/abs/1808.04888) - Skill Rating for Generative Models. _Supplemental._ Authors listed in source: Catherine Olsson, Surya Bhupatiraju, Tom Brown, Augustus Odena, Ian Goodfellow.

---

Credit for the original curation belongs to Machine Learning at Berkeley and the contributors named in the original archived site. See [ATTRIBUTION.md](../ATTRIBUTION.md).
