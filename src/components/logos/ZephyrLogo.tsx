export default function ZephyrLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3" />
      <path
        d="M30 30 L70 70 M70 30 L30 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}
