type Project = {
  name: string;
  url?: string;
  buttonLabel?: string;
  image?: string;
  imageAlt?: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: "AI Cartoon Studio",
    url: "https://ai-cartoon-studio.vercel.app",
    buttonLabel: "Live Demo",
    image: "/images/ai-cartoon-studio.png",
    imageAlt: "AI Cartoon Studio character selection screen",
    description:
      "A choice-based AI cartoon creation app where users pick a hero, adventure, friend, and problem to generate a cartoon story experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenAI",
      "Vercel",
    ],
  },
  {
    name: "AI Council",
    url: "https://getaicouncil.app",
    description:
      "AI-powered project planning and execution platform with specialized AI advisors, project memory, authentication, and subscription billing.",
    tech: ["Next.js", "Supabase", "OpenAI API", "Stripe", "Vercel"],
  },
  {
    name: "Hanke AI Diagnostic Assistant",
    url: "https://hankeai.vercel.app",
    description:
      "AI-assisted diagnostic web application for industrial crimp machine troubleshooting and technician support workflows.",
    tech: [
      "Next.js",
      "React",
      "OpenAI API",
      "Vercel",
      "Power Apps",
      "Microsoft Teams",
    ],
  },
  {
    name: "432Hz Resonance",
    description:
      "Cloud-based audio processing application that converts audio files from 440Hz to 432Hz.",
    tech: [
      "FlutterFlow",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Google Cloud Run",
      "FFmpeg",
    ],
  },
];

const skillGroups = [
  {
    title: "AI & SaaS",
    skills: [
      "AI application design",
      "OpenAI API",
      "SaaS platforms",
      "Authentication",
      "Subscription billing",
      "Workflow automation",
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      "Next.js",
      "Supabase",
      "Firebase",
      "Firestore",
      "Vercel",
      "Google Cloud Run",
    ],
  },
  {
    title: "Manufacturing Technology",
    skills: [
      "Industrial troubleshooting",
      "Crimp machine diagnostics",
      "Technician support tools",
      "Process improvement",
      "Wire prep operations",
      "Practical automation",
    ],
  },
  {
    title: "Tools",
    skills: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Power Apps",
      "Microsoft Teams",
      "FFmpeg",
    ],
  },
];

const githubUrl = "https://github.com/chip37";
const linkedInUrl = "https://www.linkedin.com/in/chip-burlingham-88450540b";
const resumeUrl = "/resume.pdf";
const email = "burlinghamchip@gmail.com";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 text-sm text-slate-300 sm:px-8">
        <a className="font-semibold tracking-wide text-white" href="#top">
          Chip Burlingham
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          <a className="transition hover:text-teal-200" href="#about">
            About
          </a>
          <a className="transition hover:text-teal-200" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-teal-200" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-teal-200" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
            Developer Portfolio
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Chip Burlingham
          </h1>
          <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            Software Developer building AI-powered business applications
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Manufacturing leader and software developer focused on AI
            applications, SaaS platforms, industrial troubleshooting tools, and
            practical automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-md bg-teal-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200 hover:text-teal-100"
              href={githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200 hover:text-teal-100"
              href={linkedInUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200 hover:text-teal-100"
              href={`mailto:${email}`}
            >
              Email
            </a>
            <a
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200 hover:text-teal-100"
              href={resumeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/25">
          <div className="border-b border-white/10 pb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
              Focus
            </p>
            <p className="mt-3 text-2xl font-bold text-white">
              AI tools for practical operations
            </p>
          </div>
          <div className="grid gap-4 py-5">
            {[
              "Manufacturing-informed software",
              "AI-assisted diagnostics",
              "SaaS product development",
              "Automation for real workflows",
            ].map((item) => (
              <div
                className="flex items-center gap-3 rounded-md bg-slate-950/45 p-4 text-slate-200"
                key={item}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
            Built around the overlap of shop-floor experience, technical
            troubleshooting, and production-ready web applications.
          </p>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
            About
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Manufacturing experience turned into useful software.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Chip is a Line Lead in the Wire Prep Department at Molex, a Navy
              veteran, and a software developer currently completing a BS in
              Computer Science at WGU. His work combines hands-on manufacturing
              expertise with software development, focusing on AI applications,
              industrial troubleshooting, SaaS platforms, and deployed projects
              that support real operational workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
            Featured Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Deployed tools across AI, SaaS, diagnostics, and cloud workflows.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              className="flex min-h-[25rem] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/15"
              key={project.name}
            >
              {project.image ? (
                <img
                  alt={project.imageAlt ?? `${project.name} screenshot`}
                  className="mb-5 aspect-video w-full rounded-md border border-white/10 object-cover"
                  src={project.image}
                />
              ) : null}
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {project.name}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    className="rounded-md border border-white/10 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-slate-200"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-8">
                {project.url ? (
                  <a
                    className="inline-flex rounded-md bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-teal-200"
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.buttonLabel ?? "Live Project"}
                  </a>
                ) : (
                  <span className="inline-flex rounded-md border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-400">
                    Live Project
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Practical technical range for building and shipping.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
                key={group.title}
              >
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      className="rounded-md bg-slate-950/50 px-3 py-2 text-sm text-slate-200"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Interested in AI-powered business applications, manufacturing
            technology, or practical automation projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-md bg-teal-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200"
              href={githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200 hover:text-teal-100"
              href={linkedInUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200 hover:text-teal-100"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
