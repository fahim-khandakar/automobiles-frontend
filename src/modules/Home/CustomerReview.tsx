"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Title from "@/components/common/Title/Title";
import customer from "@/assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash (1).jpg";

export default function CustomerReviews() {
  const data = [
    {
      name: "James Cooper",
      role: "Tesla Model S Owner",
      image: customer,
      rating: 5,
      review:
        "Voltura has transformed how I view vehicle servicing. Their attention to detail and innovation is unmatched.",
    },
    {
      name: "Sophia Turner",
      role: "Audi e-tron Driver",
      image: customer,
      rating: 5,
      review:
        "Fast, efficient, and professional! The entire process was seamless, and the results were beyond expectations.",
    },
    {
      name: "Michael Rodriguez",
      role: "BMW iX Customer",
      image: customer,
      rating: 4.5,
      review:
        "Exceptional customer service and next-gen expertise. Voltura truly stands for quality and innovation.",
    },
  ];
  return (
    <section className="bg-[#050607] text-white py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Title title="Customer Reviews" />
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            What Our Clients Say
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Hear directly from the people who trust Voltura. We’re proud to
            deliver experiences that redefine performance, trust, and care.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-[#0a0b0c] border border-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: Math.floor(item.rating) }).map(
                  (_, idx) => (
                    <Star
                      key={idx}
                      className="text-amber-500 fill-amber-500 w-5 h-5"
                    />
                  )
                )}
                {item.rating % 1 !== 0 && (
                  <Star className="text-amber-500/60 fill-amber-500/60 w-5 h-5" />
                )}
              </div>

              {/* Review */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                “{item.review}”
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-700"
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
