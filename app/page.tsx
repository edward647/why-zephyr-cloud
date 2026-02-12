import {
  CheckCircle2,
  Terminal,
  Users,
  ArrowRight,
} from "lucide-react";
import ZephyrLogo from "@/components/logos/ZephyrLogo";
import WebpackLogo from "@/components/logos/WebpackLogo";
import ViteLogo from "@/components/logos/ViteLogo";
import RspackLogo from "@/components/logos/RspackLogo";
import HonoLogo from "@/components/logos/HonoLogo";
import CloudflareLogo from "@/components/logos/CloudflareLogo";
import FastlyLogo from "@/components/logos/FastlyLogo";
import AkamaiLogo from "@/components/logos/AkamaiLogo";
import AWSLogo from "@/components/logos/AWSLogo";
import VercelLogo from "@/components/logos/VercelLogo";
import VelocityChart from "@/components/VelocityChart";
import EdgeGlobe from "@/components/EdgeGlobe";
import DashboardMockup from "@/components/DashboardMockup";
import RollbackMockup from "@/components/RollbackMockup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        {/* Logo */}
        <div className="mb-12">
          <ZephyrLogo className="h-12 w-12 text-primary" />
        </div>

        {/* Header */}
        <div className="mb-24">
          <h1 className="mb-8 text-6xl font-bold leading-tight tracking-tight lg:text-8xl">
            Why choose Zephyr Cloud?
          </h1>
          <p className="text-2xl leading-relaxed lg:text-3xl">
            <span className="font-bold text-foreground">Ship Faster.</span>{" "}
            <span className="text-muted-foreground">Reduce Release Risk.</span>{" "}
            <span className="font-bold text-foreground">
              Scale Without Coordination Overhead.
            </span>
          </p>
        </div>

        {/* Two Column Section: Problem & Solution */}
        <div className="mb-32 grid gap-20 lg:grid-cols-2">
          {/* Left: The Problem */}
          <div className="space-y-7">
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              The Problem Managers Actually Face
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Engineering teams don't struggle with building software. They
              struggle with{" "}
              <span className="font-semibold text-foreground">
                release coordination, rollback risk, and operational friction
              </span>{" "}
              as systems and teams scale.
            </p>

            <div className="space-y-5 pt-2">
              <p className="flex items-center gap-2 text-base font-medium text-primary">
                <CheckCircle2 className="h-5 w-5" /> Typical symptoms:
              </p>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Deployments blocked by cross-team timing
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Risky or slow rollbacks
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Growing CI/CD and tooling complexity
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Increasing time spent managing releases instead of shipping
                  value
                </li>
              </ul>
            </div>

            <p className="pt-2 text-xl font-bold leading-relaxed">
              Velocity isn&apos;t the issue. Dependency is.
            </p>

            <VelocityChart />

            <p className="pt-2 text-base leading-relaxed">
              Zephyr Cloud enhances and accelerates the SDLC
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: What Zephyr Changes */}
          <div className="space-y-7">
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              What Zephyr Cloud Changes
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Zephyr Cloud is a{" "}
              <span className="font-semibold text-foreground">
                managed deployment and release control platform
              </span>{" "}
              that removes the need for tight cross-team coordination—without
              changing how teams build.
            </p>

            <div className="space-y-5 pt-2">
              <p className="flex items-center gap-2 text-base font-medium text-primary">
                <CheckCircle2 className="h-5 w-5" /> With Zephyr:
              </p>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Teams deploy independently
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Releases are incremental, not all-or-nothing
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Rollback and roll-forward are instant
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Deployment logic is centralized and observable
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Scaling teams reduces friction instead of increasing it
                </li>
              </ul>
            </div>

            <p className="pt-2 text-lg leading-relaxed text-muted-foreground">
              Zephyr acts as the{" "}
              <span className="font-semibold text-foreground">
                deployment platform
              </span>
              , not just middleware between the client and a CDN.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                <ViteLogo className="h-10 w-10" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                <RspackLogo className="h-10 w-10" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                <WebpackLogo className="h-10 w-10" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                <HonoLogo className="h-10 w-10" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 p-2">
                <Globe className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>

            <p className="pt-2 text-base leading-relaxed text-muted-foreground">
              Zephyr integrates with popular bundlers Webpack, Rspack, Vite to
              provide global distribution of web applications.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Edge Deployment Feature Box */}
        <div className="mb-32 rounded-2xl border border-border bg-card p-12 lg:p-20">
          <h2 className="mb-2 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Why Edge Deployment Matters
            <span className="mt-2 block text-2xl font-normal leading-relaxed text-muted-foreground lg:text-3xl">
              (Latency, Performance, User Experience)
            </span>
          </h2>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <div className="space-y-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Modern user experiences are increasingly sensitive to latency.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every additional network hop adds delay, increases failure
                surface area, and degrades perceived performance.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Zephyr Cloud deploys applications{" "}
                <span className="font-semibold text-foreground">
                  directly to the edge
                </span>
                , ensuring content and application logic are served as close to
                users as possible.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                By deploying at the edge, Zephyr removes the performance penalty
                typically introduced by centralized deployment models—without
                requiring teams to redesign their applications.
              </p>

              <div className="space-y-5 pt-4">
                <p className="flex items-center gap-2 text-base font-medium text-primary">
                  <CheckCircle2 className="h-5 w-5" /> Typical symptoms:
                </p>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Ultra-low latency by reducing round trips to centralized
                    servers
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Faster initial load times and interactions
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    More consistent performance across geographies
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Improved reliability by distributing execution closer to
                    users
                  </li>
                </ul>
              </div>

              <p className="pt-4 text-xl font-bold leading-relaxed">
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

            <EdgeGlobe />
          </div>
        </div>

        {/* Command Block */}
        <div className="mb-16 rounded-lg border border-border bg-card p-8">
          <div className="flex items-center justify-between">
            <code className="flex items-center gap-2 font-mono text-base">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">$</span> npx
              create-zephyr-apps@latest
            </code>
            <button className="rounded-md border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground hover:bg-secondary/80">
              press to copy
            </button>
          </div>
        </div>

        <p className="mb-6 text-center text-xl leading-relaxed">
          Zephyr provides{" "}
          <span className="font-semibold text-foreground">
            production-ready deployment orchestration out of the box
          </span>{" "}
          without adding internal platform overhead.
        </p>
        <div className="mb-32 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Why Not Build In-House */}
        <div className="mb-32 space-y-7">
          <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Why Not Build This In-House?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Internal deployment systems become a permanent platform tax.
          </p>

          <div className="space-y-5 pt-2">
            <p className="flex items-center gap-2 text-base font-medium text-primary">
              <CheckCircle2 className="h-5 w-5" /> Those systems can:
            </p>
            <ul className="space-y-4 text-base text-muted-foreground">
              <li className="flex gap-3 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                Accumulate edge cases over time
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                Require ongoing ownership and maintenance
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                Compete with core product priorities
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                Rarely reach the maturity needed for safe, fast recovery
              </li>
            </ul>
          </div>
        </div>

        {/* PAGE 2 CONTENT */}

        {/* Release Management & How Teams Use */}
        <div className="mb-32 grid gap-20 lg:grid-cols-2">
          {/* Release Management */}
          <div className="space-y-7">
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Release Management & Risk
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Zephyr does not replace release governance — it significantly
              reduces operational load.
            </p>

            <div className="space-y-5 pt-2">
              <p className="flex items-center gap-2 text-base font-medium text-primary">
                <CheckCircle2 className="h-5 w-5" /> Typical symptoms:
              </p>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Every deployment automatically creates a version
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Deployments can be{" "}
                  <span className="font-semibold text-foreground">
                    tagged and promoted across environments
                  </span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Rollback and roll-forward are traffic switches, not rebuilds
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Failed releases are isolated instead of cascading
                </li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              Instant rollback is achieved by switching traffic to a previously
              deployed version already live at the edge.
            </p>

            <RollbackMockup />
          </div>

          {/* How Teams Use Zephyr */}
          <div className="space-y-7">
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              How Teams Use Zephyr
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-semibold leading-tight">
                  <Terminal className="h-6 w-6 text-primary" /> Engineering
                  teams
                </h3>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    CLI-first workflows
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Integrates with existing CI/CD pipelines
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    No framework or bundler lock-in (supports Hono and more)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-semibold leading-tight">
                  <Users className="h-6 w-6 text-primary" /> Managers & IT
                  leaders
                </h3>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Central UI dashboard for visibility into deployments,
                    versions, environments, and rollback readiness
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Clear auditability without direct pipeline access
                  </li>
                </ul>
              </div>
            </div>

            <p className="pt-2 text-xl font-bold leading-relaxed">
              No new approval chains. No additional release meetings.
            </p>

            <DashboardMockup />

            <p className="text-sm text-muted-foreground">
              Zephyr provides both{" "}
              <span className="font-semibold text-foreground">
                CLI and UI workflows
              </span>{" "}
              so teams can work how they want.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Enterprise Ready */}
        <div className="mb-32 grid gap-20 lg:grid-cols-2">
          <div className="space-y-7">
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Enterprise-Ready
              <span className="block">by Design</span>
            </h2>

            <div className="space-y-5 pt-2">
              <p className="flex items-center gap-2 text-base font-medium text-primary">
                <CheckCircle2 className="h-5 w-5" /> Typical symptoms:
              </p>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Regional hosting strategies (EU, US, APAC) supported via
                  bring-your-own cloud and CDN configuration
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Akamai CDN fully supported and configurable
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Cloud-agnostic architecture
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Poly-cloud deployment supported, enabling simultaneous
                  deployment across providers
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Roadmap for on-prem and hybrid environments
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Flat, organization-level pricing above ~20 users
                </li>
              </ul>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              A user is someone actively deploying or managing via Zephyr—not
              everyone with repository access.
            </p>

            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-foreground">
                Primary cost savings come from reduced engineering overhead,
                faster feedback cycles, and lower release risk
              </span>
              —not raw CDN cost reduction alone.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Cloudflare", status: "Available", Logo: CloudflareLogo },
                { name: "Fastly", status: "Available", Logo: FastlyLogo },
                { name: "fastly", status: "Available", Logo: FastlyLogo },
                { name: "Akamai", status: "Available", Logo: AkamaiLogo },
                { name: "AWS", status: "Available", Logo: AWSLogo },
                { name: "Vercel", status: "Coming soon", Logo: VercelLogo },
              ].map((provider) => (
                <div
                  key={provider.name}
                  className="relative flex min-h-[120px] flex-col items-center justify-center rounded-lg border border-border bg-card p-6"
                >
                  <provider.Logo className="h-8 w-auto" />
                  <div
                    className={`absolute bottom-4 flex items-center gap-1 text-xs ${
                      provider.status === "Available"
                        ? "text-green-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    {provider.status === "Available" ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <span>⏱</span>
                    )}{" "}
                    {provider.status}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm">
              <span className="font-semibold text-foreground">BYOC:</span> Bring
              your infrastructure, keep control.{" "}
              <a
                href="#"
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </p>
          </div>
        </div>

        {/* The Manager Outcome */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background via-primary/5 to-background p-16 lg:p-24">
          <div className="absolute right-16 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative space-y-10">
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              The Manager
              <span className="block">Outcome</span>
            </h2>

            <div className="space-y-6">
              <p className="flex items-center gap-2 text-base font-medium text-primary">
                <CheckCircle2 className="h-5 w-5" /> Managers gain:
              </p>
              <ul className="space-y-5 text-xl text-muted-foreground">
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Faster, more predictable releases
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Lower rollback and outage risk
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Less coordination overhead
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Teams that scale without slowing delivery
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  Reduced long-term operational cost vs. custom tooling
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-2xl font-bold leading-relaxed">
                Zephyr doesn&apos;t change how teams build.
              </p>
              <p className="text-2xl font-bold leading-relaxed">
                It removes structural friction from how they ship.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>

            <p className="pt-12 text-right text-base leading-relaxed text-muted-foreground">
              Purpose-built for enterprise release velocity
              <br />
              and risk reduction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
