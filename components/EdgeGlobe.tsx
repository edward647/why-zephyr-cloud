export default function EdgeGlobe() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-card via-primary/10 to-card p-12">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-20" />

      {/* Globe circle */}
      <div className="relative h-80 w-80">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          {/* Globe outline */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground/30"
          />

          {/* Continents (simplified) */}
          <g className="text-muted-foreground/50" fill="currentColor">
            {/* North America */}
            <path d="M80,120 Q90,100 110,95 L130,100 L140,120 L135,140 L120,150 L100,145 Z" />
            {/* Europe */}
            <path d="M220,100 L240,95 L250,105 L245,120 L230,125 L220,115 Z" />
            {/* Asia */}
            <path d="M280,110 L310,105 L330,120 L325,145 L310,150 L290,140 L285,125 Z" />
            {/* South America */}
            <path d="M130,200 L145,190 L155,205 L150,240 L135,250 L125,235 Z" />
            {/* Africa */}
            <path d="M210,180 L235,175 L245,200 L240,230 L220,240 L205,220 Z" />
            {/* Australia */}
            <path d="M310,230 L330,225 L340,240 L330,255 L315,250 Z" />
          </g>

          {/* Connection arcs (purple) */}
          <g className="text-primary" stroke="currentColor" strokeWidth="2" fill="none">
            {/* Arc 1: North America to Europe */}
            <path
              d="M 120 130 Q 170 80 230 110"
              className="animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            {/* Arc 2: Europe to Asia */}
            <path
              d="M 240 110 Q 270 90 300 120"
              className="animate-pulse"
              style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
            />
            {/* Arc 3: North America to Asia (over the top) */}
            <path
              d="M 130 120 Q 200 50 300 115"
              className="animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            {/* Arc 4: Europe to Africa */}
            <path
              d="M 230 120 Q 225 150 220 200"
              className="animate-pulse"
              style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}
            />
            {/* Arc 5: Asia to Australia */}
            <path
              d="M 310 140 Q 320 180 320 235"
              className="animate-pulse"
              style={{ animationDuration: "3s", animationDelay: "0.8s" }}
            />
          </g>

          {/* Connection nodes */}
          <g className="text-primary" fill="currentColor">
            <circle cx="120" cy="130" r="4" className="animate-pulse" />
            <circle cx="230" cy="110" r="4" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
            <circle cx="300" cy="120" r="4" className="animate-pulse" style={{ animationDelay: "1s" }} />
            <circle cx="220" cy="200" r="4" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
            <circle cx="320" cy="235" r="4" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}
