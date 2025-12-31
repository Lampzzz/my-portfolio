const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "GitHub", href: "#" },
];

const footerLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-text)] text-[var(--color-bg)] py-16">
      <div className="container">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="font-serif text-2xl font-semibold tracking-tight inline-block mb-4"
            >
              YN.
            </a>
            <p className="text-[var(--color-bg)]/70 max-w-sm leading-relaxed">
              Frontend developer building fast, accessible, and beautiful web
              applications. Let's bring your next project to life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[var(--color-bg)]/50">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--color-bg)]/70 hover:text-[var(--color-bg)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[var(--color-bg)]/50">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--color-bg)]/70 hover:text-[var(--color-bg)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-bg)]/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--color-bg)]/50">
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[var(--color-bg)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-bg)] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

