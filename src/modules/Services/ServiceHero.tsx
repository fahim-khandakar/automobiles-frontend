import Title from "@/components/common/Title/Title";

export default function ServiceHero() {
  return (
    <section
      className=" h-[600px]  bg-cover "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/gtbpHZf/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg)",
      }}
    >
      <div className=" bg-opacity-5"></div>
      <div className="flex items-center px-5 pt-16 md:pt-16 max-w-7xl mx-auto h-[600px]">
        <div className="text-white">
          <div className="space-y-8">
            <Title title="Detail Service" />
            <h1 className="text-3xl md:text-7xl font-bold">Machine Upgrade</h1>
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
