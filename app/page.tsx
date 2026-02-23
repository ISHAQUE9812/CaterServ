import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Menu from "@/app/components/Menu";

export default function Home() {
  return (
    <main className="font-sans bg-[#FFFDF9]">
      <Hero />
      <About />
      <Services />
      <Menu />
    </main>
  );
}