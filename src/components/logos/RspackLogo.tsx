export default function RspackLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <rect width="200" height="200" fill="#1E1E1E" rx="20"/>
      <g transform="translate(40, 50)">
        <path d="M0 0 L60 0 C80 0 95 15 95 35 C95 50 85 60 70 62 L100 100 L70 100 L42 64 L30 64 L30 100 L0 100 Z M30 25 L30 45 L55 45 C62 45 65 42 65 35 C65 28 62 25 55 25 Z" fill="#FFD700"/>
      </g>
    </svg>
  );
}
