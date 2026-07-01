# Systems for ML

Source section from the archived ML@B reading list. This markdown version keeps the paper metadata and topic nesting, while omitting the original long-form explanatory prose.

- Source archive: https://web.archive.org/web/20240105220759/https://ml.berkeley.edu/reading-list/
- Entries in this section: 36

Priority labels in this repository: Core, Recommended, Supplemental, Reference.

## Overviews

- [Hidden Technical Debt in Machine Learning Systems](https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems). _Core._
- [A Berkeley View of Systems Challenges for AI](https://arxiv.org/abs/1712.05855). _Recommended._

## Small Models

- [MobileNet](https://arxiv.org/abs/1704.04861) - MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications. _Core._
- [MobileNet-v2](https://arxiv.org/abs/1801.04381) - MobileNetV2: Inverted Residuals and Linear Bottlenecks. _Recommended._
- [MobileNet-v3](https://arxiv.org/abs/1905.02244) - Searching for MobileNetV3. _Recommended._
- [SqueezeNet](https://arxiv.org/abs/1602.07360) - SqueezeNet: AlexNet-Level Accuracy with 50x Fewer Parameters and <0.5MB Model Size. _Supplemental._
- [EfficientNet](https://arxiv.org/abs/1905.11946) - EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks. _Core._
- [SqueezeDet](https://arxiv.org/abs/1612.01051) - SqueezeDet: Unified, Small, Low Power Fully Convolutional Neural Networks for Real-Time Object Detection for Autonomous Driving. _Supplemental._

## Hyperparameter Search

- [Hyperband](https://arxiv.org/abs/1603.06560) - Hyperband: A Novel Bandit-Based Approach to Hyperparameter Optimization. _Core._
- [ASHA](https://arxiv.org/abs/1810.05934) - Massively Parallel Hyperparameter Tuning. _Core._
- [PBT](https://arxiv.org/abs/1711.09846) - Population Based Training of Neural Networks. _Recommended._

## Quantization

- [A Survey on Methods and Theories of Quantized Neural Networks](https://arxiv.org/abs/1808.04752). _Reference._
- [Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference](https://arxiv.org/abs/1712.05877). _Reference._
- [Fixed Point Quantization of Deep Convolutional Networks](https://arxiv.org/abs/1511.06393). _Reference._
- [Mixed Precision Quantization of ConvNets via Differentiable Neural Architecture Search](https://arxiv.org/abs/1812.00090). _Reference._
- [XNOR-Net](https://arxiv.org/abs/1603.05279) - XNOR-Net: ImageNet Classification Using Binary Convolutional Neural Networks. _Reference._

## Model Serving

- [InferLine](https://ucbrise.github.io/cs294-ai-sys-fa19/assets/preprint/inferline_draft.pdf) - InferLine: Prediction Pipeline Provisioning and Management for Tight Latency Objectives. _Recommended._

## Graph Compilation

- [TVM](https://arxiv.org/abs/1802.04799) - TVM: An Automated End-to-End Optimizing Compiler for Deep Learning. _Core._

## Distributed Training

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

## Low Memory

### Training

- [RevNet](https://arxiv.org/abs/1707.04585) - The Reversible Residual Network: Backpropagation Without Storing Activations. _Reference._
- [Gradient Checkpointing](https://arxiv.org/pdf/1904.10631.pdf) - Low-Memory Neural Network Training: A Technical Report. _Reference._

---

Credit for the original curation belongs to Machine Learning at Berkeley and the contributors named in the original archived site. See [ATTRIBUTION.md](../ATTRIBUTION.md).
