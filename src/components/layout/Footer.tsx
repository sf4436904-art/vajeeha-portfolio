export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <span>
          <span className="text-primary font-bold">VR</span>. — Vajeeha Rizvi
        </span>
        <span>Designed & built with React · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
