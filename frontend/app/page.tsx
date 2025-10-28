export default function PortfolioHomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white selection:bg-blue-500/30 selection:text-white">
      {/* bg gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20rem] h-[32rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.4)_0%,rgba(0,0,0,0)_70%)] blur-3xl opacity-40" />
        <div className="absolute bottom-[-16rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.4)_0%,rgba(0,0,0,0)_70%)] blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)] opacity-[0.15]" />
      </div>

      {/* HERO */}
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-20 md:py-28 lg:flex-row lg:items-start lg:gap-20">
        {/* LEFT: intro */}
        <div className="flex-1">
          {/* status pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span>Data Science in Business @ Corvinus Univ. Budapest</span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Matvei Pisarev
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Data Science Student · Aspiring Data Engineer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            I build data pipelines, dashboards and lightweight APIs that turn
            raw data into decisions. I like clean code, reproducible analysis,
            and shipping tools that people actually use.
          </p>

          {/* tech chips */}
          <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/80">
            <Tag label="Python / FastAPI" />
            <Tag label="SQL & MongoDB" />
            <Tag label="ETL & Data Pipelines" />
            <Tag label="Next.js Frontend" />
            <Tag label="Machine Learning Basics" />
            <Tag label="Data Viz / Storytelling" />
          </div>

          {/* actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <NavLink
              href="#"
              className="group inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_20px_60px_-10px_rgba(255,255,255,0.7)] transition hover:bg-white/90 hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.9)]"
            >
              <svg
                className="mr-2 h-4 w-4 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 15v2.25A2.25 2.25 0 0117.25 19.5H6.75A2.25 2.25 0 014.5 17.25V15m3.37-3.53l4.13 4.13m0 0l4.13-4.13m-4.13 4.13V3.75"
                />
              </svg>
              <span>Download CV (PDF)</span>
            </NavLink>

            <NavLink
              href="mailto:you@email.com"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              <svg
                className="mr-2 h-4 w-4 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.5a2.25 2.25 0 01-2.32 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>
              <span>Contact me</span>
            </NavLink>
          </div>
        </div>

        {/* RIGHT: dashboard-style cards */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* card 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)] backdrop-blur-[6px]">
              <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                <span className="font-medium">Currently building</span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                  in progress
                </span>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>
                    <strong>Albion Online Market Tracker</strong> – real-time
                    price tracking, analytics & craft cost calculator.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>
                    <strong>Portfolio API</strong> – FastAPI + MongoDB backend
                    powering this website.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>
                    <strong>University projects</strong> – ML labs, data
                    cleaning, dashboarding.
                  </span>
                </li>
              </ul>
            </div>

            {/* card 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)] backdrop-blur-[6px]">
              <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                <span className="font-medium">Core skills</span>
                <span className="rounded-full bg-blue-400/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300 ring-1 ring-blue-400/30">
                  tech
                </span>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Bullet /> <span>Python (pandas, FastAPI, async I/O)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>Data Engineering (ETL, pipelines, schedulers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>DBs: PostgreSQL & MongoDB, query optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>Frontend: Next.js, Tailwind, basic UX thinking</span>
                </li>
              </ul>
            </div>

            {/* card 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)] backdrop-blur-[6px] sm:col-span-2">
              <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                <span className="font-medium">Quick facts</span>
                <span className="rounded-full bg-fuchsia-400/20 px-2 py-0.5 text-[10px] font-semibold text-fuchsia-300 ring-1 ring-fuchsia-400/30">
                  about me
                </span>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>
                    1st year BSc "Data Science in Business" student in
                    Budapest.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>
                    Love taking messy CSVs / APIs and turning them into clean
                    dashboards.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>
                    Open for <strong>internships / freelance data projects</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative border-t border-white/10 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Featured work
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/60">
                A few things I'm proud of. Real projects, not school
                exercises.
              </p>
            </div>

            <NavLink
              href="#"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              View all projects →
            </NavLink>
          </div>

          {/* horizontal scroll cards */}
          <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ProjectCard
              badge="Game economy analytics"
              title="Albion Online Market Tracker"
              desc="Sniffs in-game market packets, stores them in PostgreSQL, exposes FastAPI endpoints and a web dashboard for real-time item prices and craft cost ROI."
              stack={["Python", "FastAPI", "PostgreSQL", "Next.js"]}
            />

            <ProjectCard
              badge="Clean energy data"
              title="EV Registration Insights"
              desc="Explored electric vehicle adoption in Washington State: clustering, trend analysis, and interactive visualizations for policy discussion."
              stack={["Python", "pandas", "R", "ggplot2"]}
            />

            <ProjectCard
              badge="E-commerce infra"
              title="Perfume Store Platform"
              desc="Full-stack prototype of an online perfume boutique with product catalog, checkout flow for local payments, and basic admin analytics."
              stack={["Django/DRF", "React", "Postgres"]}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0a0a0a]/80 px-6 py-12 text-sm text-white/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="font-semibold text-white">
              Matvei Pisarev · Data Science Student
            </div>
            <div className="text-xs text-white/40">
              Built with Next.js, FastAPI & MongoDB
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/60">
            <SocialIcon
              label="GitHub"
              href="https://github.com/mapi-developer"
              svgPath="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.1.8-.25.8-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.12-3.18 0 0 .98-.32 3.2 1.2a11 11 0 015.8 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.66.24 2.88.12 3.18.74.82 1.2 1.87 1.2 3.15 0 4.52-2.74 5.5-5.35 5.8.4.34.76 1 .76 2.02v3c0 .3.22.65.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
            />
            <SocialIcon
              label="LinkedIn"
              href="https://www.linkedin.com/"
              svgPath="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h3.96v12H3v-12zM9.5 8.98h3.8v1.64h.05c.53-.97 1.83-1.99 3.77-1.99 4.03 0 4.78 2.46 4.78 5.65v6.7H17v-5.94c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.54-2.28 3.14v6.05H9.5v-12z"
            />
            <SocialIcon
              label="Email"
              href="mailto:you@email.com"
              svgPath="M1.5 5.25A2.25 2.25 0 013.75 3h16.5A2.25 2.25 0 0122.5 5.25v13.5A2.25 2.25 0 0120.25 21H3.75A2.25 2.25 0 011.5 18.75V5.25zm2.36-.75a.75.75 0 00-.61.3.75.75 0 00.12.99l7.38 6.15a1.5 1.5 0 001.9 0l7.38-6.15a.75.75 0 00.12-.99.75.75 0 00-.61-.3H3.86z"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-7xl text-[10px] text-white/30">
          © {new Date().getFullYear()} Matvei Pisarev. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

/* -------- Small components -------- */

function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur">{label}</span>
  );
}

// glowing bullet dot used in lists
function Bullet() {
  return (
    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
  );
}

// card used in horizontal project scroller
function ProjectCard({
  badge,
  title,
  desc,
  stack,
}: {
  badge: string;
  title: string;
  desc: string;
  stack: string[];
}) {
  return (
    <div className="min-w-[280px] max-w-[320px] snap-start rounded-2xl border border-white/10 bg-[#0f0f0f]/60 p-6 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/5 backdrop-blur">
      <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold">
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/60 ring-1 ring-white/20">{badge}</span>
      </div>

      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-white/70">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-white/20 bg-white/5 px-2 py-1 font-medium backdrop-blur"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

// social icon link (GitHub, LinkedIn, Email)
function SocialIcon({
  label,
  href,
  svgPath,
}: {
  label: string;
  href: string;
  svgPath: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 backdrop-blur transition hover:border-white/40 hover:bg-white/10 hover:text-white"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={svgPath} />
      </svg>
    </a>
  );
}
