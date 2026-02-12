export default function WebpackLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M128 0l128 74.667v106.666L128 256 0 181.333V74.667z"
        fill="#8ED6FB"
      />
      <path
        d="M128 0l128 74.667v106.666L128 256V0z"
        fill="#1C78C0"
        opacity="0.5"
      />
      <path
        d="M128 44.8L40.533 93.867v98.266L128 241.2V44.8z"
        fill="#F5FAFA"
      />
      <path
        d="M128 44.8l87.467 49.067v98.266L128 241.2V44.8z"
        fill="#EFEFEF"
      />
    </svg>
  );
}
