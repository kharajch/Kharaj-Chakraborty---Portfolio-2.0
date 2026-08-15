export const blogData = [
  {
    id: "blog-1",
    title: "The Rise of Agentic AI in Modern Intelligent Systems",
    date: "June 15, 2026",
    category: "AI & Systems",
    readTime: "5 min read",
    img: "/images/blog/agentic_ai.jpg",
    summary: "Explore how autonomous AI agents are transitioning from simple code helpers to full partners in software orchestration and architecture planning.",
    content: [
      "In the past few years, the role of Artificial Intelligence in software development has shifted dramatically. What started as simple tab-completion tools has evolved into sophisticated agentic architectures capable of designing, writing, testing, and reviewing full codebases. Rather than acting as static text completion models, today's AI agents cooperate in multi-agent workflows to solve abstract development tasks.",
      "At the core of this transition is the concept of 'Agentic Workflows'. By utilizing frameworks like LangGraph and LangChain, developers can configure multiple specialized agents—such as a Codebase Researcher, a Database Architect, and a Lint Reviewer—to collaborate. Each agent has specific tools, goals, and system instructions, communicating with peers asynchronously and requesting human-in-the-loop validation only when critical choices occur.",
      "For frontend engineers, this means a shift in day-to-day responsibilities. Instead of focusing solely on writing repetitive boilerplate code, developers will increasingly act as product directors and system orchestrators. They will design the system boundaries, validate agentic outputs, and refine design frameworks, while autonomous tools handle structural codebases, E2E tests, and static lint corrections.",
      "As tools like Antigravity CLI and Claude Code continue to mature, the barrier to building high-performance, responsive software will continue to drop. Emphasizing clean software architectures, solid separation of concerns, and robust automated test suites will become more vital than ever, as these provide the safety rails that allow AI agents to operate safely and effectively."
    ]
  },
  {
    id: "blog-2",
    title: "Building Offline-First React Apps with RxDB",
    date: "June 08, 2026",
    category: "Web Dev",
    readTime: "6 min read",
    img: "/images/blog/offline_first.jpg",
    summary: "Learn how RxDB (Reactive Database) provides offline persistence and real-time syncing to deliver resilient user experiences on modern React apps.",
    content: [
      "Modern users expect applications to work seamlessly, regardless of network connectivity. Whether they are on a train with patchy coverage or experiencing complete network failure, apps should remain fully interactive. This is where the 'Offline-First' architecture becomes essential, and RxDB (Reactive Database) is one of the premier tools to achieve it.",
      "RxDB is a local-first, reactive database for JavaScript applications. It stores data locally in the client browser (using IndexedDB, OPFS, or memory) and syncs asynchronously with a centralized server database (like MongoDB or CouchDB) once a connection is re-established. Because reads and writes happen directly against local storage, UI queries are instant—providing zero latency and a premium, responsive feel.",
      "Integrating RxDB in a React 19 project is highly intuitive. By using React's state hooks or custom context providers, we can subscribe to query streams. When data changes locally or is synced from the server, the UI reacts and updates instantly without manual fetch triggers. This pattern is particularly useful for clinical dashboards, task managers, and collaboration workspaces.",
      "However, local sync introduces sync conflicts (e.g. when the same record is edited on two devices offline). RxDB addresses this with custom conflict resolution strategies that can run either on the client or server. By planning your data schemas carefully and defining clear conflict rules, you can build extremely resilient systems that sync data safely across devices."
    ]
  },
  {
    id: "blog-3",
    title: "Mastering Scroll-Linked Animations with GSAP",
    date: "June 01, 2026",
    category: "Frontend Design",
    readTime: "4 min read",
    img: "/images/blog/gsap_scroll.jpg",
    summary: "Discover best practices for using GSAP ScrollTrigger to build immersive, high-performance scroll-driven animations without dropping frames.",
    content: [
      "Immersive scroll animations can make a portfolio website stand out, giving the interface a premium and alive feel. However, poorly implemented scroll effects can lead to high CPU/GPU load, layout shifting, and frame drops—damaging the user experience. The GreenSock Animation Platform (GSAP) and its ScrollTrigger plugin offer the most robust solution for creating scroll-driven animations at 60 FPS.",
      "To build smooth scroll-driven effects, you must understand the rendering pipeline. Avoid animating CSS properties that trigger layout recalculation (like width, height, margin, or top/left positions). Instead, restrict scroll animations to hardware-accelerated transforms (like scale, translate3d, and rotation) and opacity. This allows the browser to compose elements directly on the GPU, avoiding jank.",
      "Another key tip is to manage ScrollTrigger instances carefully. In React, always instantiate ScrollTriggers inside a useEffect hook and ensure you call `.kill()` on all triggers during component unmount. Neglecting this will cause memory leaks and ghost triggers when users navigate between pages or update states, leading to severe slowdowns.",
      "By combining GSAP ScrollTrigger with lightweight particle canvases (Three.js) and scroll locks, you can create immersive visual storytelling. The key is moderation—micro-interactions and subtle parallaxes are often more effective at delighting users than overwhelming, complex screen-wide animations."
    ]
  }
];
