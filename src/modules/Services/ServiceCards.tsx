import ServiceCard from "@/components/common/Service Card/ServiceCard";
import bgImage from "@/assets/home-about.jpg";

export default function ServiceCards() {
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
    <section className="bg-[#050607] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <h1 className="text-3xl md:text-7xl font-bold">
          Browse Other Services
        </h1>
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
