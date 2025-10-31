"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Title from "@/components/common/Title/Title";
import brand from "@/assets/Brands/brand-01.png";
import brand2 from "@/assets/Brands/brand-02.png";
import brand3 from "@/assets/Brands/brand-03.png";
import brand4 from "@/assets/Brands/brand-04.png";
import brand5 from "@/assets/Brands/brand-05.png";
import brand6 from "@/assets/Brands/brand-06.png";
import brand7 from "@/assets/Brands/brand-07.png";
import bg from "@/assets/CTA-2.jpg";

export default function Brands() {
  const [limit, setLimit] = useState(7);
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    brand,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
  ];

  const handleLimit = () => {
    if (!isOpen) {
      setLimit((prev) => prev + limit);
      setIsOpen(true);
    } else {
      setLimit((prev) => prev - 7);
      setIsOpen(false);
    }
  };

  return (
    <section className="relative text-white bg-[#050607]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover object-top brightness-50"
          priority
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-24 px-4 gap-14">
        {/* Heading */}
        <div className="text-center max-w-2xl">
          <Title title="Our Brands" aos="fade-up" aosDelay={0} />

          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              We Repair All Makes of Automobiles
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-300">
              We work with all makes and models of vehicles — ensuring quality
              and reliability in every repair.
            </p>
          </div>
        </div>

        {/* Brand logos */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
          {data.slice(0, limit).map((img, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={300 + idx * 100} // stagger each logo
              className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 flex justify-center items-center"
            >
              <Image
                src={img}
                alt={`Brand ${idx + 1}`}
                className="w-24 md:w-28 lg:w-32 object-contain mix-blend-multiply"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay={1000}>
          <Button
            onClick={handleLimit}
            variant="outline"
            className="bg-transparent border-gray-400 text-gray-200 hover:bg-gray-100/10 hover:text-white transition-all"
          >
            {isOpen ? "− See less brands" : "+ See all brands"}
          </Button>
        </div>
      </div>
    </section>
  );
}
