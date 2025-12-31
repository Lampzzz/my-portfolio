const scrollImages = [
  // Column 1 images - Landscape web/app screenshots
  [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=260&fit=crop&q=80",
  ],
  // Column 2 images
  [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=260&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=240&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=280&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop&q=80",
  ],
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
      <div className="container-hero relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            {/* Status Badge */}
            <div className="animate-on-load animate-fade-in-up mb-8">
              <span className="status-available">
                Available for new projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-on-load animate-fade-in-up delay-100">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] uppercase">
                Building Modern
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] uppercase">
                Web Interfaces
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] uppercase text-[var(--color-text-muted)]">
                That Scale
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-on-load animate-fade-in-up delay-200 mt-8 text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed">
              Frontend developer specializing in React, Next.js, and TypeScript. 
              I craft performant, accessible, and pixel-perfect interfaces.
            </p>

            {/* CTA Buttons */}
            <div className="animate-on-load animate-fade-in-up delay-300 mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Book a Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#work" className="btn btn-secondary">
                Sample Works
              </a>
            </div>
          </div>

          {/* Right - Infinite Scrolling Images (2 columns) */}
          <div className="hidden lg:flex gap-4 h-[600px] justify-end">
            {/* Column 1 - Scrolls Up */}
            <div className="scroll-container w-64 xl:w-72 h-full">
              <div className="animate-scroll-up flex flex-col gap-4">
                {[...scrollImages[0], ...scrollImages[0]].map((src, i) => (
                  <div
                    key={i}
                    className="w-full slider-card"
                  >
                    <img
                      src={src}
                      alt={`Web project ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolls Down */}
            <div className="scroll-container w-64 xl:w-72 h-full">
              <div className="animate-scroll-down flex flex-col gap-4">
                {[...scrollImages[1], ...scrollImages[1]].map((src, i) => (
                  <div
                    key={i}
                    className="w-full slider-card"
                  >
                    <img
                      src={src}
                      alt={`Web project ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
