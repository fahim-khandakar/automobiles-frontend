import Experience from "@/modules/Home/Experience";
import Hero from "@/modules/Home/Hero";
import HomeAbout from "@/modules/Home/HomeAbout";
import Services from "@/modules/Home/Services";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <HomeAbout />
      <Experience />
      <Services />
    </div>
  );
}
