"use client";
import Title from "@/components/common/Title/Title";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsHero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/2025/09/Cover-Career.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl py-20 md:py-0 mx-auto px-5 min-h-screen flex flex-col md:flex-row items-center justify-between gap-14 text-white">
        {/* Left side - Contact Info */}
        <div className="w-full md:w-5/12 space-y-8">
          <Title title="Contact us" />
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Have questions, ideas, or partnership inquiries? We’d love to hear
            from you. Let’s connect and build the future together.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#00E0FF]" />
              <p>123 Innovation Street, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#00E0FF]" />
              <p>+880 1234 567 890</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#00E0FF]" />
              <p>info@voltura.com</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-6/12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 space-y-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-[#00E0FF] text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-[#00E0FF] text-white placeholder-gray-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-[#00E0FF] text-white placeholder-gray-400"
            ></textarea>
            <button className="w-full bg-[#00E0FF] hover:bg-[#00b8d4] text-black font-semibold py-3 rounded-md transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
