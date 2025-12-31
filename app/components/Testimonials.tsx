const testimonials = [
  {
    id: 1,
    quote:
      "An exceptional frontend developer who delivers pixel-perfect implementations. Their attention to detail and code quality is outstanding.",
    author: "Sarah Chen",
    role: "Tech Lead, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    id: 2,
    quote:
      "Transformed our sluggish web app into a lightning-fast experience. Their expertise in React and performance optimization is top-notch.",
    author: "Michael Torres",
    role: "Founder, LaunchPad",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
  {
    id: 3,
    quote:
      "Built our component library from scratch with excellent documentation. The codebase is clean, maintainable, and a joy to work with.",
    author: "Emily Watson",
    role: "Engineering Manager, DevFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-[var(--color-bg-alt)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
            What People Say
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Don't just take my word for it — hear from some of the amazing
            people I've had the privilege to work with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08),0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 ${
                index === 1 ? "md:-mt-4" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-[var(--color-text)]/10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-[var(--color-text)] leading-relaxed flex-1">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center gap-4">
                {/* Avatar */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[var(--color-text)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

