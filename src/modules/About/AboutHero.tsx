"use client";

import Title from "@/components/common/Title/Title";

export default function AboutHero() {
  const data = [
    { title: "500+", description: "Total Service Done" },
    { title: "250+", description: "Trusted Clients" },
    { title: "5+", description: "Years Experience" },
    { title: "95%", description: "Fast Deliver" },
  ];

  return (
    <section
      className="relative h-[700px] md:h-[800px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/2025/09/Cover-Career.jpg)",
      }}
    >
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative flex items-center px-5 pt-20 md:pt-16 max-w-7xl mx-auto h-full">
        <div className="text-white space-y-8">
          <Title title="About us" aos="fade-up" aosDelay={0} />
          <h1
            className="text-3xl md:text-7xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Shaping the Future of Mobility
          </h1>
          <p
            className="w-full md:w-8/12 text-base md:text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At Voltura, we believe the future of driving is electric,
            intelligent, and limitless. Our mission is to create vehicles that
            merge groundbreaking technology with bold design—delivering
            unmatched performance while paving the way for a sustainable
            tomorrow.
          </p>

          <div
            className="flex flex-wrap gap-10 md:gap-20 border-y border-gray-800 py-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {data.map((d, idx) => (
              <div key={idx} className="space-y-2">
                <h1 className="text-2xl md:text-4xl font-bold">{d.title}</h1>
                <p className="text-gray-300">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
