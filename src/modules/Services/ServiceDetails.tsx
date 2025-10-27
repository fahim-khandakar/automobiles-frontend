import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function ServiceDetails() {
  return (
    <div className="bg-[#050607] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 md:gap-20 py-10 md:py-20">
        <div className="col-span-2">
          <div className="pb-10">
            <h2 className="text-3xl md:text-5xl font-bold pb-5">
              Our Machine Upgrade service goes beyond standard maintenance
            </h2>
            <p className="text-gray-400">
              Our Machine Upgrade service is built for precision. From
              recalibrating engine control units to enhancing thermal management
              systems, every upgrade is engineered to maximize efficiency,
              durability, and raw power. Voltura ensures your vehicle stays
              ahead of the curve with cutting-edge performance
            </p>
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold pb-10">
              What We Offer
            </h1>
            <div className="space-y-5 pb-10">
              <div className="space-y-2">
                <h4 className="text-xl md:text-lg font-semibold">
                  Powertrain Optimization
                </h4>
                <p className="text-gray-400">
                  Fine-tuning electric motors and systems for faster
                  acceleration, smoother handling, and improved efficiency.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl md:text-lg font-semibold">
                  Powertrain Optimization
                </h4>
                <p className="text-gray-400">
                  Fine-tuning electric motors and systems for faster
                  acceleration, smoother handling, and improved efficiency.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl md:text-lg font-semibold">
                  Powertrain Optimization
                </h4>
                <p className="text-gray-400">
                  Fine-tuning electric motors and systems for faster
                  acceleration, smoother handling, and improved efficiency.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl md:text-lg font-semibold">
                  Powertrain Optimization
                </h4>
                <p className="text-gray-400">
                  Fine-tuning electric motors and systems for faster
                  acceleration, smoother handling, and improved efficiency.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold pb-5">
                Our Machine Upgrade service goes beyond standard maintenance
              </h2>
              <p className="text-gray-400">
                Our Machine Upgrade service is built for precision. From
                recalibrating engine control units to enhancing thermal
                management systems, every upgrade is engineered to maximize
                efficiency, durability, and raw power. Voltura ensures your
                vehicle stays ahead of the curve with cutting-edge performance
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#121418] p-8">
          <Image
            src={
              "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/elementor/thumbs/Team3-rb7776oza0mav04beyszq7a6m12tf898zcs382ulqo.jpg"
            }
            alt="Engineer"
            className="object-cover pb-5"
            width={40}
            height={40}
          />
          <h3 className="text-2xl font-bold pb-3">Book Your Service</h3>
          <p className="text-gray-400 pb-5">
            Take the first step toward a more powerful and refined ride. Book
            now!
          </p>

          <Button className="bg-white text-black">Reserve Service</Button>
        </div>
      </div>
    </div>
  );
}
