import {
  CircleCheckBig,
  Terminal,
  Users,
  ArrowRight,
  Globe,
  TrendingDown,
  Copy,
  Clock5,
} from "lucide-react";
import ZephyrLogo from "./logos/ZephyrLogo";
import WebpackLogo from "./logos/WebpackLogo";
import ViteLogo from "./logos/ViteLogo";
import RspackLogo from "./logos/RspackLogo";
import HonoLogo from "./logos/HonoLogo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="mb-24">
          <h1 className="mb-8 text-6xl font-medium leading-tight tracking-tight lg:text-8xl">
            Why choose Zephyr Cloud?
          </h1>
          <p className="text-2xl font-medium leading-relaxed lg:text-3xl">
            Ship Faster.{" "}
            <span className="text-muted-foreground">Reduce Release Risk.</span>{" "}
            Scale Without Coordination Overhead.
          </p>
        </div>

        {/* Two Column Section: Problem & Solution */}
        <div className="mb-32 grid gap-20 lg:grid-cols-2">
          {/* Left: The Problem */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium leading-none tracking-tight lg:text-3xl">
              The Problem Managers Actually Face
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Engineering teams don't struggle with building software. They
              struggle with{" "}
              <span className="font-normal text-foreground">
                release coordination, rollback risk, and operational friction
              </span>{" "}
              as systems and teams scale.
            </p>

            <div className="space-y-2 pt-0">
              <p className="flex items-center gap-2 text-base font-medium text-foreground">
                <TrendingDown className="h-5 w-5 text-primary" /> Typical symptoms:
              </p>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Deployments blocked by cross-team timing
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Risky or slow rollbacks
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Growing CI/CD and tooling complexity
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Increasing time spent managing releases instead of shipping
                  value
                </li>
              </ul>
            </div>

            <p className="pt-2 text-base leading-relaxed">
              Velocity isn&apos;t the issue. Dependency is.
            </p>

            <img
              src="/Heatmap.svg"
              alt="Deployment velocity and dependency visualization"
              className="w-full h-auto"
            />

            <p className="pt-2 text-base leading-relaxed">
              Zephyr Cloud enhances and accelerates the SDLC
            </p>
            <a
              href="https://docs.zephyr-cloud.io/?utm_source=chatgpt.com"
              className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: What Zephyr Changes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium leading-none tracking-tight lg:text-3xl">
              What Zephyr Cloud Changes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Zephyr Cloud is a{" "}
              <span className="font-normal text-foreground">
                managed deployment and release control platform
              </span>{" "}
              that removes the need for tight cross-team coordination—without
              changing how teams build.
            </p>

            <div className="space-y-2 pt-0">
              <p className="flex items-center gap-2 text-base font-medium text-foreground">
                <CircleCheckBig className="h-5 w-5 text-primary" /> With Zephyr:
              </p>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Teams deploy independently
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Releases are incremental, not all-or-nothing
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Rollback and roll-forward are instant
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Deployment logic is centralized and observable
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Scaling teams reduces friction instead of increasing it
                </li>
              </ul>
            </div>

            <p className="pt-2 text-base leading-relaxed text-muted-foreground">
              Zephyr acts as the{" "}
              <span className="font-semibold text-foreground">
                deployment platform
              </span>
              , not just middleware between the client and a CDN.
            </p>

            <img
              src="/What-zephyr-cloud-changes.svg"
              alt="What Zephyr Cloud changes diagram"
              className="w-full h-auto"
            />

            <p className="pt-2 text-base leading-relaxed text-muted-foreground">
              Zephyr integrates with popular bundlers Webpack, Rspack, Vite to
              provide global distribution of web applications.
            </p>
            <a
              href="https://docs.zephyr-cloud.io/reference/why-zephyr-cloud"
              className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Edge Deployment Feature Box */}
        <div className="relative mb-32 overflow-hidden rounded-md border border-white/20 p-8 lg:p-12">
          <h2 className="mb-4 text-2xl font-medium leading-none tracking-tight lg:text-3xl">
            Why Edge Deployment Matters
            <span className="block text-2xl font-normal leading-none text-foreground lg:text-3xl">
              (Latency, Performance, User Experience)
            </span>
          </h2>

          <div className="mt-8 grid gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Modern user experiences are increasingly sensitive to latency.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Every additional network hop adds delay, increases failure
                surface area, and degrades perceived performance.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Zephyr Cloud deploys applications{" "}
                <span className="text-foreground">
                  directly to the edge
                </span>
                , ensuring content and application logic are served as close to
                users as possible.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                By deploying at the edge, Zephyr removes the performance penalty
                typically introduced by centralized deployment models—without
                requiring teams to redesign their applications.
              </p>

              <div className="space-y-2 pt-0">
                <p className="flex items-center gap-2 text-base font-medium text-foreground">
                  <TrendingDown className="h-5 w-5 text-primary" /> Typical symptoms:
                </p>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span><span className="text-foreground">Ultra-low latency</span> by reducing round trips to centralized servers</span>
                  </li>
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Faster initial load times and interactions
                  </li>
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    More consistent performance across geographies
                  </li>
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Improved reliability by distributing execution closer to
                    users
                  </li>
                </ul>
              </div>

            </div>

            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                Edge deployment is not an optimization layer. It is the default
                execution model.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Globe positioned at bottom right */}
          <div className="absolute bottom-0 -right-8 w-[49%]">
            <img
              src="/globe.svg"
              alt="Global edge deployment network"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Command Block & Why Not Build In-House - Two Column Layout */}
        <div className="mb-32 grid gap-20 lg:grid-cols-2 lg:items-start">
          {/* Left Column - Command and Description */}
          <div className="space-y-4">
            <div
              className="rounded-lg border border-white/10 bg-[#171717] p-4 space-y-4 cursor-pointer hover:border-white/20 transition-colors"
              onClick={() => {
                navigator.clipboard.writeText('npx create-zephyr-apps@latest');
              }}
            >
              <code className="flex items-center gap-2 font-mono text-base pointer-events-none">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">$</span> npx
                create-zephyr-apps@latest
              </code>

              <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground pointer-events-none">
                <Copy className="h-4 w-4" />
                click to copy
              </div>
            </div>

            <p className="text-base leading-relaxed">
              <span className="text-muted-foreground">Zephyr provides</span>{" "}
              <span className="font-normal text-foreground">
                production-ready deployment orchestration out of the box
              </span>{" "}
              <span className="text-muted-foreground">without adding internal platform overhead.</span>
            </p>

            <a
              href="https://docs.zephyr-cloud.io/reference/architecture?utm_source=chatgpt.com"
              className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Column - Why Not Build In-House */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium leading-none tracking-tight lg:text-3xl">
              Why Not Build This In-House?
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Internal deployment systems become a permanent platform tax.
            </p>

            <div className="space-y-2 pt-0">
              <p className="flex items-center gap-2 text-base font-medium text-foreground">
                <TrendingDown className="h-5 w-5 text-primary" /> Those systems can:
              </p>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Accumulate edge cases over time
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Require ongoing ownership and maintenance
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Compete with core product priorities
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Rarely reach the maturity needed for safe, fast recovery
                </li>
              </ul>
            </div>

            <a
              href="https://docs.zephyr-cloud.io/reference/why-zephyr-cloud"
              className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* PAGE 2 CONTENT */}

        {/* Release Management & How Teams Use */}
        <div className="relative mb-32 -mx-6 px-6 lg:-mx-12 lg:px-12">
          <div className="grid gap-20 pt-8 lg:grid-cols-2">
          {/* Release Management */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium leading-none tracking-tight lg:text-3xl">
              Release Management & Risk
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Zephyr does not replace release governance — it significantly
              reduces operational load.
            </p>

            <div className="space-y-2 pt-0">
              <p className="flex items-center gap-2 text-base font-medium text-foreground">
                <TrendingDown className="h-5 w-5 text-primary" /> Typical symptoms:
              </p>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Every deployment automatically creates a version
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Deployments can be <span className="font-normal text-foreground">tagged and promoted across environments</span>
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Rollback and roll-forward are traffic switches, not rebuilds
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Failed releases are isolated instead of cascading
                </li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              Instant rollback is achieved by switching traffic to a previously
              deployed version already live at the edge.
            </p>

            <div className="mt-8 flex items-center gap-8">
              <img
                src="/Release-mangement-risk.svg"
                alt="Release management and risk visualization"
                className="mt-8 w-[55%] h-auto"
              />
              <div className="mt-12 flex flex-col gap-4">
                <p className="text-base leading-relaxed">
                  Rollback in seconds, no rebuild needed.
                </p>
                <a
                  href="https://docs.zephyr-cloud.io/reference/architecture?utm_source=chatgpt.com"
                  className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* How Teams Use Zephyr */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium leading-none tracking-tight lg:text-3xl">
              How Teams Use Zephyr
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-base font-medium leading-tight">
                  <Terminal className="h-5 w-5 text-primary" /> Engineering
                  teams
                </h3>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    CLI-first workflows
                  </li>
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Integrates with existing CI/CD pipelines
                  </li>
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    No framework or bundler lock-in (supports Hono and more)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 flex items-center gap-2 text-base font-medium leading-tight">
                  <Users className="h-5 w-5 text-primary" /> Managers & IT
                  leaders
                </h3>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Central UI dashboard for visibility into deployments,
                    versions, environments, and rollback readiness
                  </li>
                  <li className="flex items-center gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Clear auditability without direct pipeline access
                  </li>
                </ul>
              </div>
            </div>

            <p className="pt-2 text-base leading-relaxed">
              No new approval chains. No additional release meetings.
            </p>

            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
              <div className="mt-12">
                <img
                  src="/How-teams-use-zephyr.svg"
                  alt="Dashboard UI showing how teams use Zephyr"
                  className="w-auto h-auto max-w-[221px]"
                />
              </div>

              <div className="space-y-4 mt-12">
                <p className="text-base text-muted-foreground">
                  Zephyr provides both{" "}
                  <span className="font-normal text-foreground">
                    CLI and UI workflows
                  </span>{" "}
                  so teams can work how they want.
                </p>
                <a
                  href="https://docs.zephyr-cloud.io/reference/architecture?utm_source=chatgpt.com"
                  className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Enterprise Ready */}
        <div className="mb-32 grid gap-20 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium leading-none tracking-tight lg:text-3xl">
              Enterprise-Ready
              <span className="block">by Design</span>
            </h2>

            <div className="space-y-2 pt-0">
              <p className="flex items-center gap-2 text-base font-medium text-foreground">
                <TrendingDown className="h-5 w-5 text-primary" /> Typical symptoms:
              </p>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Regional hosting strategies (EU, US, APAC) supported via
                  bring-your-own cloud and CDN configuration
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Akamai CDN fully supported and configurable
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Cloud-agnostic architecture
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Poly-cloud deployment supported, enabling simultaneous
                  deployment across providers
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Roadmap for on-prem and hybrid environments
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Flat, organization-level pricing above ~20 users
                </li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              A user is someone actively deploying or managing via Zephyr—not
              everyone with repository access.
            </p>

            <p className="text-base leading-relaxed">
              <span className="text-muted-foreground">Primary cost savings come from</span>{" "}
              <span className="font-normal text-foreground">
                reduced engineering overhead,
                faster feedback cycles, and lower release risk
              </span>{" "}
              <span className="text-muted-foreground">—not raw CDN cost reduction alone.</span>
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Cloudflare", status: "Available", logo: "/Cloudflare.svg" },
                { name: "Fastly", status: "Available", logo: "/Fastly.svg" },
                { name: "Netlify", status: "Available", logo: "/Netlify.svg" },
                { name: "Akamai", status: "Available", logo: "/Akamai.svg" },
                { name: "AWS", status: "Available", logo: "/AWS.svg" },
                { name: "Vercel", status: "Coming soon", logo: "/vercel.svg" },
              ].map((provider) => (
                <div
                  key={provider.name}
                  className="flex max-w-[503px] items-center justify-center rounded-lg border border-white/10 bg-card p-6"
                >
                  <div className="flex min-h-[140px] w-[180px] flex-col items-center justify-center gap-4 rounded-md p-6">
                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className={provider.name === "Vercel" ? "h-5 w-auto" : "h-8 w-auto"}
                    />
                    {provider.status === "Available" ? (
                      <div className="flex items-center gap-1 rounded-full bg-[#022C22] px-3 py-1 text-xs font-medium text-[#34D399]">
                        <CircleCheckBig className="h-3 w-3" />
                        Available
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        <Clock5 className="h-3 w-3" /> {provider.status}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm">
              <span className="font-semibold text-foreground">BYOC:</span> Bring
              your infrastructure, keep control.{" "}
              <a
                href="https://docs.zephyr-cloud.io/cloud/akamai"
                className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </p>
          </div>
        </div>

        {/* The Manager Outcome */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-background via-primary/5 to-background p-16 lg:p-24">
          <div className="relative space-y-10">
            <img src="/Increase.svg" alt="Performance increase visualization" className="absolute right-0 top-24 w-[461px] h-auto" />
            <h2 className="text-2xl font-medium leading-none tracking-tight lg:text-3xl">
              The Manager
              <span className="block">Outcome</span>
            </h2>

            <div className="space-y-2">
              <p className="flex items-center gap-2 text-base font-medium text-foreground">
                <CircleCheckBig className="h-5 w-5 text-primary" /> Managers gain:
              </p>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Faster, more predictable releases
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Lower rollback and outage risk
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Less coordination overhead
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Teams that scale without slowing delivery
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Reduced long-term operational cost vs. custom tooling
                </li>
              </ul>
            </div>

            <div className="space-y-0 pt-4">
              <p className="text-base leading-relaxed">
                Zephyr doesn&apos;t change how teams build.
              </p>
              <p className="text-base leading-relaxed">
                It removes structural friction from how they ship.
              </p>
            </div>

            <div className="flex items-end justify-between -mt-4">
              <a
                href="https://docs.zephyr-cloud.io/reference/why-zephyr-cloud"
                className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>

              <p className="text-right text-base leading-relaxed text-muted-foreground">
                Purpose-built for enterprise release velocity
                <br />
                and risk reduction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
