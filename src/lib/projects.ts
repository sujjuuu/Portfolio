export interface ProjectMeta {
  when: string;
  company?: string;
  design: string;
  role: string[];
  platforms?: string[];
  podTeam: string[];
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  description: string[];
  caseStudyHref?: string;
  caseStudyDownload?: { href: string; filename: string };
  websiteHref?: string;
  appHref?: string;
  meta: ProjectMeta;
  challenge: string[];
  solutions: string[];
  results: string[];
  learnings: string[];
  shoutouts?: string[];
  images: string[];
  accentColor: string;
}

export const projects: Project[] = [
  {
    slug: "ask-diya",
    title: "Ask Diya",
    company: "Sujay Reddy",
    description: [
      "Ask Diya is an **AI-powered education decision platform** designed to help students make **high-stakes college choices** with clarity and confidence.",
      "I led **end-to-end product design** owning the experience from **zero to one**, defining the core product architecture, and building a **scalable design system** that unified the platform.",
    ],
    meta: {
      when: "Sep 2025 – Present",
      company: "Conglomerate IT",
      design: "Sujay Reddy",
      role: ["Product Design", "Design Systems", "Design Leadership"],
      platforms: ["Web & Mobile"],
      podTeam: ["1 Design Lead", "2 Product Designers", "1 Product Manager"],
    },
    challenge: [
      "Students were making **₹10–50L education decisions** using fragmented, unreliable, and non-personalized sources. There was no system that could answer critical questions around **fit, admission probability, ROI, and next steps** in a single experience.",
      "From a business perspective, the challenge was to quickly deliver value while building a scalable foundation for **data-driven decision-making** and **long-term user trust**.",
    ],
    solutions: [
      "Designed a **multi-dimensional fit scoring system** evaluating **500+ institutes** across **10 parameters**, delivering personalized and explainable recommendations.",
      "Built a **gamified student profiling experience**, increasing engagement while capturing high-quality input data.",
      "Established a **token-based design system**, enabling consistency and faster cross-team execution.",
      "Simplified complex datasets (**ROI, placements, admission chances**) into clear, actionable insights.",
    ],
    results: [
      "Reduced decision-making time by **40%** by consolidating fragmented research into a **single, guided flow**.",
      "Improved recommendation relevance, with **80%+ of users** rating suggestions highly for relevance and usefulness.",
      "Decreased UI development effort by **30%** through **design system standardization**.",
      "Increased user engagement, achieving **70%+ profile completion** and a **40% return rate**.",
    ],
    learnings: [
      "**Trust in decision-making products comes from transparency**, not just accuracy.",
      "**Structuring information is more impactful than adding features** in complex ecosystems.",
      "**Early investment in systems thinking** significantly improves speed, scale, and consistency.",
    ],
    shoutouts: [
      "A huge thank you to everyone involved in bringing this to life. From shaping the vision to executing across multiple touchpoints, this was a true team effort.",
      "Special thanks to **Akash Malla Reddy**, **Prajwal Yashasvi Maredukonda**, **Visist Tallam**, and fellow designers **Akhilesh** and **Laasya** for their collaboration, support, and contributions throughout the process.",
    ],
    images: [
      "/images/projects/ask-diya/a1.png",
      "/images/projects/ask-diya/a2.png",
      "/images/projects/ask-diya/a3.png",
      "/images/projects/ask-diya/a4.png",
      "/images/projects/ask-diya/a5.png",
      "/images/projects/ask-diya/a6.png",
      "/images/projects/ask-diya/a7.png",
      "/images/projects/ask-diya/a8.png",
      "/images/projects/ask-diya/a9.png",
      "/images/projects/ask-diya/a10.png",
      "/images/projects/ask-diya/a11.png",
    ],
    accentColor: "#1c2b3a",
  },
  {
    slug: "craftmyplate",
    title: "CraftMyPlate",
    company: "Craft My Plate",
    description: [
      "Craft My Plate is a **bulk food ordering platform** offering curated meal, snack, and delivery boxes for group orders.",
      "I redesigned the **end-to-end ordering experience** across both pre-order and post-order journeys to reduce friction, improve pricing clarity, and build trust through better visibility and control.",
      "Operating at a scale of **100K+ downloads**, the focus was on simplifying complex decision-making and enabling faster, more confident ordering for users.",
    ],
    meta: {
      when: "Apr 2025 – Sep 2025",
      company: "Craft My Plate",
      design: "Sujay Reddy",
      role: ["Product Design", "Design Systems"],
      platforms: ["Mobile"],
      podTeam: ["1 Design Lead", "4 Product Designers", "1 Product Manager"],
    },
    challenge: [
      "Users struggled to understand offerings and navigate a **fragmented ordering flow**, leading to **high drop-offs**.",
      "Lack of **pricing clarity**, limited customization, and poor **post-order visibility** reduced trust and conversion.",
    ],
    solutions: [
      "Simplified the **end-to-end ordering flow** to reduce friction and improve task completion.",
      "Introduced flexible ordering with **'Create Your Own Menu'** and curated box options.",
      "Improved **pricing transparency** with real-time cost breakdowns and **split payment options**.",
      "Enabled **post-order tracking**, status updates, and clearer communication across the journey.",
    ],
    results: [
      "Reduced drop-offs across the **ordering funnel**.",
      "Improved **order completion rate** and user confidence during checkout.",
      "Increased engagement with customizable and curated ordering options.",
      "Strengthened **post-order trust** through better visibility and communication.",
    ],
    learnings: [
      "**Clarity in pricing and flow** directly impacts conversion in high-value transactions.",
      "**Flexibility in ordering** is critical for bulk-use cases.",
      "**Post-order experience** is as important as pre-order in building trust and retention.",
      "**Early alignment** with business and engineering accelerates adoption of system-level changes.",
    ],
    shoutouts: [
      "A huge thank you to everyone involved in bringing this to life. From shaping the vision to executing across multiple touchpoints, this was a true team effort.",
      "Special thanks to **Madhusudhan R**, **Akash M R**, **Uday Kiran Karanam** (Design Lead), **Alolika Ray**, **Aastha**, and **Aastha Yagnik** for their collaboration, support, and contributions throughout the process.",
    ],
    images: [
      "/images/projects/craftmyplate/cmp1.png",
      "/images/projects/craftmyplate/cmp2.png",
      "/images/projects/craftmyplate/cmp3.png",
      "/images/projects/craftmyplate/cmp4.png",
      "/images/projects/craftmyplate/cmp5.png",
      "/images/projects/craftmyplate/cmp6.png",
      "/images/projects/craftmyplate/cmp7.png",
      "/images/projects/craftmyplate/cmp8.png",
      "/images/projects/craftmyplate/cmp9.png",
      "/images/projects/craftmyplate/cmp11.png",
      "/images/projects/craftmyplate/cmp12.png",
      "/images/projects/craftmyplate/cmp13.png",
      "/images/projects/craftmyplate/cmp14.png",
      "/images/projects/craftmyplate/cmp19.png",
    ],
    appHref: "https://play.google.com/store/apps/details?id=com.app.craft_my_plate_client&hl=en_IN",
    caseStudyDownload: {
      href: "/images/projects/craftmyplate/CraftMyPlate Case Study.pdf",
      filename: "CraftMyPlate Case Study.pdf",
    },
    accentColor: "#1e3a2f",
  },
  {
    slug: "wissh",
    title: "Wissh",
    company: "Wissh",
    description: [
      "Wissh is a **vendor platform** designed to streamline operations and drive growth for businesses in the events industry.",
      "I worked on designing the **vendor-side experience** transforming fragmented, manual workflows into a structured system that improves lead management, communication, and bookings.",
      "Operating in a rapidly growing but largely unorganised **$100B+ market**, the focus was on enabling vendors to scale efficiently while improving visibility, conversions, and overall business outcomes.",
    ],
    meta: {
      when: "Apr 2025 – Sep 2025",
      company: "Wissh",
      design: "Sujay Reddy",
      role: ["Product Design", "Design Systems"],
      platforms: ["Mobile"],
      podTeam: ["1 Design Lead", "4 Product Designers", "1 Product Manager"],
    },
    challenge: [
      "Vendors relied heavily on **referrals, WhatsApp, and manual processes** to manage leads and bookings.",
      "Lack of visibility and **unqualified leads** reduced conversion rates and wasted time.",
      "Communication and coordination across events were **fragmented and inefficient**.",
      "No standardised system for **pricing, packages, or operations** in an unorganised market.",
      "High-revenue vendors needed **scalable systems** to manage multiple events simultaneously.",
    ],
    solutions: [
      "Designed a **centralised vendor platform** to manage leads, bookings, and communication in one place.",
      "Streamlined **lead capture and qualification** to improve conversion efficiency.",
      "Introduced structured workflows for **quotations, packages, and booking management**.",
      "Enabled **cross-communication** between vendors and clients for better coordination.",
      "Built scalable systems **dashboards, analytics, role-based actions** to support high-volume vendors.",
      "Created **discovery and growth mechanisms** like promotions, referrals, and monetised leads.",
    ],
    results: [
      "Reduced dependency on **fragmented channels** like WhatsApp for core operations.",
      "Improved efficiency in **lead management and booking workflows**.",
      "Increased vendor visibility and access to **higher-quality leads**.",
      "Enabled vendors to manage **multiple events** with better control and coordination.",
      "Established a **scalable foundation** for vendor growth within the platform.",
    ],
    learnings: [
      "In unorganised markets, **structure itself becomes the biggest value proposition**.",
      "**Lead quality** matters more than lead quantity for vendor growth.",
      "Designing for business users requires balancing **flexibility with operational clarity**.",
      "**Communication systems** are core, not secondary, in multi-stakeholder platforms.",
      "**Early validation (POC)** is critical when introducing new marketplace models.",
    ],
    shoutouts: [
      "A huge thank you to everyone involved in bringing this to life. From shaping the vision to executing across multiple touchpoints, this was a true team effort.",
      "Special thanks to **Madhusudhan R**, **Akash M R**, **Uday Kiran Karanam** (Design Lead), **Alolika Ray**, **Aastha**, and **Aastha Yagnik** for their collaboration, support, and contributions throughout the process.",
    ],
    images: [
      "/images/projects/wish/w1.png",
      "/images/projects/wish/w2.png",
      "/images/projects/wish/w4.png",
      "/images/projects/wish/w5.png",
      "/images/projects/wish/w6.png",
      "/images/projects/wish/w7.png",
      "/images/projects/wish/w8.png",
      "/images/projects/wish/w9.png",
      "/images/projects/wish/w10.png",
    ],
    accentColor: "#1a2744",
  },
  {
    slug: "beta-trading-company",
    title: "Beta Trading Company",
    company: "Beta Trading Company",
    description: [
      "Beta Trading Company (BTC) is a **fast-growing financial services firm** operating across financial product distribution, proprietary trading, and upcoming portfolio management offerings.",
      "I worked on redesigning **key product experiences** to bring clarity, structure, and scalability across multiple business verticals simplifying complex financial workflows and aligning them with user and business needs.",
      "The focus was on creating a more **intuitive, trustworthy, and conversion-driven experience** in a domain where clarity and credibility are critical.",
    ],
    meta: {
      when: "Dec 2024 – May 2025",
      company: "Beta Trading Company",
      design: "Sujay Reddy",
      role: ["Product Designer (Contract)"],
      platforms: ["Web & Mobile"],
      podTeam: ["1 Product Designer"],
    },
    challenge: [
      "Financial offerings were **fragmented across multiple verticals**, making it difficult for users to understand and navigate.",
      "Lack of **structured information architecture** and unclear flows impacted user trust and decision-making.",
      "**Complex financial concepts** were not translated effectively into user-friendly experiences.",
      "The product needed to **scale across new verticals** while maintaining consistency and usability.",
    ],
    solutions: [
      "Designed a **unified experience layer** to bring consistency across multiple financial services.",
      "Simplified complex financial workflows into **clear, guided user journeys**.",
      "Improved **information architecture** to make offerings easier to discover and compare.",
      "Introduced **structured layouts and communication patterns** to build trust and credibility.",
      "Created **scalable design patterns** to support future verticals like portfolio management.",
    ],
    results: [
      "Improved **clarity and usability** across key financial workflows.",
      "Increased **user confidence** in navigating and understanding financial products.",
      "Reduced friction in **exploration and decision-making** journeys.",
      "Established a **scalable foundation** for future product expansion.",
    ],
    learnings: [
      "In finance, **clarity and trust** are more important than feature depth.",
      "**Strong information architecture** is critical when dealing with multiple verticals.",
      "Simplifying complex domains requires balancing **accuracy with usability**.",
      "**Designing for scalability** early helps avoid fragmentation as the product grows.",
    ],
    websiteHref: "https://betatradingcompany.com/",
    shoutouts: [
      "A huge thank you to everyone involved in bringing this to life. From shaping the vision to executing across multiple touchpoints, this was a true team effort.",
      "Special thanks to **Chaitanya** and **Karthik** for the opportunity and trust.",
    ],
    images: [
      "/images/projects/beta-trading-company/b1.png",
      "/images/projects/beta-trading-company/b2.png",
      "/images/projects/beta-trading-company/b3.png",
    ],
    accentColor: "#2e1f14",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
