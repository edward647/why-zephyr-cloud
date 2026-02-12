export default function HonoLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <rect width="200" height="200" fill="#FF6600" rx="20"/>
      <g transform="translate(50, 60)">
        <path d="M0 0 L0 80 L20 80 L20 45 L40 45 L40 80 L60 80 L60 45 L80 45 L80 80 L100 80 L100 0 L80 0 L80 30 L60 30 L60 0 L40 0 L40 30 L20 30 L20 0 Z" fill="white"/>
      </g>
      <circle cx="100" cy="40" r="8" fill="white"/>
    </svg>
  );
}
