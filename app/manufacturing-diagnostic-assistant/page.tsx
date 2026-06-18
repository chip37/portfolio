import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Diagnostic Assistant | Chip Burlingham",
  description:
    "Case study for an AI-powered manufacturing diagnostic assistant built with Microsoft Copilot Studio, Power Automate, SharePoint, and Microsoft Teams.",
};

const technologies = [
  "Microsoft Copilot Studio",
  "Power Automate",
  "SharePoint",
  "Microsoft Teams",
];

const features = [
  "Conversational troubleshooting assistant",
  "SharePoint knowledge integration",
  "Power Automate workflow integration",
  "Repair history capture",
  "Similar repair lookup",
  "Microsoft Teams deployment",
];

const architecture = [
  "Technician",
  "Microsoft Teams",
  "Copilot Studio Agent",
  "Power Automate Flow",
  "SharePoint Lists / Knowledge Sources",
  "Agent Response",
];

const screenshots: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/manufacturing-diagnostic-assistant/copilot-studio-tools.png",
    alt: "Sanitized Copilot Studio tools configuration screen",
    caption:
      "Copilot Studio tools view showing agent-triggered workflow integrations with internal names redacted.",
  },
  {
    src: "/images/manufacturing-diagnostic-assistant/teams-deployment.png",
    alt: "Sanitized Microsoft Teams assistant conversation",
    caption:
      "Microsoft Teams deployment view showing the assistant inside the technician chat workflow with identifying details removed.",
  },
  {
    src: "/images/manufacturing-diagnostic-assistant/power-automate-flow.png",
    alt: "Power Automate flow steps for the diagnostic assistant",
    caption:
      "Power Automate flow connecting agent requests to SharePoint lookup, compose, and response steps.",
  },
];

export default function ManufacturingDiagnosticAssistantPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 text-sm text-slate-300 sm:px-8">
        <Link className="font-semibold tracking-wide text-white" href="/">
          Chip Burlingham
        </Link>
        <Link className="transition hover:text-teal-200" href="/#projects">
          Projects
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
          Case Study
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
          Manufacturing Diagnostic Assistant
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Designed and deployed an AI-powered diagnostic assistant that helps
          technicians retrieve troubleshooting information and capture repair
          knowledge through natural language conversations.
        </p>
      </section>

      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-bold text-white">Overview</h2>
          <p className="text-lg leading-8 text-slate-300">
            The assistant brings troubleshooting guidance into the technician
            workflow, making it easier to ask natural language questions, find
            relevant repair knowledge, and document what resolved the issue for
            future lookup.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-white">Technologies</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              className="rounded-md border border-white/10 bg-slate-950/45 px-3 py-2 text-sm font-semibold text-slate-200"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-slate-200"
                key={feature}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-white">Architecture</h2>
        <div className="mt-8 grid gap-3 lg:grid-cols-6">
          {architecture.map((step, index) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              key={step}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                Step {index + 1}
              </p>
              <p className="mt-3 font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-base leading-7 text-slate-300">
          Technician → Microsoft Teams → Copilot Studio Agent → Power Automate
          Flow → SharePoint Lists / Knowledge Sources → Agent Response
        </p>
      </section>

      <section className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-3xl font-bold text-white">Screenshots</h2>
          {screenshots.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {screenshots.map((screenshot) => (
                <figure
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                  key={screenshot.src}
                >
                  <img
                    alt={screenshot.alt}
                    className="aspect-video w-full rounded-md bg-white object-contain"
                    src={screenshot.src}
                  />
                  <figcaption className="mt-3 text-sm leading-6 text-slate-300">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Public screenshots will be added after employer-specific names,
              repair data, machine identifiers, internal documents, and
              proprietary information are removed or obscured.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
