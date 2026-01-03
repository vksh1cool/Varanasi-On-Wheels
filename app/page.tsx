import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Fleet } from "@/components/home/Fleet";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
