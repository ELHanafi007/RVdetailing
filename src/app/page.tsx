import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { TraditionalResults } from "@/components/TraditionalResults";
import { Packages } from "@/components/Packages";
import { InvestmentEstimator } from "@/components/InvestmentEstimator";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <TraditionalResults />
      <Packages />
      <InvestmentEstimator />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
