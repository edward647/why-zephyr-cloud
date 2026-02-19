"use client";

import { useMemo } from "react";

export default function VelocityChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

  // Generate a deterministic pattern for the chart
  const chartData = useMemo(() => {
    return months.map((month, monthIndex) => {
      const days = Array.from({ length: 15 }, (_, dayIndex) => {
        // Create a pattern that looks realistic with more activity mid-year
        const seed = monthIndex * 15 + dayIndex;
        const value = Math.sin(seed * 0.5) * Math.cos(monthIndex * 0.3);

        if (value > 0.6) return "high"; // Green/Primary
        if (value > 0.2) return "medium"; // Red/Destructive
        if (value > -0.3) return "low"; // Muted
        return "none"; // Background
      });
      return { month, days };
    });
  }, []);

  return (
    <div className="rounded-lg border border-border bg-card p-8">
      <div className="flex gap-3">
        {chartData.map(({ month, days }, monthIndex) => (
          <div key={monthIndex} className="flex flex-col gap-1">
            <div className="mb-2 text-xs text-muted-foreground">{month}</div>
            {days.map((intensity, dayIndex) => (
              <div
                key={dayIndex}
                className={`h-2 w-2 rounded-sm ${
                  intensity === "high"
                    ? "bg-primary"
                    : intensity === "medium"
                    ? "bg-destructive"
                    : intensity === "low"
                    ? "bg-muted-foreground/40"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
