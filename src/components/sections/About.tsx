import { motion } from "framer-motion";
import { Brain, Code2, Zap } from "lucide-react";

const stats = [
  { label: "CGPA", value: "8.5", suffix: "/10", color: "text-primary" },
  { label: "Class XII", value: "89.8", suffix: "%", color: "text-secondary" },
  { label: "Class X", value: "95.5", suffix: "%", color: "text-primary" },
  { label: "Internships", value: "2", suffix: "+", color: "text-secondary" },
];

const traits = [
  { icon: Brain, label: "ML Systems", desc: "End-to-end pipelines from raw data to deployed models" },
  { icon: Code2, label: "Algorithms", desc: "DSA, Dynamic Programming, competitive problem-solving" },
  { icon: Zap, label: "Engineering", desc: "Clean backend logic, scalable and maintainable code" },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left sticky col */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55 }}
              className="lg:sticky lg:top-32"
            >
              <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">01 — About</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">Who I Am</h2>
              <div className="section-line mb-8" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="p-4 rounded-2xl border border-white/6 bg-white/[0.025] hover:border-white/12 transition-colors"
                  >
                    <div className={`text-2xl font-bold font-mono ${stat.color}`}>
                      {stat.value}
                      <span className="text-sm font-normal text-muted-foreground">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-mono">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-5"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm a Computer Science undergraduate specialising in{" "}
                <strong className="text-foreground font-semibold">Artificial Intelligence &amp; Machine Learning</strong>.
                My foundation is built on a rigorous understanding of Data Structures, Algorithms, and competitive problem-solving.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I have hands-on experience with Python, Java, Scikit-learn, PyTorch, and Flutter — translating complex logic into practical, production-ready applications. Currently deepening my Dynamic Programming and competitive programming skills.
              </p>
            </motion.div>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="relative p-7 rounded-2xl border border-primary/15 bg-primary/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-bl-full blur-2xl pointer-events-none" />
              <div className="absolute -top-3 left-7 text-5xl text-primary/20 font-serif select-none">"</div>
              <p className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed relative z-10 mt-3">
                Passionate about clean backend logic, algorithmic thinking, and building{" "}
                <span className="text-primary">production-grade ML systems</span> that scale.
              </p>
            </motion.div>

            {/* Trait cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {traits.map((trait, idx) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={trait.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                    className="group p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1.5">{trait.label}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{trait.desc}</p>
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
