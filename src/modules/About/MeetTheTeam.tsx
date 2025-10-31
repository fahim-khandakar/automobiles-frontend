"use client";

import TeamCard from "@/components/common/Team Card/TeamCard";
import Title from "@/components/common/Title/Title";

export default function MeetTheTeam() {
  const data = [
    {
      image:
        "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/2025/09/Team1-800x532.jpg",
      name: "Shipon Ahmed",
      designation: "Lead Technician",
    },
    {
      image:
        "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/2025/09/Team2-800x532.jpg",
      name: "Ayesha Rahman",
      designation: "Senior Engineer",
    },
    {
      image:
        "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/2025/09/Team3-800x532.jpg",
      name: "Michael Karim",
      designation: "Creative Designer",
    },
  ];

  return (
    <section className="bg-[#050607] text-white py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        {/* Header */}
        <div className="pb-10" data-aos="fade-up" data-aos-delay={0}>
          <Title title="Meet the team" aos="fade-up" aosDelay={0} />
          <h1 className="text-3xl md:text-7xl font-bold leading-tight pb-5">
            Driven by Visionaries
          </h1>
          <p className="text-base md:text-xl text-gray-300">
            Behind every Voltura vehicle is a team of bold thinkers, skilled
            engineers, and creative designers who share one purpose: to redefine
            the future of mobility.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {data.map((member, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 150} // stagger effect
            >
              <TeamCard
                image={member.image}
                title={member.name}
                description={member.designation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
