type SectionTitleProps = {
  eyebrow?: string;
  title?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  children,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "";

  if (title) {
    return (
      <div className={`${alignClass} ${className}`}>
        {eyebrow && (
          <p className="mb-3 text-sm font-medium tracking-widest text-orange-500">
            {eyebrow.toUpperCase()}
          </p>
        )}
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      </div>
    );
  }

  // Legacy usage: <SectionTitle>children</SectionTitle>
  return <h2 className={`text-2xl font-bold text-white ${className}`}>{children}</h2>;
}
