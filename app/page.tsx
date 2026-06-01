import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto w-full max-w-2xl flex-1 px-6">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
