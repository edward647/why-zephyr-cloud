export default function DashboardMockup() {
  return (
    <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 via-card to-card p-8">
      {/* Browser chrome */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/50" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
        <div className="h-3 w-3 rounded-full bg-green-500/50" />
      </div>

      {/* Dashboard grid */}
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-16 rounded-lg border border-border bg-secondary/50 backdrop-blur-sm"
            style={{
              animation: `fadeIn 0.5s ease-out ${i * 0.05}s both`,
            }}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-primary">
        Dashboard UI Preview
      </p>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
