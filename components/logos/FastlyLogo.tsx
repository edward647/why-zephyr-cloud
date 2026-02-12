export default function FastlyLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="200" height="60" fill="#FF282D" rx="4" />
      <text
        x="100"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        Fastly
      </text>
    </svg>
  );
}
