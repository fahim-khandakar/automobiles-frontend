import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Title from "@/components/common/Title/Title";
import sideImage from "@/assets/USP-1.jpg";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050607] text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 px-6">
        {/* Left Side Image */}
        {/* Left Side Image */}
        <div
          className="relative w-full md:w-1/2 h-[450px] rounded-2xl overflow-hidden"
          data-aos="fade-up"
          data-aos-delay={0} // delay optional
        >
          <Image
            src={sideImage}
            alt="Why Choose Us"
            className="object-cover w-full h-full brightness-50 hover:scale-105 transition-transform duration-700 ease-out"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 pl-0 md:pl-10 border-l-[0.2px] border-gray-800">
          <Title title="Why choose us" aos="fade-up" aosDelay={0} />

          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Beyond Driving, <br className="hidden md:block" /> Into the Future
          </h1>

          <p
            className="text-gray-400 leading-relaxed mb-10"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Every Voltura service is designed to deliver more than just
            mobility— it’s about performance, innovation, care, and
            personalization. Experience next-level automotive excellence crafted
            for the future.
          </p>

          {/* Progress Bars */}
          <div className="space-y-6">
            {[
              { label: "Expert Technicians", value: 98 },
              { label: "Fast Delivery Services", value: 95 },
              { label: "Creative & Innovative", value: 90 },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={300 + idx * 100}
              >
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress className="h-2 bg-gray-800" value={item.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
