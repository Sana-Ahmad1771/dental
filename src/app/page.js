import Footer from "./common/Footer";
import Header from "./common/Header";
import AboutClinic from "./components/home/AboutClinic";
import BeforeAfterSection from "./components/home/BeforeAfterSection";
import DentalCareSection from "./components/home/DentalCareSection";
import ExperienceDentalSection from "./components/home/ExperienceDentalSection";
import HeroSection from "./components/home/HeroSection";
import InfoSection from "./components/home/InfoSection";
import NewsletterSection from "./components/home/NewsletterSection";
import NextGenCleaning from "./components/home/NextGenCleaning";
import SmileCareSection from "./components/home/SmileCareSection";
import StatsSection from "./components/home/StatsSection";
import TestimonialSection from "./components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SmileCareSection />
      <DentalCareSection />
      <AboutClinic />
      <ExperienceDentalSection />
      <InfoSection />
      <BeforeAfterSection />
      <NextGenCleaning />
      <StatsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
