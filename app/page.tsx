import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="top" className="mx-auto w-full max-w-2xl flex-1 px-6">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
