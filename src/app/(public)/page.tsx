import Brands from "@/modules/Home/Brands";
import CustomerReview from "@/modules/Home/CustomerReview";
import Experience from "@/modules/Home/Experience";
import Faq from "@/modules/Home/Faq";
import Hero from "@/modules/Home/Hero";
import HomeAbout from "@/modules/Home/HomeAbout";
import Services from "@/modules/Home/Services";
import WhyChooseUs from "@/modules/Home/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <HomeAbout />
      <Brands />
      <Services />
      <Experience />
      <WhyChooseUs />
      <Faq />
      <CustomerReview />
    </div>
  );
}
