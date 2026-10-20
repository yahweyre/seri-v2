type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function Heading({
  eyebrow,
  title,
  description,
  align = "left",
}: HeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-zinc-400 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}