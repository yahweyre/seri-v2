import Container from "../components/ui/Container";
import { useLoading } from "../context/LoadingContext";

import HeroBackground from "../components/hero/HeroBackground";
import HeroContent from "../components/hero/HeroContent";
import HeroCanvas from "../components/hero/HeroCanvas";

export default function Hero() {
  const { loading } = useLoading();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <HeroBackground />

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <HeroContent loading={loading} />

          <HeroCanvas />
        </div>
      </Container>
    </section>
  );
}