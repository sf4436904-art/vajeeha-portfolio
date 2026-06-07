import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, GitMerge, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingChips = [
  { label: "CGPA", value: "8.5 / 10", pos: "top-8 -left-6", anim: "animate-float-up", color: "text-primary" },
  { label: "PyTorch · Scikit-learn", value: "ML Stack", pos: "-bottom-2 -right-4", anim: "animate-float-down", color: "text-secondary" },
  { label: "DSA", value: "Active", pos: "top-1/2 -right-8 -translate-y-1/2", anim: "animate-float-side", color: "text-primary" },
];

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* ── Left: Content ── */}
          <div className="order-2 lg:order-1">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-primary tracking-widest uppercase">Open to Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.04] mb-5"
            >
              Vajeeha
              <br />
              <span className="text-gradient">Rizvi</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-sm text-muted-foreground tracking-wider mb-7"
            >
              AI &amp; ML Engineer &nbsp;·&nbsp; Competitive Programmer &nbsp;·&nbsp; B.Tech CSE
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[480px] mb-8"
            >
              Building production-grade ML systems and mastering algorithmic thinking. Turning complex problems into elegant, scalable software.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-1.5 text-sm text-muted-foreground mb-9"
            >
              <MapPin size={13} className="text-primary" />
              <span className="font-mono text-xs">Lucknow, Uttar Pradesh, India</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11 px-7 rounded-xl shadow-lg shadow-primary/20 transition-all duration-200"
                onClick={() => scrollTo("#projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5 hover:border-white/20 text-foreground h-11 px-7 rounded-xl transition-all duration-200"
                onClick={() => scrollTo("#contact")}
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              {[
                { href: "mailto:rizvivajeeha6@gmail.com", icon: Mail, label: "Email", hover: "hover:text-primary hover:border-primary/40" },
                { href: "https://linkedin.com/in/vajeeha-rizvi-9300a832a", icon: Linkedin, label: "LinkedIn", hover: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40", target: "_blank" },
                { href: "https://gitlab.com/sf4436904", icon: GitMerge, label: "GitLab", hover: "hover:text-[#FC6D26] hover:border-[#FC6D26]/40", target: "_blank" },
              ].map(({ href, icon: Icon, label, hover, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noreferrer" : undefined}
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-200 ${hover}`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Floating chips */}
              {floatingChips.map((chip) => (
                <div key={chip.label} className={`absolute z-20 ${chip.pos} ${chip.anim}`}>
                  <div className="px-3 py-2 rounded-xl bg-card/90 border border-white/10 backdrop-blur-sm shadow-xl whitespace-nowrap">
                    <span className={`text-xs font-mono font-semibold ${chip.color}`}>{chip.label}</span>
                    {chip.value !== "Active" && chip.value !== "ML Stack" && (
                      <span className="text-xs text-muted-foreground ml-1">{chip.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Photo frame */}
              <div className="relative w-[280px] md:w-[340px] rounded-3xl overflow-hidden photo-glow">
                {/* Decorative top bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/60 via-secondary/60 to-primary/60 z-10" />

                <img
                  src="/vajeeha-1.png"
                  alt="Vajeeha Rizvi"
                  className="w-full h-auto block"
                  style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "center top" }}
                />

                {/* Bottom overlay with status */}
                <div className="absolute bottom-0 inset-x-0 px-4 py-4 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-xs font-mono text-foreground/70">Available for internships &amp; roles</span>
                  </div>
                </div>
              </div>

              {/* Decorative background blob behind photo */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 to-secondary/10 blur-3xl rounded-full scale-110" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-[10px] font-mono text-muted-foreground/50 tracking-widest uppercase group-hover:text-muted-foreground transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-muted-foreground/40 group-hover:text-primary transition-colors" size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
