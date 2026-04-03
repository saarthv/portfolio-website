export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="font-serif text-4xl tracking-tight text-white sm:text-5xl">About</h1>
        <div className="max-w-3xl space-y-4 text-zinc-300">
          <p>
            I am a data scientist focused on building decision systems across product, finance, and
            AI. I enjoy turning ambiguous problems into structured workflows that combine modeling,
            experimentation, and product thinking.
          </p>
          <p>
            At Columbia MSDS and in prior operating roles, I have worked on risk analytics,
            geospatial intelligence, agentic workflows, and market-facing dashboards.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-white/10 bg-[#130b24] p-6">
        <h2 className="font-serif text-2xl text-white">What I Work On</h2>
        <ul className="list-disc space-y-2 pl-6 text-zinc-300">
          <li>Machine learning systems for forecasting, risk detection, and optimization</li>
          <li>Product analytics and decision-support tools for business workflows</li>
          <li>Agentic AI pipelines with transparent execution and auditability</li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <h3 className="font-serif text-2xl text-white">Bain &amp; Company</h3>
          <p className="mt-1 text-violet-200">Analyst Intern, Private Equity Group</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>
              Analyzed large-scale behavioral and transactional datasets using SQL and Python,
              identifying key patterns and translating insights into structured recommendations to
              support business decision-making.
            </li>
            <li>
              Developed executive-ready presentations and dashboards using Excel, PowerPoint, and
              Tableau, communicating insights clearly to cross-functional stakeholders and enabling
              data-driven discussions across recurring analyses.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <h3 className="font-serif text-2xl text-white">GigUp — where creativity meets opportunity</h3>
          <p className="mt-1 text-violet-200">Co-Founder | Apr 2022 – Jul 2024</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>
              Owned end-to-end product analytics for a two-sided marketplace (150+ users), defining
              core KPIs, tracking acquisition, engagement, and retention, and identifying conversion
              bottlenecks across the user journey.
            </li>
            <li>
              Collaborated with users and stakeholders to identify friction points and improve UX,
              iterating on features and messaging to enhance engagement and drive measurable
              improvements in user conversion and retention.
            </li>
          </ul>
        </article>
      </section>

      <section className="space-y-5 rounded-2xl border border-white/10 bg-[#130b24] p-6">
        <h2 className="font-serif text-2xl text-white">Beyond Work</h2>
        <p>
          <span className="font-medium text-violet-200">Music:</span> I spend a lot of my time
          listening to music, and I am constantly fascinated by how insanely good Spotify&apos;s
          recommendations are. It is genuinely one of my favorite product experiences. I also play
          the guitar, have performed in bands, and love jamming and experimenting across genres
          whenever I get the chance.
        </p>
        <p>
          <span className="font-medium text-violet-200">Fitness:</span> I am pretty consistent
          about working out. It is one of those things that keeps me grounded and clears my head.
          Whether it is lifting or just staying active, I genuinely enjoy the routine and
          discipline that comes with it.
        </p>
        <p>
          <span className="font-medium text-violet-200">Startups:</span> I am really drawn to
          building things. I previously co-founded a startup called GigUp, and since then I have
          been hooked on thinking through product ideas. I enjoy exploring problems at the
          intersection of tech, data, and user experience, and I am always ideating in the
          background.
        </p>
      </section>
    </div>
  );
}
