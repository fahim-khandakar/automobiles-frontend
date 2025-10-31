"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceDetails() {
  return (
    <div className="bg-[#050607] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-20 py-10 md:py-20 px-5 md:px-0">
        {/* LEFT SIDE CONTENT */}
        <div className="col-span-2">
          <div className="pb-10">
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              Our Machine Upgrade service goes beyond standard maintenance
            </h2>
            <p
              className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Our Machine Upgrade service is built for precision. From
              recalibrating engine control units to enhancing thermal management
              systems, every upgrade is engineered to maximize efficiency,
              durability, and raw power. Voltura ensures your vehicle stays
              ahead of the curve with cutting-edge performance.
            </p>
          </div>

          <div>
            <h3
              className="text-lg sm:text-xl md:text-3xl mb-6 font-bold"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              What We Offer
            </h3>

            <div className="space-y-6 pb-10">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="space-y-2"
                  data-aos="fade-up"
                  data-aos-delay={250 + i * 100}
                >
                  <h4 className="text-lg sm:text-xl md:text-lg font-semibold">
                    Powertrain Optimization
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Fine-tuning electric motors and systems for faster
                    acceleration, smoother handling, and improved efficiency.
                  </p>
                </div>
              ))}
            </div>

            <h2
              className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug mb-2"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              Our Machine Upgrade service goes beyond standard maintenance
            </h2>
            <p
              className="text-gray-400 text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={750}
            >
              Our Machine Upgrade service is built for precision. From
              recalibrating engine control units to enhancing thermal management
              systems, every upgrade is engineered to maximize efficiency,
              durability, and raw power. Voltura ensures your vehicle stays
              ahead of the curve with cutting-edge performance.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE STICKY CARD */}
        <div className="relative pt-10 md:pt-0">
          <div
            className="bg-[#121418] p-6 sm:p-8 rounded-xl sticky top-28 md:top-32"
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <Image
              src="https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/elementor/thumbs/Team3-rb7776oza0mav04beyszq7a6m12tf898zcs382ulqo.jpg"
              alt="Engineer"
              className="object-cover rounded-lg mb-5"
              width={40}
              height={30}
            />
            <h3
              className="text-xl sm:text-2xl font-bold mb-2"
              data-aos="fade-up"
              data-aos-delay={850}
            >
              Book Your Service
            </h3>
            <p
              className="text-gray-400 pb-5 text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              Take the first step toward a more powerful and refined ride. Book
              now!
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
              data-aos="fade-up"
              data-aos-delay={950}
            >
              Reserve Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
