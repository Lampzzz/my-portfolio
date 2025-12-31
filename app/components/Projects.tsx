const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    subtitle: "Admin Analytics Platform",
    description:
      "I helped ShopFlow build a real-time admin dashboard that transformed how they manage inventory and track orders.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80",
    ],
    link: "#",
    achievements: [
      { metric: "40%", label: "faster load times" },
      { metric: "2.5x", label: "increase in user engagement" },
      { metric: "98", label: "Lighthouse performance score" },
    ],
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "FinTrack Mobile",
    subtitle: "Personal Finance App",
    description:
      "I designed and developed a mobile-first finance tracking app that helps users manage budgets and investments effortlessly.",
    tags: ["React Native", "TypeScript", "Zustand", "Plaid API"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&q=80",
    ],
    link: "#",
    achievements: [
      { metric: "4.8★", label: "average app store rating" },
      { metric: "15K+", label: "active users in 3 months" },
      { metric: "92%", label: "user retention rate" },
    ],
    color: "#10B981",
  },
  {
    id: 3,
    title: "Velocity UI",
    subtitle: "Design System & Component Library",
    description:
      "Built an enterprise-grade component library with 50+ accessible components, comprehensive documentation, and theming support.",
    tags: ["React", "Storybook", "Radix UI", "CSS Variables"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80",
    ],
    link: "#",
    achievements: [
      { metric: "50+", label: "reusable components" },
      { metric: "100%", label: "accessibility compliant" },
      { metric: "3x", label: "faster development time" },
    ],
    color: "#8B5CF6",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section bg-[var(--color-bg-alt)]">
      <div className="container">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <span className="inline-block text-[var(--color-text-muted)] text-sm font-medium tracking-wide uppercase mb-4">
            My Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Recent Best Projects
          </h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Collage */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative bg-[var(--color-bg)] rounded-2xl p-6 shadow-lg">
                  {/* Main Image */}
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>

                  {/* Secondary Images - Floating */}
                  <div className="absolute -bottom-6 -right-6 flex gap-3">
                    {project.secondaryImages.map((img, i) => (
                      <div
                        key={i}
                        className="w-24 h-20 md:w-32 md:h-24 rounded-lg overflow-hidden shadow-xl border-4 border-[var(--color-bg)]"
                        style={{
                          transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                        }}
                      >
                        <img
                          src={img}
                          alt={`${project.title} preview ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Decorative element */}
                  <div
                    className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                {/* Project Logo/Icon placeholder */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-xl"
                  style={{ backgroundColor: project.color }}
                >
                  {project.title.charAt(0)}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm uppercase tracking-wide mb-6">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-4 mb-8">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-[var(--color-text)]">
                        <span className="font-bold">{achievement.metric}</span>{" "}
                        {achievement.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[var(--color-bg)] rounded-full text-xs font-medium text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  className="group inline-flex items-center gap-2 text-[var(--color-text)] font-semibold hover:gap-4 transition-all duration-300"
                >
                  <span>View Case Study</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <a href="#" className="btn btn-secondary">
            View All Projects
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </section>
  );
}
