import Brands from "@/modules/Home/Brands";
import Experience from "@/modules/Home/Experience";
import Hero from "@/modules/Home/Hero";
import HomeAbout from "@/modules/Home/HomeAbout";
import Services from "@/modules/Home/Services";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Experience />
      <HomeAbout />
      <Brands />
      <Services />
    </div>
  );
}
