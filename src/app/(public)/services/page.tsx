import ServiceCards from "@/modules/Services/ServiceCards";
import ServiceDetails from "@/modules/Services/ServiceDetails";
import ServiceHero from "@/modules/Services/ServiceHero";

export default function Services() {
  return (
    <div>
      <ServiceHero />
      <ServiceDetails />
      <ServiceCards />
    </div>
  );
}
