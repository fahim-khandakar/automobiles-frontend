import Image from "next/image";

interface TeamCardProps {
  image: string;
  title: string;
  description: string;
  aos?: string; // optional AOS animation type
  aosDelay?: number; // optional delay in ms
}

export default function TeamCard({
  image,
  title,
  description,
  aos,
  aosDelay = 0,
}: TeamCardProps) {
  return (
    <div
      data-aos={aos}
      data-aos-delay={aosDelay}
      className="bg-[#121418] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-75"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>

      <div className="p-6 text-white space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
