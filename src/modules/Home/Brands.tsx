"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Title from "@/components/common/Title/Title";

export default function Brands() {
  const [limit, setLimit] = useState(7);
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    "/assets/Brands/brand-01.png",
    "/assets/Brands/brand-02.png",
    "/assets/Brands/brand-03.png",
    "/assets/Brands/brand-04.png",
    "/assets/Brands/brand-05.png",
    "/assets/Brands/brand-06.png",
    "/assets/Brands/brand-07.png",
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
          src={"/assets/CTA-2.jpg"}
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
          <Title title="Our Brands" />
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            We Repair All Makes of Automobiles
          </h1>
          <p className="text-gray-300">
            We work with all makes and models of vehicles — ensuring quality and
            reliability in every repair.
          </p>
        </div>

        {/* Brand logos */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
          {data.slice(0, limit).map((img, idx) => (
            <div
              key={idx}
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
        <Button
          onClick={handleLimit}
          variant="outline"
          className="bg-transparent border-gray-400 text-gray-200 hover:bg-gray-100/10 hover:text-white transition-all"
        >
          {isOpen ? "− See less brands" : "+ See all brands"}
        </Button>
      </div>
    </section>
  );
}
