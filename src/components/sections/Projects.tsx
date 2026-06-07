import { motion } from "framer-motion";
import { BarChart2, Music, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Student Result Prediction System",
    subtitle: "ML Pipeline · Academic Analytics",
    description:
      "An end-to-end machine learning pipeline to predict student academic performance from demographic and academic features. Includes feature selection, preprocessing, classification models, and an interactive real-time prediction interface.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: BarChart2,
    color: "primary" as const,
    highlights: ["End-to-end ML pipeline", "Feature engineering & selection", "Interactive prediction UI"],
  },
  {
    title: "Moodify",
    subtitle: "Flutter App · Music Recommendation",
    description:
      "A cross-platform mobile app that recommends music based on user mood. Built with Flutter for a clean, responsive UI and a seamless experience across every device size — blending smart logic with intuitive design.",
    tech: ["Flutter", "Dart"],
    icon: Music,
    color: "secondary" as const,
    highlights: ["Cross-platform mobile", "Mood-based recommendations", "Polished responsive UI"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.012] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-secondary text-xs tracking-widest uppercase mb-4">04 — Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Featured Work</h2>
          <div className="section-line" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isPrimary = project.color === "primary";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-white/6 overflow-hidden hover:border-white/14 transition-all duration-500"
              >
                {/* Hover gradient wash */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isPrimary ? "bg-gradient-to-br from-primary/6 to-transparent" : "bg-gradient-to-br from-secondary/6 to-transparent"}`} />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px]">
                  {/* Main */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-7">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${isPrimary ? "bg-primary/12 border border-primary/20" : "bg-secondary/12 border border-secondary/20"}`}>
                        <Icon className={`w-6 h-6 ${isPrimary ? "text-primary" : "text-secondary"}`} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">{project.subtitle}</div>
                        <h3 className="text-xl md:text-2xl font-bold leading-snug">{project.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-7 max-w-2xl text-sm md:text-base">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 text-xs font-mono rounded-lg border border-white/8 text-foreground/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="lg:border-l border-t lg:border-t-0 border-white/6 p-8 md:p-10 flex flex-col justify-center gap-4 bg-white/[0.015]">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Key Highlights</div>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${isPrimary ? "bg-primary/12" : "bg-secondary/12"}`}>
                          <ArrowUpRight className={`w-3.5 h-3.5 ${isPrimary ? "text-primary" : "text-secondary"}`} />
                        </div>
                        <span className="text-sm text-foreground/80">{h}</span>
                      </div>
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
