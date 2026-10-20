import Loader from "./components/loader/Loader";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <>
      <Loader />

      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  );
}