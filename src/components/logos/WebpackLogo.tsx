export default function WebpackLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid"
    >
      <path fill="#8ed6fb" d="M600 0l530 300v600L600 1200 70 900V300z"/>
      <path fill="#1c78c0" d="M1035 894L680 1104V948l221-121zm25-24V358l-149 87v388zm-901 24l355 210V948L293 827zm-25-24V358l149 87v388zm16-571l364-208v156L293 460zm886 0L666 91v156l221 121z"/>
      <path fill="#f5fafa" d="M680 1011L449 884V632l231 134zm0-354V517L449 383v248zm-380-16L514 517v141l-214 124zm0-269l214-124v141L300 508z"/>
    </svg>
  );
}
