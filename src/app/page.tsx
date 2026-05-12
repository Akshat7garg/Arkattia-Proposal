import About from "@/components/About";
import Community from "@/components/Community";
import Games from "@/components/Games";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Tagline from "@/components/Tagline";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <Story />
      <About />
      <Games />
      <Technologies />
      <Community />
    </>
  );
}
