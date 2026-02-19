export default function AkamaiLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <g>
        <path d="M20 30 L35 60 L50 30 M35 45 L50 45" stroke="#0096D6" strokeWidth="3" fill="none"/>
        <text
          x="65"
          y="52"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="32"
          fontWeight="600"
          fill="#0096D6"
        >
          Akamai
        </text>
      </g>
    </svg>
  );
}
