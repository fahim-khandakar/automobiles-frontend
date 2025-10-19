import { Button } from "@/components/ui/button";
import bgImage from "@/assets/home-about.jpg";
import ServiceCard from "@/components/common/Service Card/ServiceCard";

export default function Services() {
  const data = [
    {
      title: "Machine Upgrade",
      description:
        "Unlock the full potential of your Voltura with advanced performance tuning, powertrain optimization, and futuristic system upgrades",
      buttonText: "See details",
      imageSrc: bgImage,
    },
    {
      title: "Engine Repair",
      description:
        "From precision diagnostics to full-scale repairs, our expert technicians ensure your engine runs smoothly, efficiently, and reliably.",
      buttonText: "See details",
      imageSrc: bgImage,
    },
  ];
  return (
    <section className="bg-[#050607] text-white py-20">
      <div className=" max-w-7xl mx-auto px-6">
        <div>
          <h6 className="font-semibold pb-5">Services</h6>
          <h1 className="font-semibold text-4xl md:text-6xl pb-8">
            Redefining Automotive Excellence
          </h1>
          <p className="pb-5 text-gray-400">
            From cutting-edge electric vehicles to advanced driver-assist
            technology, Voltura delivers services that push the boundaries of
            mobility. We combine precision engineering, innovation, and
            sustainability to ensure every drive is extraordinary
          </p>
          <Button className="bg-white text-black">See all service</Button>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between w-full h-[500px] pt-14 md:h-[500px]">
          {data.map((s, idx) => (
            <ServiceCard
              key={idx}
              buttonText={s.buttonText}
              description={s.description}
              imageSrc={s.imageSrc}
              title={s.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
