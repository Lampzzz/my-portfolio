const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Built a responsive admin dashboard with real-time analytics, inventory management, and order tracking using Next.js and Chart.js.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description:
      "Developed a high-converting landing page with smooth animations, optimized Core Web Vitals, and a 95+ Lighthouse score.",
    tags: ["React", "Framer Motion", "SEO"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Component Library",
    description:
      "Created a reusable UI component library with Storybook documentation, accessibility compliance, and theming support.",
    tags: ["React", "Storybook", "A11y"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&q=80",
    link: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description:
      "Built a performant chat application with WebSocket integration, optimistic updates, and offline support.",
    tags: ["Next.js", "Socket.io", "Zustand"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=400&fit=crop&q=80",
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="work" className="section bg-[var(--color-bg-alt)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="badge mb-4">Selected Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
              Recent Projects
            </h2>
          </div>
          <a
            href="#"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors text-sm font-medium link-underline self-start sm:self-auto"
          >
            View all projects →
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {/* Featured Projects - Large Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  className="group card hover-lift"
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-[var(--color-bg-alt)] relative overflow-hidden img-zoom">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[var(--color-text)]/0 group-hover:bg-[var(--color-text)]/5 transition-colors duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 md:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[var(--color-text-subtle)] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {project.description}
                    </p>

                    {/* View Project Link */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* Other Projects - Smaller Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  className="group card hover-lift flex flex-col sm:flex-row"
                >
                  {/* Project Image */}
                  <div className="sm:w-48 md:w-56 shrink-0 aspect-[4/3] sm:aspect-square bg-[var(--color-bg-alt)] relative overflow-hidden img-zoom">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[var(--color-text-subtle)] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

