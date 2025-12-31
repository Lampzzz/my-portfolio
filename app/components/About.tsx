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
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-[var(--color-border)] text-[var(--color-text-muted)] rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-[var(--color-border)] text-[var(--color-text-muted)] rounded-full hover:bg-[#181717] hover:text-white hover:border-[#181717] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-[var(--color-border)] text-[var(--color-text-muted)] rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
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

