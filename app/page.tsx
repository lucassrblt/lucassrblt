import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Audience } from "@/components/audience";
import { Offers } from "@/components/offers";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Audience />
        <Offers />
        <Projects />
        <Process />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
