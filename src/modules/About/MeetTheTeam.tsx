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
        "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/2025/09/Team1-800x532.jpg",
      name: "Shipon Ahmed",
      designation: "Lead Technician",
    },
    {
      image:
        "https://thanksfortoday.studio/voltura/wp-content/uploads/sites/75/2025/09/Team1-800x532.jpg",
      name: "Shipon Ahmed",
      designation: "Lead Technician",
    },
  ];
  return (
    <section className="bg-[#050607] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="pb-10">
          <Title title="Meet the team" />
          <h1 className="text-3xl md:text-7xl font-bold leading-tight pb-5">
            Driven by Visionaries
          </h1>
          <p className="text-base md:text-xl text-gray-300">
            Behind every Voltura vehicle is a team of bold thinkers, skilled
            engineers, and creative designers who share one purpose: to redefine
            the future of mobility.
          </p>
        </div>
        <div className="max-w-7xl mx-auto   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {data.map((member, idx) => (
            <TeamCard
              key={idx}
              image={member.image}
              title={member.name}
              description={member.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
