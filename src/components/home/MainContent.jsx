import React from "react";
import { Layout } from "antd";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutUsSection from "./AboutUsSection";

const { Content } = Layout;

const MainContent = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
    </>
  );
};

export default MainContent;
