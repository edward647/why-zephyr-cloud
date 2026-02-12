import { RotateCcw } from "lucide-react";

export default function RollbackMockup() {
  return (
    <div className="rounded-xl border border-border bg-gradient-to-br from-card via-primary/5 to-card p-12">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Rollback icon with pulsing animation */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
          <div className="relative rounded-full bg-primary/10 p-8">
            <RotateCcw className="h-16 w-16 text-primary" />
          </div>
        </div>

        <div>
          <p className="text-xl font-bold leading-relaxed">
            Rollback in seconds,
          </p>
          <p className="text-xl font-bold leading-relaxed">
            no rebuild needed.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
