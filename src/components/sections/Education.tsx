import { motion } from "framer-motion";
import { GraduationCap, Award, Star } from "lucide-react";

const education = [
  {
    degree: "B.Tech — CSE (AI & ML)",
    institution: "SRMS College of Engineering & Management, AKTU Lucknow",
    period: "2023 – Present",
    score: "8.5 CGPA",
    isCurrent: true,
  },
  {
    degree: "Class XII — PCM + Computer Science",
    institution: "ISC Board",
    period: "2023",
    score: "89.8%",
    isCurrent: false,
  },
  {
    degree: "Class X",
    institution: "ICSE Board",
    period: "2021",
    score: "95.5%",
    isCurrent: false,
  },
];

const achievements = [
  { title: "Introduction to Generative AI", issuer: "Google Cloud & Simplilearn", tag: "Certification", color: "primary" as const },
  { title: "Student Volunteer Certificate", issuer: "IEEE UP Section", tag: "Volunteering", color: "secondary" as const },
  { title: "Best Anchor Award", issuer: "Freshers Event", tag: "Award", color: "primary" as const },
  { title: "Mentorship & Teaching", issuer: "Teaching since Class 8", tag: "Leadership", color: "secondary" as const },
];

export function Education() {
  return (
    <section id="education" className="py-28">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">05 — Education</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Academic Foundation</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Education timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary w-4.5 h-4.5" />
              </div>
              <h3 className="text-lg font-semibold">Academic Record</h3>
            </div>

            <div className="relative border-l border-white/8 ml-3 space-y-0">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 pb-6 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 ${item.isCurrent ? "border-primary bg-primary" : "border-white/25 bg-background"}`} />
                  {item.isCurrent && (
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary/40 animate-ping" />
                  )}

                  <div className="p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-white/12 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-base leading-snug">{item.degree}</h4>
                      {item.isCurrent && (
                        <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-primary/12 border border-primary/20 text-primary text-xs font-mono">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary text-sm mb-4 font-medium">{item.institution}</p>
                    <div className="flex justify-between items-center border-t border-white/6 pt-3 mt-3">
                      <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                      <span className="text-sm font-bold text-foreground">{item.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Award className="text-secondary w-4.5 h-4.5" />
              </div>
              <h3 className="text-lg font-semibold">Achievements & Certifications</h3>
            </div>

            <div className="space-y-3">
              {achievements.map((item, idx) => {
                const isPrimary = item.color === "primary";
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-white/6 hover:border-white/12 hover:bg-white/[0.02] transition-all duration-200"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${isPrimary ? "bg-primary/12" : "bg-secondary/12"}`}>
                      <Star className={`w-4 h-4 ${isPrimary ? "text-primary" : "text-secondary"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 font-mono">{item.issuer}</p>
                    </div>
                    <span className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-mono border ${isPrimary ? "bg-primary/10 border-primary/20 text-primary" : "bg-secondary/10 border-secondary/20 text-secondary"}`}>
                      {item.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
