import React from "react";
import { Layout } from "antd";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";

const { Content } = Layout;

const MainContent = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
};

export default MainContent;
