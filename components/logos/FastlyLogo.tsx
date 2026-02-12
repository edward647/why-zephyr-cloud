export default function FastlyLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <rect width="300" height="100" fill="#FF0000" rx="8" />
      <g transform="translate(30, 30)">
        <text
          x="0"
          y="30"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="36"
          fontWeight="700"
          fill="white"
          letterSpacing="-1"
        >
          Fastly
        </text>
      </g>
    </svg>
  );
}
