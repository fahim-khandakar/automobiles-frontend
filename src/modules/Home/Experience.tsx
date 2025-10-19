import Image from "next/image";
import worldBg from "@/assets/block-wrapper.jpg";

export default function Experience() {
  return (
    <div>
      <Image
        className="w-full h-full"
        src={worldBg}
        alt="World Background Image"
      />
    </div>
  );
}
