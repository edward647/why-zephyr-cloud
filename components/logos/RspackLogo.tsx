export default function RspackLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="M100 20L180 60v80l-80 40-80-40V60z" fill="#4A90E2" />
      <path d="M100 20v160l80-40V60z" fill="#5BA3F5" opacity="0.8" />
      <text
        x="100"
        y="110"
        fontFamily="Arial, sans-serif"
        fontSize="60"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        R
      </text>
    </svg>
  );
}
