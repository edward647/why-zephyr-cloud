export default function CloudflareLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <g>
        <path d="M345.4 52.8c-.9-4.3-5-7.5-9.8-7.5h-70.3c-.4 0-.7.2-.9.5-.2.3-.3.5-.2.8l2.3 10.6c.5 2.4 2.8 4.3 5.3 4.3h46.1c1.9 0 3.1 1.8 2.5 3.6l-2.5 8c-.5 1.8-2.3 3.1-4.2 3.1h-67.7c-9.9 0-19.1 7.1-21 16l-3.5 16.1c-.1.5 0 1 .2 1.3.3.3.7.5 1.1.5h19c2.4 0 4.8-2 5.3-4.4l1.8-7.8c.5-2.4 2.8-4.4 5.3-4.4h11.3c22.9 0 42.4-16 46.6-38.1.1-.5.1-1 .1-1.5 0-1.1-.2-2.2-.6-3.2l-.1.1z" fill="#F38020"/>
        <path d="M86.4 88c-.5 2.4-2.8 4.4-5.3 4.4H62.2c-1.9 0-3.1-1.8-2.5-3.6l2.5-8c.5-1.8 2.3-3.1 4.2-3.1h30.3l1.1-5.1H67.5c-9.9 0-19.1 7.1-21 16l-3.5 16.1c-.1.5 0 1 .2 1.3.3.3.7.5 1.1.5h19c2.4 0 4.8-2 5.3-4.4l1.8-7.8h17.1l-1 4.5.1.2z" fill="#FAAE40"/>
        <text x="120" y="85" fontFamily="system-ui, -apple-system, sans-serif" fontSize="48" fontWeight="700" fill="#2C2C2C">Cloudflare</text>
      </g>
    </svg>
  );
}
