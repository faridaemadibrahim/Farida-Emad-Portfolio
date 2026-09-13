export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1040px] mx-auto flex items-center justify-between px-8 py-4">
        <div className="font-mono text-sm text-ink flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal"></span>
          farida_emad.dev
        </div>
        <nav>
          <ul className="flex gap-7 font-mono text-[13px] text-ink-soft">
            <li>
              <a href="#work" className="hover:text-purple transition-colors">
                projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-pink transition-colors">
                skills
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal transition-colors">
                about
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#contact"
          className="font-mono text-[13px] border border-border rounded px-3.5 py-1.5 hover:border-purple hover:text-purple transition-colors"
        >
          get in touch
        </a>
      </div>
    </header>
  );
}
