const skills = [
  { category: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Libraries", items: ["Redux / Zustand", "React Query", "Framer Motion", "Shadcn UI"] },
  { category: "Tools", items: ["Git / GitHub", "VS Code", "Figma", "Vercel / Netlify"] },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Image & Personal Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-[var(--color-bg-alt)] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&q=80"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--color-accent)]/10 rounded-2xl -z-10" />
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", href: "#" },
                { name: "Twitter", href: "#" },
                { name: "Dribbble", href: "#" },
                { name: "GitHub", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-text)] transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Bio & Skills */}
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <span className="badge mb-4">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Hello, I'm{" "}
              <span className="underline decoration-2 underline-offset-4">
                Your Name
              </span>
            </h2>
            <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                I'm a frontend developer based in [Your City], passionate
                about building web applications that are fast, accessible, and
                delightful to use. I specialize in the React ecosystem and love
                turning complex problems into elegant solutions.
              </p>
              <p>
                My focus is on writing clean, maintainable code while ensuring
                pixel-perfect implementation of designs. I care deeply about
                performance optimization, responsive design, and creating
                seamless user experiences across all devices.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frontend
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Skills & Expertise</h3>
              <div className="grid sm:grid-cols-3 gap-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-medium text-[var(--color-text-subtle)] uppercase tracking-wider mb-3">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill}
                          className="text-[var(--color-text-muted)] text-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume CTA */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[var(--color-text)] font-medium hover:text-[var(--color-accent)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

