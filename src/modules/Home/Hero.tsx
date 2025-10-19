import { Button } from "@/components/ui/button";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const reviewData = {
    images: [
      "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/elementor/thumbs/Team3-rb7776oza0mav04beyszq7a6m12tf898zcs382ulqo.jpg",
      "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/elementor/thumbs/Team3-rb7776oza0mav04beyszq7a6m12tf898zcs382ulqo.jpg",
      "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/elementor/thumbs/Team3-rb7776oza0mav04beyszq7a6m12tf898zcs382ulqo.jpg",
    ],
    addHref: "/add",
    size: 40,
  };

  const shown = reviewData.images.slice(0, 3);
  return (
    <section
      className=" h-[650px] md:min-h-screen bg-cover "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/gtbpHZf/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg)",
      }}
    >
      <div className=" bg-opacity-5"></div>
      <div className="flex items-center px-5  pt-5 md:pt-0  max-w-7xl mx-auto  h-[650px] md:min-h-screen">
        <div className="text-white">
          <div className="space-y-8">
            <h6 className="font-semibold">Unleash Pure Electric Power</h6>
            <h1 className="text-3xl md:text-7xl font-bold">
              Speed Beyond Limits
            </h1>
            <p className="w-8/12 text-xl text-gray-400">
              Engineered for thrill-seekers, Voltura delivers unmatched
              acceleration, precision handling, and futuristic performance
            </p>
          </div>
          <div className="space-y-6 pt-10 ">
            <div className="flex gap-5">
              <Button className="bg-white text-black">
                Book an Appointment
              </Button>
              <Button className="bg-transparent border">Our Services</Button>
            </div>
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
              <div className="flex items-center pl-3">
                <span className="w-5 bg-white h-0.5 "></span>
                <span className="pl-3 font-medium">250+ Reviewers</span>
              </div>
            </div>
            <div>
              <div className="flex items-center relative">
                {/* Avatar stack */}
                <div className="flex items-center relative">
                  {shown.map((src: string, i: number) => (
                    <div
                      key={i}
                      className="rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform duration-200 hover:scale-105"
                      style={{
                        width: reviewData.size,
                        height: reviewData.size,
                        marginLeft: i === 0 ? 0 : -reviewData.size * 0.35, // overlap horizontally
                        zIndex: 10 + i, // first image z-10, next z-11, etc.
                      }}
                    >
                      <Image
                        src={src}
                        alt={`avatar-${i}`}
                        width={reviewData.size}
                        height={reviewData.size}
                        className="object-cover"
                      />
                    </div>
                  ))}

                  {/* Plus button overlap on last image */}
                  <Link
                    href={reviewData.addHref}
                    aria-label="Add"
                    className="absolute right-0 translate-x-4/6 z-20"
                  >
                    <span
                      className="flex items-center justify-center rounded-full border-2 bg-white border-gray-300 text-gray-700 hover:bg-gray-200 active:scale-95 shadow-sm transition-all duration-500"
                      style={{
                        width: reviewData.size,
                        height: reviewData.size,
                      }}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
