/* ------------------------------------------------------------------
   PUBLICATIONS
   To add a paper: copy one entry, paste it at the top of the list, edit.

   Fields
     title     paper title
     authors   author string; your name is bolded automatically
     venue     journal / conference name
     detail    optional volume, pages, article number
     year      4-digit year
     type      journal | conference | preprint | abstract | thesis
     themes    any of: neuro | ai | edu | stats   (used on the Research page)
     award     optional text, shown as a crimson badge
     featured  true = shown on the home page
     links     optional { "Label": "https://..." }
------------------------------------------------------------------- */
window.PUBLICATIONS = [

/* ---------- 2026 ---------- */
{ title: "FACET: A Fragment-Aware Conformer Ensemble Transformer",
  authors: "D.M.H. Nguyen, T.Q. Nguyen, H.T.H. Le, M.T.N. Truong, T. Nguyen, N. Ho, K.D. Doan, D. Duong-Tran, L. Shen, D. Sonntag, J. Zou, M. Niepert, H. Kim, J.E. Allen",
  venue: "International Conference on Learning Representations (ICLR)", year: 2026, type: "conference", themes: ["ai"], featured: true },

{ title: "Disentangling homogeneous and heterogeneous representation of human functional connectome via graph learning",
  authors: "J. Chen, D. Duong-Tran, D.A. Tarzanagh, B. Hou, J. Bao, N. Nguyen, C. Xu, M. Xu, L. Shen",
  venue: "Journal of Neural Engineering", year: 2026, type: "journal", themes: ["neuro"] },

{ title: "From promising capabilities to pervasive bias: Assessing large language models for emergency department triage",
  authors: "J. Lee, T. Shang, J.Y. Baik, D. Duong-Tran, S. Yang, L. Li, L. Shen",
  venue: "Journal of Healthcare Informatics Research", year: 2026, type: "journal", themes: ["ai"],
  links: { "DOI": "https://doi.org/10.1007/s41666-026-00241-z" } },

{ title: "Divergence unveils further distinct phenotypic traits of human brain connectomics fingerprint",
  authors: "M.K. Uddin, N. Nguyen, H. Huang, D. Duong-Tran, J. Zheng",
  venue: "iScience", detail: "29(1)", year: 2026, type: "journal", themes: ["neuro"] },

{ title: "Interpretable Alzheimer's disease diagnosis via multimodal fusion of regional brain experts",
  authors: "F. Zhuang, S. Yang, D. Aliyeva, Z. Wen, D. Duong-Tran, C. Davatzikos, T. Chen, S. Wang, L. Shen",
  venue: "IEEE International Conference on Healthcare Informatics (ICHI)", detail: "pp. 311\u2013320", year: 2026, type: "conference", themes: ["ai"] },

{ title: "MSCA-Net: Multi-modal cell segmentation for spatial transcriptomics",
  authors: "J. Chen, C. Xu, H. Yu, K. Shen, A. Carroll, N. Wu, M.F. Mercado, J. Bao, S. Yang, D. Duong-Tran, \u2026 L. Shen",
  venue: "AMIA Informatics Summit", detail: "p. 77", year: 2026, type: "conference", themes: ["ai"] },

{ title: "Robust FDR control for neuroimaging-based classification via knockoffs",
  authors: "S. Garai, H. Chen, F. Xu, D. Duong-Tran, P. Chaudhari, C. Davatzikos, B.C. Brown, L. Shen",
  venue: "AMIA Informatics Summit", detail: "p. 137", year: 2026, type: "conference", themes: ["ai"] },

{ title: "Structural bottleneck reasoning: Efficient medical VQA via concept alignment",
  authors: "H. Nguyen, T.A.D. Le, T.D. Huy, N.B.N. Han, V.T. Dang, D. Duong-Tran, K.D. Doan, A. Liu, L. Shen, P. Xie, \u2026",
  venue: "ICML 2026 Workshop on Multi-modal Foundation Models and LLMs for Life Sciences", year: 2026, type: "conference", themes: ["ai"] },

{ title: "Tabular LLMs for interpretable few-shot Alzheimer's disease prediction with multimodal biomedical data",
  authors: "S. Kearney, S. Yang, Z. Wen, W. Lyu, B. Hou, D. Duong-Tran, T. Chen, J.H. Moore, M.D. Ritchie, C. Chen, \u2026 L. Shen",
  venue: "arXiv", year: 2026, type: "preprint", themes: ["ai"] },

{ title: "Gene-modulated network diffusion for improved modeling of amyloid-\u03B2 spread in Alzheimer's disease",
  authors: "F.H. Xu, D. Duong-Tran, H. Huang, A.J. Saykin, P.M. Thompson, C. Davatzikos, Y. Zhao, L. Shen",
  venue: "bioRxiv", year: 2026, type: "preprint", themes: ["neuro"] },

{ title: "Geometric brain signatures of Alzheimer's disease progression and subtypes",
  authors: "B. Tong, T. Cao, D. Duong-Tran, C. Davatzikos, P. Thompson, A. Saykin, A. Fornito, L. Shen",
  venue: "medRxiv", year: 2026, type: "preprint", themes: ["neuro"] },

{ title: "Laminar segregation of slow hemodynamic oscillations in human V1 via geometric and dynamic analysis",
  authors: "N. Nguyen, D. Haenelt, D. Duong-Tran, T. Cao, R. Trampel, N. Weiskopf",
  venue: "Organization for Human Brain Mapping (OHBM) 2026", year: 2026, type: "abstract", themes: ["neuro"] },

/* ---------- 2025 ---------- */
{ title: "Automated cytometric gating with human-level performance using bivariate segmentation",
  authors: "J. Chen, M. Ionita, Y. Feng, Y. Lu, P. Orzechowski, S. Garai, K. Hassinger, J. Bao, J. Wen, D. Duong-Tran, \u2026 L. Shen",
  venue: "Nature Communications", detail: "16:1576", year: 2025, type: "journal", themes: ["ai"], featured: true,
  award: "Editors\u2019 Choice, Nature Communications",
  links: { "Paper": "https://www.nature.com/articles/s41467-025-56622-2" } },

{ title: "A genetically informed brain atlas for enhancing brain imaging genomics",
  authors: "J. Bao, J. Wen, C. Chang, S. Mu, J. Chen, M. Shivakumar, Y. Cui, G. Erus, Z. Yang, S. Yang, \u2026 D. Duong-Tran, \u2026 L. Shen",
  venue: "Nature Communications", detail: "16:3524", year: 2025, type: "journal", themes: ["ai"], featured: true },

{ title: "Knowledge-driven feature selection and engineering for genotype data with large language models",
  authors: "J. Lee, S. Yang, J.Y. Baik, X. Liu, Z. Tan, D. Li, Z. Wen, B. Hou, D. Duong-Tran, T. Chen, L. Shen",
  venue: "AMIA Informatics Summit 2025", year: 2025, type: "conference", themes: ["ai"], featured: true,
  award: "Marco Ramoni Distinguished Paper Award",
  links: { "arXiv": "https://arxiv.org/abs/2410.01795", "PMC": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12150712/" } },

{ title: "Enabling few-shot Alzheimer's disease diagnosis on biomarker data with tabular LLMs",
  authors: "S. Kearney, S. Yang, Z. Wen, B. Hou, D. Duong-Tran, T. Chen, J. Moore, M. Ritchie, L. Shen",
  venue: "ACM Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM-BCB)", year: 2025, type: "conference", themes: ["ai"], featured: true,
  award: "SIGBio Best Paper Award" },

{ title: "Evaluating topological fitness of human brain-inspired sub-circuits in Echo State Networks",
  authors: "B. Nguyen, T. Chen, S. Yang, B. Hou, L. Shen, D. Duong-Tran",
  venue: "AAAI Bridge Program on AI for Medicine and Healthcare, PMLR 281", detail: "pp. 79\u201389", year: 2025, type: "conference", themes: ["neuro", "ai"], featured: true,
  award: "Best Paper Runner-up",
  links: { "arXiv": "https://arxiv.org/abs/2412.14999", "PMLR": "https://proceedings.mlr.press/v281/nguyen25a.html" } },

{ title: "Fair CCA for fair representation learning: An ADNI study",
  authors: "B. Hou, Z. Wang, Z. Zhou, B. Tong, Z. Wang, J. Bao, D. Duong-Tran, Q. Long, L. Shen",
  venue: "ACM-BCB", year: 2025, type: "conference", themes: ["ai"] },

{ title: "Characterizing amyloid pathogenic spread in Alzheimer's disease through a network diffusion model",
  authors: "F.H. Xu, D. Duong-Tran, H. Huang, A. Saykin, P. Thompson, C. Davatzikos, Y. Zhao, L. Shen",
  venue: "ACM-BCB", year: 2025, type: "conference", themes: ["neuro"] },

{ title: "Adapting vision\u2013language models for 3D CT/MRI understanding on PMBB via slice selection and explanation analysis",
  authors: "H. Chen, R. Shukla, R. Wu, S. Yang, D. Duong-Tran, D.M.H. Nguyen, M. Niepert, C. Beeche, J. Gee, J. Duda, \u2026",
  venue: "IEEE/CVF International Conference on Computer Vision Workshops (ICCVW)", detail: "pp. 2294\u20132303", year: 2025, type: "conference", themes: ["ai"] },

{ title: "From fragments to geometry: A unified graph transformer for molecular representation from conformer ensembles",
  authors: "D.M.H. Nguyen, T.Q. Nguyen, H.T.H. Le, M.T.N. Truong, T. Nguyen, N. Ho, K.D. Doan, D. Duong-Tran, L. Shen, D. Sonntag, \u2026",
  venue: "ICML 2025 Generative AI and Biology (GenBio) Workshop", year: 2025, type: "conference", themes: ["ai"] },

{ title: "Integrating slow neural oscillations and physiological burden for trait anxiety prediction",
  authors: "J.J. Min, J. Chen, J. Bao, S. Yang, Y. Zhao, L. Shen, D. Duong-Tran",
  venue: "NeurIPS 2025 Workshop on Learning from Time Series for Health", year: 2025, type: "conference", themes: ["neuro", "ai"] },

{ title: "H-VIP: Quantifying regional topological contributions from the brain network towards cognition",
  authors: "S. Garai, S. Vo, L. Blank, F. Xu, J. Chen, D. Duong-Tran, Y. Zhao, B.C. Brown, L. Shen",
  venue: "Frontiers in Radiology", detail: "5:1686780", year: 2025, type: "journal", themes: ["neuro"] },

{ title: "Reconstructing brain causal dynamics for subject and task fingerprints using fMRI time-series data",
  authors: "D. Song, L. Shen, D. Duong-Tran, X. Wang",
  venue: "Health Information Science and Systems", detail: "13(1):70", year: 2025, type: "journal", themes: ["neuro"] },

{ title: "A novel computational analysis integrating social determinants information from EHR and literature with Alzheimer's disease biological knowledge through large language models and knowledge graphs",
  authors: "T. Shang, S. Yang, T. Zhai, W. He, E. Mamourian, J. Zhang, B. Hou, J. Lee, D. Duong-Tran, J.H. Moore, \u2026 L. Shen",
  venue: "Innovation in Aging", detail: "9(Suppl 1):S2\u2013S13", year: 2025, type: "journal", themes: ["ai"] },

{ title: "Advances in RNA secondary structure prediction and RNA modifications: Methods, data, and applications",
  authors: "S. Yang, N.T. Pham, Z. Li, J.Y. Baik, J. Lee, T. Zhai, W. Yu, B. Hou, T. Shang, W. He, \u2026 D. Duong-Tran, M. Naik, L. Shen",
  venue: "arXiv:2501.04056", year: 2025, type: "preprint", themes: ["ai"],
  links: { "arXiv": "https://arxiv.org/abs/2501.04056" } },

{ title: "Data-driven stabilization of unknown linear-threshold network dynamics",
  authors: "X. Wang, D. Duong-Tran, J. Cort\u00E9s",
  venue: "arXiv:2504.19950", year: 2025, type: "preprint", themes: ["neuro"],
  links: { "arXiv": "https://arxiv.org/abs/2504.19950" } },

{ title: "Brain-body signatures of trait anxiety uniquely characterized by functional dynamics, allostatic load and gene expression",
  authors: "J.J. Min, J. Bao, J.Y. Baik, J. Wen, Y. Zhao, P.M. Thompson, L. Shen, D. Duong-Tran",
  venue: "medRxiv", year: 2025, type: "preprint", themes: ["neuro"] },

{ title: "Graph-attention-based integration of brain structure and function for trait anxiety prediction: Preliminary results",
  authors: "J.J. Min, J. Chen, J. Bao, S. Yang, Y. Zhao, L. Shen, D. Duong-Tran",
  venue: "Conference on Cognitive Computational Neuroscience (CCN) 2025", year: 2025, type: "abstract", themes: ["neuro", "ai"] },

{ title: "Mode-based decomposition of multimodality reveals relationships across spatial scales in Alzheimer's disease",
  authors: "B. Tong, T. Cao, D. Duong-Tran, A. Saykin, A. Fornito, L. Shen",
  venue: "Organization for Human Brain Mapping (OHBM) 2025", year: 2025, type: "abstract", themes: ["neuro"] },

{ title: "Mapping fMRI-BOLD nonlinear dynamics to transcriptional gradients via Koopman-operator similarity analysis",
  authors: "N. Nguyen, J. Bao, J. Chen, T. Cao, B. Hou, S. Yang, T. Chen, Y. Zhao, C. Davatzikos, L. Shen, D. Duong-Tran",
  venue: "Organization for Human Brain Mapping (OHBM) 2025", year: 2025, type: "abstract", themes: ["neuro"] },

/* ---------- 2024 ---------- */
{ title: "Homological landscape of human brain functional sub-circuits",
  authors: "D. Duong-Tran, R. Kaufmann, J. Chen, X. Wang, S. Garai, F.H. Xu, J. Bao, E. Amico, A.D. Kaplan, G. Petri, \u2026 J. Go\u00F1i, Y. Zhao, L. Shen",
  venue: "Mathematics", detail: "12(3):455", year: 2024, type: "journal", themes: ["neuro"], featured: true },

{ title: "A principled framework to assess the information-theoretic fitness of brain functional sub-circuits",
  authors: "D. Duong-Tran*, N. Nguyen*, S. Mu, J. Chen, J. Bao, F.H. Xu, S. Garai, J. Cadena-Pico, A.D. Kaplan, T. Chen, Y. Zhao, L. Shen, J. Go\u00F1i  (*co-first)",
  venue: "Mathematics", detail: "12(19):2967", year: 2024, type: "journal", themes: ["neuro"] },

{ title: "DALK: Dynamic co-augmentation of LLMs and KG to answer Alzheimer's disease questions with scientific literature",
  authors: "D. Li, S. Yang, Z. Tan, J.Y. Baik, S. Yun, J. Lee, A. Chacko, B. Hou, D. Duong-Tran, Y. Ding, H. Liu, L. Shen, T. Chen",
  venue: "Findings of the Association for Computational Linguistics: EMNLP 2024", detail: "pp. 2187\u20132205", year: 2024, type: "conference", themes: ["ai"], featured: true },

{ title: "Volume-optimal persistence homological scaffolds of hemodynamic networks covary with MEG theta-alpha aperiodic dynamics",
  authors: "N. Nguyen, T. Hou, E. Amico, J. Zheng, H. Huang, A.D. Kaplan, G. Petri, J. Go\u00F1i, R. Kaufmann, Y. Zhao, L. Shen, D. Duong-Tran",
  venue: "Medical Image Computing and Computer-Assisted Intervention (MICCAI)", detail: "pp. 519\u2013529", year: 2024, type: "conference", themes: ["neuro"], featured: true,
  award: "Top 11% of 2,869 submissions" },

{ title: "Causality-based subject and task fingerprints using fMRI time-series data",
  authors: "D. Song, L. Shen, D. Duong-Tran, X. Wang",
  venue: "ACM-BCB", year: 2024, type: "conference", themes: ["neuro"],
  award: "Top 30 of 201 submissions, oral presentation" },

{ title: "DuDe: Dual distribution-aware context prompt learning for large vision-language model",
  authors: "D.M.H. Nguyen, A.T. Le, T.Q. Nguyen, N.T. Diep, T. Nguyen, D. Duong-Tran, J. Peters, L. Shen, M. Niepert, D. Sonntag",
  venue: "Asian Conference on Machine Learning (ACML)", year: 2024, type: "conference", themes: ["ai"] },

{ title: "Preserving human large-scale brain connectivity fingerprint identifiability with random projections",
  authors: "D. Duong-Tran, M. Magsino, J. Go\u00F1i, L. Shen",
  venue: "IEEE International Symposium on Biomedical Imaging (ISBI)", year: 2024, type: "conference", themes: ["neuro"] },

{ title: "Theorizing neuro-induced relationships between cognitive diversity, motivation, grit and academic performance in multidisciplinary engineering education context",
  authors: "D. Duong-Tran, S. Wei, L. Shen",
  venue: "American Society for Engineering Education (ASEE) Annual Conference", year: 2024, type: "conference", themes: ["edu"],
  links: { "Paper": "https://peer.asee.org/48152" } },

{ title: "Topology-based clustering of functional brain networks in an Alzheimer's disease cohort",
  authors: "F.H. Xu, M. Gao, J. Chen, S. Garai, D. Duong-Tran, Y. Zhao, L. Shen",
  venue: "AMIA Informatics Summit", detail: "p. 449", year: 2024, type: "conference", themes: ["neuro"] },

{ title: "Caudal and thalamic segregation in white matter brain network communities in Alzheimer's disease population",
  authors: "F. Xu, D. Duong-Tran, Y. Zhao, L. Shen",
  venue: "IEEE-EMBS International Conference on Biomedical and Health Informatics (BHI)", year: 2024, type: "conference", themes: ["neuro"] },

{ title: "On enhancing connectomics-based neuromorphic computing performance: Exploring functional-connectomics-inspired Echo State Networks",
  authors: "B. Nguyen, T. Chen, B. Hou, S. Yang, L. Shen, D. Duong-Tran",
  venue: "Machine Learning Summer School, Okinawa 2024", year: 2024, type: "abstract", themes: ["neuro", "ai"],
  links: { "OpenReview": "https://openreview.net/forum?id=SkZuIIJBYT" } },

{ title: "Theta-alpha aperiodic dynamics covary with persistence homological scaffolds of hemodynamic networks",
  authors: "N. Nguyen, T. Hou, L. Shen, D. Duong-Tran",
  venue: "Organization for Human Brain Mapping (OHBM) 2024", year: 2024, type: "abstract", themes: ["neuro"] },

{ title: "Effect of brain network scale on persistence cycles: An ADNI comparative study",
  authors: "S. Garai, M. Liu, F. Xu, J. Go\u00F1i, D. Duong-Tran, Y. Zhao, L. Shen",
  venue: "Alzheimer's Association International Conference (AAIC) 2024", year: 2024, type: "abstract", themes: ["neuro"] },

/* ---------- 2023 ---------- */
{ title: "Tangent functional connectomes uncover more unique phenotypic traits",
  authors: "K. Abbas, M. Liu, M. Wang, D. Duong-Tran, U. Tipnis, E. Amico, A.D. Kaplan, M. Dzemidzic, D. Kareken, B.M. Ances, \u2026 J. Harezlak, J. Go\u00F1i",
  venue: "iScience", detail: "26(9):107624", year: 2023, type: "journal", themes: ["neuro"] },

{ title: "Mining correlation between fluid intelligence and whole-brain large scale structural connectivity",
  authors: "S. Garai, F. Xu, D. Duong-Tran, Y. Zhao, L. Shen",
  venue: "AMIA Informatics Summit", detail: "p. 225", year: 2023, type: "conference", themes: ["neuro"] },

{ title: "On topological landscape of human brain functional networks",
  authors: "D. Duong-Tran, R. Kaufmann, X. Wang, E. Amico, A. Kaplan, G. Petri, Y. Zhao, J. Go\u00F1i, M. Chung, L. Shen",
  venue: "Organization for Human Brain Mapping (OHBM) 2023", year: 2023, type: "abstract", themes: ["neuro"] },

{ title: "Vertex importance for forming co-cycles and its correlation with cognitive performance",
  authors: "S. Garai, D. Duong-Tran, F. Xu, Y. Zhao, L. Shen",
  venue: "Organization for Human Brain Mapping (OHBM) 2023", year: 2023, type: "abstract", themes: ["neuro"] },

{ title: "Subject and task fingerprint using dynamics reconstruction from fMRI time-series data",
  authors: "M. Umair, L. Shen, D. Duong-Tran, X. Wang",
  venue: "Organization for Human Brain Mapping (OHBM) 2023", year: 2023, type: "abstract", themes: ["neuro"] },

{ title: "Thalamo-cortical mass model unveils aging-like slow wave-spindle dynamics during NREM sleep",
  authors: "N. Nguyen, L. Shen, D. Duong-Tran",
  venue: "Organization for Human Brain Mapping (OHBM) 2023", year: 2023, type: "abstract", themes: ["neuro"] },

/* ---------- 2022 ---------- */
{ title: "Improving functional connectome fingerprinting with degree-normalization",
  authors: "B. Chi\u00EAm, K. Abbas, E. Amico, D. Duong-Tran, F. Crevecoeur, J.-C. Delvenne, J. Go\u00F1i",
  venue: "Brain Connectivity", detail: "12(2):180\u2013192", year: 2022, type: "journal", themes: ["neuro"] },

{ title: "Revisiting the one-sided EWMA control chart",
  authors: "D. Duong-Tran, R. Dastoorian, L. Wells",
  venue: "Journal of Applied Research on Industrial Engineering", detail: "9(2):151\u2013164", year: 2022, type: "journal", themes: ["stats"] },

{ title: "Consistency of graph theoretical measurements of Alzheimer's disease fiber density connectomes across multiple parcellation scales",
  authors: "F. Xu, S. Garai, D. Duong-Tran, A.J. Saykin, Y. Zhao, L. Shen",
  venue: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM)", detail: "pp. 1323\u20131328", year: 2022, type: "conference", themes: ["neuro"] },

{ title: "On geometric and algebraic properties of human brain functional networks",
  authors: "D. Duong-Tran",
  venue: "Ph.D. dissertation, Purdue University", year: 2022, type: "thesis", themes: ["neuro"] },

/* ---------- 2021 and earlier ---------- */
{ title: "Toward an information theoretical description of communication in brain networks",
  authors: "E. Amico, K. Abbas, D. Duong-Tran, U. Tipnis, M. Rajapandian, E. Chumin, M. Ventresca, J. Harezlak, J. Go\u00F1i",
  venue: "Network Neuroscience", detail: "5(3):646\u2013665", year: 2021, type: "journal", themes: ["neuro"] },

{ title: "A morphospace of functional configuration to assess configural breadth based on brain functional networks",
  authors: "D. Duong-Tran, K. Abbas, E. Amico, B. Corominas-Murtra, M. Dzemidzic, D. Kareken, M. Ventresca, J. Go\u00F1i",
  venue: "Network Neuroscience", detail: "5(3):666\u2013688", year: 2021, type: "journal", themes: ["neuro"], featured: true },

{ title: "Tangent space projections of optimally regularized functional connectomes improve their phenotypic reliability as measured by their fingerprint",
  authors: "K. Abbas, M. Wang, D. Duong-Tran, M. Liu, U. Tipnis, L. Shen, A. Kaplan, J. Harezlak, J. Go\u00F1i",
  venue: "Journal of Computational Neuroscience (CNS 2021 abstract)", detail: "49(Suppl 1):S76\u2013S77", year: 2021, type: "abstract", themes: ["neuro"] },

{ title: "GEFF: Graph embedding for functional fingerprinting",
  authors: "K. Abbas, E. Amico, D.O. Svaldi, U. Tipnis, D. Duong-Tran, M. Liu, M. Rajapandian, J. Harezlak, B.M. Ances, J. Go\u00F1i",
  venue: "NeuroImage", detail: "221:117181", year: 2020, type: "journal", themes: ["neuro"] }

];
