export interface POVPost {
  slug: string;
  title: string;
  tag: string;
  readTime: string;
  date: string;
  intro: string;
  sections: Array<{ heading?: string; body: string[] }>;
  pullQuote?: string;
  image?: string;
  accentColor: string;
  process?: Array<{ step: string; detail: string }>;
}

export const povPosts: POVPost[] = [
  {
    slug: "ai-and-designers",
    title: "Design in the Age of AI",
    tag: "AI & Design",
    readTime: "4 min read",
    date: "April 2024",
    intro:
      "Even before AI, design in tech was losing clarity. Design is about solving human problems but over time, it became too focused on process. Frameworks turned into checklists, and workshops replaced real problem-solving. Tools like Figma improved speed and consistency, but also pushed designers toward execution. Meanwhile, product teams became more strategic, and design became more tactical.",
    sections: [
      {
        heading: "Where Design Lost Its Way",
        body: [
          "The discipline drifted. What started as **problem-solving** became deliverable-producing. Designers optimised for **outputs** screens, flows, components instead of outcomes. Process became the product.",
          "This wasn't caused by AI. **It was already happening.**",
        ],
      },
      {
        heading: "The Shift AI Is Forcing",
        body: [
          "**AI is not the disruption it's the exposure.**",
          "It's showing what parts of design were always replaceable. Repetitive work like flows, screens, and systems will soon be handled by AI.",
          "This isn't a threat. **It's a reset.**",
        ],
      },
      {
        heading: "What AI Won't Replace",
        body: [
          "AI can generate outputs, but it **can't replace judgment**.",
          "It won't replace understanding real human problems, deciding what should be built, finding product–market fit, or creating **meaningful, delightful experiences**.",
          "**Design's real value isn't in screens it's in decisions.**",
        ],
      },
      {
        heading: "The New Role of the Designer",
        body: [
          "The role is shifting: **Maker → Thinker → Shaper.**",
          "Designers focused only on execution will struggle. Designers who focus on **problems and impact** will thrive.",
          "Staying close to users and **connecting design to business outcomes** will make designers indispensable.",
        ],
      },
      {
        heading: "Where Designers Still Win",
        body: [
          "AI struggles where **complexity and human judgment** matter most: non-linear workflows, high-stakes decisions, and emotional or trust-based experiences.",
          "In these areas, users don't want full automation they want **control and understanding**.",
          "That's where **designers matter most**.",
        ],
      },
      {
        heading: "The Reset",
        body: [
          "AI is pushing design back to its core: **solving real human problems that create value**.",
          "This isn't the end of design. **It's the correction it needed.**",
        ],
      },
    ],
    pullQuote: "Design's real value isn't in screens it's in decisions.",
    process: [
      {
        step: "Start with the problem, not the tool",
        detail: "I define the problem and user need first. AI is in service of the problem not the starting point.",
      },
      {
        step: "Use AI for speed on repeatable work",
        detail: "Flows, wireframe exploration, copy iterations, icon variants I use AI to move faster on work that has clear parameters.",
      },
      {
        step: "Keep judgment in-house",
        detail: "AI generates options, I make decisions. What to build, what to cut, what actually serves the user that stays with me.",
      },
      {
        step: "Iterate in conversation",
        detail: "I use AI as a critique partner pressure-testing my own thinking and challenging assumptions before committing to a direction.",
      },
    ],
    image: "/images/Ai.webp",
    accentColor: "#111827",
  },
  {
    slug: "invisible-ux",
    title: "Invisible UX",
    tag: "UX & AI",
    readTime: "4 min read",
    date: "April 2026",
    intro:
      "For decades, UX design has been about guiding users through interfaces. Menus. Buttons. Cards. Flows. We designed how people interact with products. But AI is changing this. We're moving from **interaction → intent**.",
    sections: [
      {
        heading: "From Interfaces to Intent",
        body: [
          "What used to take multiple steps is now a single instruction.",
          "**Before:** Open → Browse → Filter → Select. **Now:** Just say what you want.",
          "No menus. No navigation. Just **intent → outcome**.",
        ],
      },
      {
        heading: "What's Changing",
        body: [
          "**Traditional UX** gives users options. **AI-native UX** gives users outcomes.",
          "The interface isn't disappearing **it's fading into the background**.",
        ],
      },
      {
        heading: "Why This Matters",
        body: [
          "This shift is about **reducing friction**: less navigation, fewer decisions, faster results.",
          "The best UX becomes almost invisible. **It works without demanding attention.**",
        ],
      },
      {
        heading: "The New Role of Designers",
        body: [
          "Designers are no longer just arranging screens. They're **designing systems that understand intent**.",
          "Understanding how people express goals. Shaping how AI responds. **Creating guardrails for trust and clarity.**",
          "You're not just designing interfaces anymore. **You're designing for understanding.**",
        ],
      },
      {
        heading: "The Future",
        body: [
          "The future of UX won't be seen. **It will be felt.**",
          "Welcome to invisible UX.",
        ],
      },
    ],
    pullQuote: "The future of UX won't be seen. It will be felt.",
    image: "/images/invisible-ux.png",
    accentColor: "#e8e8ed",
  },
  {
    slug: "sustainable-design",
    title: "Sustainable Design Strategies",
    tag: "Sustainability",
    readTime: "5 min read",
    date: "April 2026",
    intro:
      "Sustainability is no longer optional it's becoming a core part of how products are designed and built. It's not just about reducing impact at one stage, but across the entire product lifecycle.",
    sections: [
      {
        heading: "The Six Core Strategies",
        body: [
          "**Dematerialization** Do more with less. Reduce physical materials by using digital solutions while maintaining functionality.",
          "**Next-Best Material Selection** Choose better materials. Use recycled, biodegradable, or plant-based alternatives without compromising usability.",
          "**Green Supply Chain** Design beyond the product. Optimize sourcing, production, and logistics to reduce energy use and emissions.",
          "**Longevity & Effective Usage** Make products last longer. Design for repair, reuse, and adaptability.",
          "**Product Efficiency** Reduce impact during use. Design products that consume less energy while maintaining performance.",
          "**Circularity** Design for a second life. Enable recycling, reuse, and material recovery.",
        ],
      },
      {
        heading: "The Opportunity",
        body: [
          "Sustainability is no longer a constraint **it's a design advantage**.",
          "It drives better products, smarter systems, and more responsible innovation.",
        ],
      },
    ],
    pullQuote: "Sustainability is no longer a constraint it's a design advantage.",
    image: "/images/sustainable.png",
    accentColor: "#0d1f0d",
  },
];

export function getPOVBySlug(slug: string): POVPost | undefined {
  return povPosts.find((p) => p.slug === slug);
}
