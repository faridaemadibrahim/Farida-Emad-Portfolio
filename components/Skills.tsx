type SkillGroup = {
  title: string;
  color: "purple" | "pink" | "teal";
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Development Stack",
    color: "purple",
    items: [
      "React.js & Next.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Bootstrap & Tailwind CSS",
      "Responsive Web Design",
      "RESTful API Integration",
    ],
  },
  {
    title: "Quality & Testing",
    color: "pink",
    items: [
      "Manual & Functional Testing",
      "UI/UX Testing",
      "Test Case Design",
      "Bug Tracking & Regression",
    ],
  },
  {
    title: "Engineering Tools",
    color: "teal",
    items: [
      "Git & GitHub",
      "VS Code & Chrome DevTools",
      "Postman",
      "Jira",
      "Figma",
    ],
  },
];

const colorMap = {
  purple: {
    dot: "bg-purple",
    head: "text-purple",
    tag: "bg-purple/10 text-purple border-purple/20",
  },
  pink: {
    dot: "bg-pink",
    head: "text-pink",
    tag: "bg-pink/10 text-pink border-pink/20",
  },
  teal: {
    dot: "bg-teal",
    head: "text-teal",
    tag: "bg-teal/10 text-teal border-teal/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1040px] mx-auto px-8 py-20">
      <div className="font-mono text-xs text-teal mb-2.5">
        05. skills directory
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-lg mb-11">
        Technical Standard Matrix
      </h2>

      <div className="border border-border rounded-xl bg-surface p-7 flex flex-col gap-6">
        {groups.map((g) => {
          const c = colorMap[g.color];
          return (
            <div key={g.title}>
              <h4 className={`font-mono text-xs mb-3 ${c.head}`}>
                {g.title.toUpperCase()}
              </h4>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className={`font-mono text-[12.5px] border rounded px-2.5 py-1 ${c.tag}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
