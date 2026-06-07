import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, GitMerge, Send } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "rizvivajeeha6@gmail.com", href: "mailto:rizvivajeeha6@gmail.com", color: "primary" as const },
  { icon: Phone, label: "Phone", value: "+91-7054501235", href: "tel:+917054501235", color: "secondary" as const },
  { icon: Linkedin, label: "LinkedIn", value: "vajeeha-rizvi-9300a832a", href: "https://linkedin.com/in/vajeeha-rizvi-9300a832a", color: "linkedin" as const },
  { icon: GitMerge, label: "GitLab", value: "gitlab.com/sf4436904", href: "https://gitlab.com/sf4436904", color: "gitlab" as const },
];

const colorMap = {
  primary:  { border: "hover:border-primary/25", icon: "text-primary",     bg: "bg-primary/10"   },
  secondary:{ border: "hover:border-secondary/25", icon: "text-secondary", bg: "bg-secondary/10" },
  linkedin: { border: "hover:border-[#0A66C2]/25", icon: "text-[#0A66C2]", bg: "bg-[#0A66C2]/10" },
  gitlab:   { border: "hover:border-[#FC6D26]/25", icon: "text-[#FC6D26]", bg: "bg-[#FC6D26]/10"  },
};

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="font-mono text-primary text-xs tracking-widest uppercase mb-5">06 — Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Let's Connect</h2>
            <div className="section-line mx-auto mb-7" />
            <p className="text-muted-foreground leading-relaxed">
              Whether you have an opportunity, a project idea, or just want to discuss ML and algorithms — I'd love to hear from you.
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <a
              href="mailto:rizvivajeeha6@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <Send size={16} />
              Send a Message
            </a>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((link, idx) => {
              const Icon = link.icon;
              const c = colorMap[link.color];
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.07 }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border border-white/6 bg-white/[0.02] ${c.border} hover:bg-white/[0.04] transition-all duration-200`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.bg} ${c.icon}`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-muted-foreground mb-0.5">{link.label}</div>
                    <div className="text-sm font-medium text-foreground truncate">{link.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
