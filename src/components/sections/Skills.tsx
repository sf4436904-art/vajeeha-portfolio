import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "DSA / Competitive Programming",
    color: "primary" as const,
    skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Problem Solving", "OOP"],
  },
  {
    title: "Machine Learning & Data Science",
    color: "secondary" as const,
    skills: ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Programming Languages",
    color: "primary" as const,
    skills: ["Python", "Java", "HTML / CSS"],
  },
  {
    title: "Tools & Environment",
    color: "secondary" as const,
    skills: ["GitLab", "Jupyter Notebook", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.012] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-secondary text-xs tracking-widest uppercase mb-4">02 — Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Technical Skills</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, idx) => {
            const isPrimary = cat.color === "primary";
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-7 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-white/12 transition-all duration-300 overflow-hidden"
              >
                {/* Hover accent */}
                <div className={`absolute top-0 right-0 w-28 h-28 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isPrimary ? "bg-primary/12" : "bg-secondary/12"}`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className={`w-1.5 h-1.5 rounded-full ${isPrimary ? "bg-primary" : "bg-secondary"}`} />
                    <h3 className={`text-xs font-mono tracking-widest uppercase font-semibold ${isPrimary ? "text-primary" : "text-secondary"}`}>
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06 + i * 0.04 }}
                        className={`px-3.5 py-1.5 text-sm rounded-xl border font-medium transition-all duration-200 ${
                          isPrimary
                            ? "border-primary/20 text-primary/90 bg-primary-subtle hover:border-primary/35"
                            : "border-secondary/20 text-secondary/90 bg-secondary-subtle hover:border-secondary/35"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
