import Navbar from "../components/layout/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0F0F10] text-white">
        {children}
      </main>
    </>
  );
}