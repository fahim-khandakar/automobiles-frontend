import Title from "@/components/common/Title/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import homeAbout from "@/assets/home-about.jpg";

export default function AboutDetails() {
  return (
    <div className="bg-[#050607] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 pt-16 pb-36 lg:py-28 px-5">
        <div className="w-full lg:w-1/2">
          <Title title="About us" />
          <h1 className="text-3xl md:text-7xl font-bold pb-8">
            Shaping the Future of Mobility
          </h1>
          <p className="text-gray-400 pb-10">
            At Voltura, we believe the future of driving is electric,
            intelligent, and limitless. Our mission is to create vehicles that
            merge groundbreaking technology with bold design—delivering
            unmatched performance while paving the way for a sustainable
            tomorrow.
          </p>
          <Button className="bg-white text-black">More About us</Button>
        </div>

        <div className="w-full lg:w-1/2 h-auto relative mt-10 lg:mt-0">
          <Image
            className="bg-cover opacity-40 w-full h-auto"
            src={homeAbout}
            alt="World Background Image"
          />
          <p className="p-5 bg-[#121418] text-lg md:text-2xl lg:text-3xl font-semibold absolute left-0 right-0  -bottom-32 lg:right-20 lg:-left-20">
            Driving Voltura means driving tomorrow, today. Every detail, from
            our electric powertrains to our intelligent systems, is built to
            take you beyond limits
          </p>
        </div>
      </div>
    </div>
  );
}
