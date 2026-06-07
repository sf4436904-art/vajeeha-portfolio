import { motion } from "framer-motion";
import { Briefcase, Brain, Users } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Luxabord",
    type: "Startup · Software",
    date: "2024",
    icon: Briefcase,
    color: "primary" as const,
    bullets: [
      "Contributed to feature development and debugging in a fast-paced startup environment.",
      "Improved application functionality and collaborated on real-world engineering workflows.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "L&T EduTech",
    type: "EdTech · ML",
    date: "2024",
    icon: Brain,
    color: "secondary" as const,
    bullets: [
      "Completed end-to-end ML workflows: data preprocessing, model training, and evaluation.",
      "Applied ML fundamentals on structured datasets using Python and Scikit-learn.",
    ],
  },
  {
    role: "Campus Ambassador",
    company: "Unlox",
    type: "Leadership · Outreach",
    date: "2023 – 24",
    icon: Users,
    color: "primary" as const,
    bullets: [
      "Led student outreach initiatives across campus, expanding platform reach.",
      "Developed communication, leadership, and team coordination skills.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">03 — Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Work History</h2>
          <div className="section-line" />
        </motion.div>

        <div className="space-y-5">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isPrimary = exp.color === "primary";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-[260px_1fr] rounded-2xl border border-white/6 overflow-hidden hover:border-white/12 transition-all duration-300"
              >
                {/* Left panel */}
                <div className={`p-7 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-white/6 ${isPrimary ? "bg-primary/5" : "bg-secondary/5"}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isPrimary ? "bg-primary/15" : "bg-secondary/15"}`}>
                    <Icon className={`w-5 h-5 ${isPrimary ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">{exp.type}</div>
                    <div className={`text-lg font-bold ${isPrimary ? "text-primary" : "text-secondary"}`}>{exp.company}</div>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-xs font-mono text-muted-foreground">
                      {exp.date}
                    </span>
                  </div>
                </div>

                {/* Right panel */}
                <div className="p-7 bg-white/[0.01]">
                  <h3 className="text-xl font-bold mb-5 text-foreground">{exp.role}</h3>
                  <ul className="space-y-3">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPrimary ? "bg-primary/60" : "bg-secondary/60"}`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
