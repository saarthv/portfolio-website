export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  featured: boolean;
  tone: "technical" | "product";
  heroImage: string;
  supportingImages?: string[];
  links?: ProjectLink[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "bedrock-agent",
    title: "Agentic Procurement System",
    subtitle: "Automating end-to-end procurement workflows using agentic AI and tool execution",
    summary:
      "Designed and shipped an agentic workflow that translates procurement intent into audited purchase order execution.",
    tags: ["AI Systems", "Agentic AI", "AWS", "Product"],
    featured: true,
    tone: "technical",
    heroImage: "/images/projects/bedrock-agent/hero-procurement-ui.png",
    supportingImages: [
      "/images/projects/bedrock-agent/architecture-diagram.png",
      "/images/projects/bedrock-agent/workflow-execution.png",
      "/images/projects/bedrock-agent/executive-summary.png",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/saarthv/procurement-agent-bedrock?tab=readme-ov-file",
      },
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Retail procurement workflows are manual, fragmented, and slow, leading to delays, errors, and inconsistent supplier handling.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Designed an agentic system that converts simple inputs like SKU and quantity into fully executed purchase orders using structured planning, tool execution, and summarization.",
        ],
      },
      {
        title: "System / Architecture",
        paragraphs: ["The system follows a Plan -> Act -> Audit -> Summarize pipeline:"],
        bullets: [
          "Bedrock (Claude Sonnet) generates structured workflows",
          "Python tools execute supplier logic and state updates",
          "Audit logs track every action",
          "Outputs are summarized into human-readable decisions",
        ],
      },
      {
        title: "Results / Outputs",
        paragraphs: [
          "Delivered end-to-end PO automation with structured confirmations, delivery details, and real-time monitoring of the execution pipeline.",
        ],
      },
      {
        title: "Insights",
        bullets: [
          "Agentic decomposition improves reliability versus single-pass generation",
          "Explicit tool layers reduce hallucination risk",
          "Auditability is critical for real-world deployment",
        ],
        paragraphs: [],
      },
      {
        title: "Impact / Takeaways",
        bullets: [
          "Reduces procurement processing cost and time",
          "Demonstrates practical application of agentic AI in operations",
        ],
        paragraphs: [],
      },
    ],
  },
  {
    slug: "early-warning",
    title: "Early Warning Risk System",
    subtitle: "Detecting systemic financial stress using macroeconomic and market indicators",
    summary:
      "Built a Systemic Vulnerability Index to detect stress build-up earlier and more consistently than baseline signals.",
    tags: ["ML", "Risk Modeling", "Time Series", "Finance"],
    featured: true,
    tone: "technical",
    heroImage: "/images/projects/early-warning/hero-svi-decomposition.png",
    supportingImages: [
      "/images/projects/early-warning/svi-timeseries.png",
      "/images/projects/early-warning/early-warning-signals.png",
    ],
    links: [{ label: "Paper", href: "/documents/early-warning-paper.pdf" }],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Financial crises emerge gradually, but traditional systems often fail to detect early warning signals in time.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Constructed a Systemic Vulnerability Index (SVI) combining macroeconomic, housing, banking, and market stress indicators.",
        ],
      },
      {
        title: "System / Architecture",
        bullets: [
          "Multi-factor signal aggregation",
          "Normalization and weighting across heterogeneous indicators",
          "Time-series monitoring for vulnerability build-up",
        ],
        paragraphs: [],
      },
      {
        title: "Results / Outputs",
        bullets: [
          "Improved early detection relative to baseline signals",
          "Reduced false positives through threshold calibration",
        ],
        paragraphs: [],
      },
      {
        title: "Insights",
        bullets: [
          "Combining heterogeneous signals improves robustness",
          "Temporal alignment of indicators is critical",
          "Threshold tuning significantly impacts signal reliability",
        ],
        paragraphs: [],
      },
      {
        title: "Impact / Takeaways",
        bullets: [
          "Framework for proactive risk monitoring",
          "Potential application in policy and financial institutions",
        ],
        paragraphs: [],
      },
    ],
  },
  {
    slug: "streamlit-geo",
    title: "Geospatial Intelligence Platform",
    subtitle: "Interactive geospatial system for exploring conflict patterns and impact",
    summary:
      "Shipped a product-style geospatial dashboard that makes complex conflict data explorable and decision-ready.",
    tags: ["Product", "Visualization", "Geospatial", "Streamlit"],
    featured: true,
    tone: "product",
    heroImage: "/images/projects/streamlit-geo/hero-app-overview.png",
    supportingImages: [
      "/images/projects/streamlit-geo/map-clusters-view.png",
      "/images/projects/streamlit-geo/analytics-breakdown.png",
      "/images/projects/streamlit-geo/temporal-trends.png",
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Geospatial conflict data is complex and difficult to explore without interactive tools.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Built a multi-layered dashboard enabling filtering, clustering, and temporal analysis.",
        ],
      },
      {
        title: "System / Features",
        bullets: [
          "Spatial clustering and hotspot detection",
          "Entity and weapon analysis",
          "Temporal trend tracking",
        ],
        paragraphs: [],
      },
      {
        title: "Results / Outputs",
        paragraphs: [
          "Delivered an interactive analysis environment that supports both exploratory workflows and decision-oriented questions.",
        ],
      },
      {
        title: "Insights",
        bullets: [
          "Clustering reveals localized conflict concentration",
          "Entity attribution provides deeper context",
          "Combining spatial and temporal analysis improves interpretability",
        ],
        paragraphs: [],
      },
      {
        title: "Impact / Takeaways",
        bullets: [
          "Improves accessibility of complex geospatial data",
          "Supports exploratory and decision-driven analysis",
        ],
        paragraphs: [],
      },
    ],
  },
  {
    slug: "etf-dashboard",
    title: "ETF Portfolio Dashboard",
    subtitle: "Analyzing sector performance, risk, and return dynamics across market cycles",
    summary:
      "Built a decision-focused analytics dashboard that clarifies sector-level trade-offs through clean multi-metric views.",
    tags: ["Analytics", "Finance", "Dashboard", "Tableau"],
    featured: true,
    tone: "product",
    heroImage: "/images/projects/etf-dashboard/hero-sector-performance.png",
    supportingImages: [
      "/images/projects/etf-dashboard/risk-return-scatter.png",
      "/images/projects/etf-dashboard/dashboard-full.png",
    ],
    links: [
      {
        label: "Tableau",
        href: "https://public.tableau.com/views/etf_project_17746572150770/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Understanding sector-level performance requires combining returns, volatility, and long-term trends.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Built a dashboard comparing sector ETFs across multiple performance metrics.",
        ],
      },
      {
        title: "System / Features",
        paragraphs: [
          "A product-oriented interface centered on skimmable trend views, comparative scatter analysis, and portfolio-oriented interpretation.",
        ],
      },
      {
        title: "Results / Outputs",
        bullets: [
          "Clear differentiation across sectors",
          "Risk-return tradeoffs visualized",
          "Long-term performance trends identified",
        ],
        paragraphs: [],
      },
      {
        title: "Insights",
        bullets: [
          "Technology consistently outperformed across cycles",
          "Volatility does not guarantee higher returns",
          "Sector selection significantly impacts outcomes",
        ],
        paragraphs: [],
      },
      {
        title: "Impact / Takeaways",
        bullets: [
          "Supports portfolio allocation decisions",
          "Simplifies multi-metric financial analysis",
        ],
        paragraphs: [],
      },
    ],
  },
  {
    slug: "fx-cross",
    title: "FX Trading Strategy",
    subtitle: "Designing a trend-following FX strategy using exponential smoothing crossovers",
    summary:
      "Designed and evaluated a rule-based FX strategy with parameter optimization and risk-adjusted diagnostics.",
    tags: ["Quant", "Time Series", "Optimization", "Trading"],
    featured: false,
    tone: "technical",
    heroImage: "/images/projects/fx-cross/hero-strategy-heatmaps.png",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Identifying stable and robust trading strategies in FX markets is challenging due to noise and volatility.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Implemented an ES(alpha) versus ES(beta) crossover strategy and performed grid-based parameter optimization.",
        ],
      },
      {
        title: "System / Architecture",
        paragraphs: [
          "Systematic signal generation, backtesting, and optimization loop with parameter sweeps and risk diagnostics.",
        ],
      },
      {
        title: "Results / Outputs",
        bullets: [
          "Optimal region: low alpha (0.01-0.02), beta (0.03-0.10)",
          "Sharpe ratio: 0.78",
          "Total return: +18%",
          "Max drawdown: -7.5%",
        ],
        paragraphs: [],
      },
      {
        title: "Insights",
        bullets: [
          "Slow-moving signals reduce noise and improve stability",
          "Performance is sensitive to parameter selection",
          "Long and short dynamics differ significantly",
        ],
        paragraphs: [],
      },
      {
        title: "Impact / Takeaways",
        bullets: [
          "Demonstrates systematic strategy design",
          "Highlights importance of risk-adjusted optimization",
        ],
        paragraphs: [],
      },
    ],
  },
  {
    slug: "source-separation",
    title: "Music Source Separation",
    subtitle: "Improving source separation using ensemble learning and metric-based selection",
    summary:
      "Developed an ensemble-based source separation framework that improves reliability across audio stems and settings.",
    tags: ["ML", "Signal Processing", "Deep Learning", "Audio"],
    featured: false,
    tone: "technical",
    heroImage: "/images/projects/source-separation/hero-ensemble-architecture.png",
    supportingImages: ["/images/projects/source-separation/model-performance-metrics.png"],
    links: [
      { label: "Paper", href: "/documents/source-sep-paper.pdf" },
      { label: "arXiv", href: "https://arxiv.org/pdf/2410.20773" },
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Single-model source separation struggles across diverse audio conditions and datasets.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Built an ensemble framework combining multiple models and selecting outputs using SNR/SDR metrics.",
        ],
      },
      {
        title: "System / Architecture",
        bullets: [
          "Multiple model outputs evaluated",
          "Harmonic mean used for selection",
          "Hierarchical refinement for vocals and drums",
        ],
        paragraphs: [],
      },
      {
        title: "Results / Outputs",
        bullets: ["Improved SNR/SDR across stems", "Consistent performance across models"],
        paragraphs: [],
      },
      {
        title: "Insights",
        bullets: [
          "Ensemble methods outperform individual models",
          "Metric-based selection improves robustness",
          "Different models excel on different components",
        ],
        paragraphs: [],
      },
      {
        title: "Impact / Takeaways",
        bullets: [
          "Improves reliability of audio separation systems",
          "Demonstrates practical ensemble design in ML",
        ],
        paragraphs: [],
      },
    ],
  },
];
