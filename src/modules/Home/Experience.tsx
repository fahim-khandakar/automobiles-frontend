import Image from "next/image";
import bg from "@/assets/block-wrapper.jpg";

export default function Experience() {
  const data = [
    { count: "20", details: "Years\nof Experience" },
    { count: "2.9k", details: "Vehicle\nRepaired" },
    { count: "32", details: "Technicians &\nWorkers" },
    { count: "100%", details: "Satisfied\nCustomers" },
  ];

  return (
    <section className="relative">
      <Image
        className="w-full h-[400px] md:h-full object-cover"
        src={bg}
        alt="World Background Image"
        width={5000}
        height={5000}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex gap-5 md:gap-10 flex-col md:flex-row">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="text-white whitespace-pre-line flex"
              data-aos="fade-up"
              data-aos-delay={idx * 100} // staggered delay
            >
              <p className="border-r-2 border-[#00d8ff] pr-4 text-4xl md:text-6xl font-bold">
                {item.count}
              </p>
              <p className="font-semibold text-lg md:text-xl pl-5">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
