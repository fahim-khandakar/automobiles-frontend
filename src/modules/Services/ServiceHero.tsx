import Title from "@/components/common/Title/Title";

export default function ServiceHero() {
  return (
    <section
      className="h-[600px] bg-cover relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/gtbpHZf/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div> {/* overlay */}
      <div className="flex items-center px-5 pt-16 md:pt-16 max-w-7xl mx-auto h-[600px] relative z-10">
        <div className="text-white space-y-8">
          <Title title="Detail Service" aos="fade-up" aosDelay={0} />
          <div data-aos="fade-up" data-aos-delay={100}>
            <h1 className="text-3xl md:text-7xl font-bold">Machine Upgrade</h1>
          </div>
          <div data-aos="fade-up" data-aos-delay={200}>
            <p className="w-full md:w-8/12 text-xl text-gray-400">
              Unlock the full potential of your Voltura with advanced
              performance tuning, powertrain optimization, and futuristic system
              upgrades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
