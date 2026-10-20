import Container from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative
        py-24
        lg:py-32
        ${className}
      `}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}