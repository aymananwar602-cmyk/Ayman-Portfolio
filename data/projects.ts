export type Project = {
  title: string;
  tag: string;
  desc: string;
  points: string[];
  stack: string[];
  live: string;
  code: string;
};

export const projects: Project[] = [
  {
    title: "Crypto Market Dashboard",
    tag: "React / TypeScript",
    desc: "A modern cryptocurrency dashboard providing real-time market data, interactive analytics, and responsive data visualization powered by the CoinGecko API.",
    points: [
      "Integrated CoinGecko API for real-time cryptocurrency market data",
      "Interactive Line, Bar, and Pie charts with Recharts",
      "Debounced search, filtering, sorting, and pagination",
      "CSV data export and local storage for user preferences",
      "Optimized performance with lazy loading, Suspense, memoization, and API caching",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "CoinGecko API",
      "React Router",
    ],
    live: "https://crypto-market-dashboard-six.vercel.app",
    code: "https://github.com/aymananwar602-cmyk/crypto-market-dashboard",
  },

  {
    title: "Beauty & Skincare",
    tag: "React / TypeScript",
    desc: "A modern responsive beauty and skincare web application designed with a clean interface and a strong focus on user experience and responsive design.",
    points: [
      "Built a responsive interface using React and TypeScript",
      "Component-based architecture for reusable UI sections",
      "Responsive layouts optimized for desktop, tablet, and mobile",
      "Modern styling and interactive user interface",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    live: "https://beauty-skincare-one.vercel.app",
    code: "https://github.com/aymananwar602-cmyk/beauty-skincare",
  },
];