type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-500/40
        hover:bg-white/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}