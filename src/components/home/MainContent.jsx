import React from "react";
import { Layout } from "antd";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import WhatApp from "../../assets/logowtp.svg";

const { Content } = Layout;

const MainContent = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <ContactUsSection />
      <div
        style={{
          position: "fixed",
          bottom: "20px", // Adjust the vertical position
          right: "20px", // Adjust the horizontal position
          zIndex: 1000, // Ensure it's above other elements
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=94702637919"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#25D366", // WhatsApp green color
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <img
            src={WhatApp}
            alt="WhatsApp"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%", // To make the icon rounded
            }}
          />
        </a>
      </div>
    </>
  );
};

export default MainContent;
