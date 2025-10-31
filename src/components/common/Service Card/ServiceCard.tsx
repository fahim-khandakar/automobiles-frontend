/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  imageSrc: string | any;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  aosDelay?: number; // optional delay for staggered animations
}

export default function ServiceCard({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
  aosDelay = 0, // default no delay
}: ServiceCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="relative flex-1 rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-white transition-all duration-300"
    >
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5 gap-3">
        <h3 className="text-white text-xl md:text-2xl font-bold border-l-4 pl-2">
          {title}
        </h3>
        <p className="text-gray-200 text-sm md:text-base">{description}</p>
        <Button
          className="self-start bg-transparent"
          variant={"outline"}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
