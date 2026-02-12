export default function HonoLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="80" fill="#FF6B35" />
      <path
        d="M70 80v40h20V80H70zm40 0v40h20V80h-20z"
        fill="white"
      />
    </svg>
  );
}
