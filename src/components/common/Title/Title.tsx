"use client";

interface TitleProps {
  title: string;
  className?: string;
  aos?: string; // optional AOS animation type
  aosDelay?: number; // optional delay in ms
}

export default function Title({ title, className, aos, aosDelay }: TitleProps) {
  return (
    <div
      data-aos={aos}
      data-aos-delay={aosDelay}
      className="inline-block" // ensures proper spacing for animations
    >
      <h5
        className={`${className} text-[#00d8ff] uppercase tracking-wide font-medium mb-4`}
      >
        {title}
      </h5>
    </div>
  );
}
