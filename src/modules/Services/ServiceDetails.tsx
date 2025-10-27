import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function ServiceDetails() {
  return (
    <div className="bg-[#050607] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-20 py-10 md:py-20 px-5 md:px-0">
        {/* LEFT SIDE CONTENT */}
        <div className="col-span-2">
          <div className="pb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold pb-5 leading-snug">
              Our Machine Upgrade service goes beyond standard maintenance
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Our Machine Upgrade service is built for precision. From
              recalibrating engine control units to enhancing thermal management
              systems, every upgrade is engineered to maximize efficiency,
              durability, and raw power. Voltura ensures your vehicle stays
              ahead of the curve with cutting-edge performance.
            </p>
          </div>

          <div>
            <h1 className="text-lg sm:text-xl md:text-3xl font-bold pb-8">
              What We Offer
            </h1>

            <div className="space-y-6 pb-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
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

            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold pb-5 leading-snug">
                Our Machine Upgrade service goes beyond standard maintenance
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Our Machine Upgrade service is built for precision. From
                recalibrating engine control units to enhancing thermal
                management systems, every upgrade is engineered to maximize
                efficiency, durability, and raw power. Voltura ensures your
                vehicle stays ahead of the curve with cutting-edge performance.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE STICKY CARD */}
        <div className="relative pt-10 md:pt-0">
          <div className="bg-[#121418] p-6 sm:p-8 rounded-xl sticky top-28 md:top-32">
            <Image
              src="https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/elementor/thumbs/Team3-rb7776oza0mav04beyszq7a6m12tf898zcs382ulqo.jpg"
              alt="Engineer"
              className="object-cover  rounded-lg mb-5"
              width={40}
              height={30}
            />
            <h3 className="text-xl sm:text-2xl font-bold pb-2">
              Book Your Service
            </h3>
            <p className="text-gray-400 pb-5 text-sm sm:text-base leading-relaxed">
              Take the first step toward a more powerful and refined ride. Book
              now!
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
              Reserve Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
