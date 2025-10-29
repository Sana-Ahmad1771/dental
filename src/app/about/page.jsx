import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HeroSliderVariant from "../components/about/HeroSliderVaraint";
import SmileCareSectionTwo from "../components/about/SmileCareSectionTwo";
import DentalCareSectionVariant from "../components/about/DentalCareSectionVariant";
import AboutClinicVariant from "../components/about/AboutClinicVariant";
import ExperienceDentalVariant from "../components/about/ExperinceDentalVariant";
import InfoSectionVariant from "../components/about/InfoSectionVariant";
import BeforeAfterSectionVariant from "../components/about/BeforeAfterSectionVariant";
import NextGenCleaning from "../components/home/NextGenCleaning";
import StatsSectionVariant from "../components/about/StatsSectionVariant";

const page = () => {
  return (
    <>
      <Header />
      <HeroSliderVariant />
      <SmileCareSectionTwo />
      <DentalCareSectionVariant />
      <AboutClinicVariant />
      <ExperienceDentalVariant />
      <BeforeAfterSectionVariant />
      <NextGenCleaning />
      {/* <InfoSectionVariant /> */}
      <StatsSectionVariant />
      <Footer />
    </>
  );
};

export default page;
