import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import InfoSectionImage from "../components/InfoSectionImage";
import { homeObj1, homeObj2, homeObj3 } from "../components/InfoSection/Data";
import { homeObjImg, homeObjImg1 } from "../components/InfoSectionImage/Data";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Services from "../components/services";
import Footer from "../components/Footer";
import FooterSubcribe from "../components/Footer/FooterSub";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSectionImage {...homeObjImg} />
      <InfoSection {...homeObj1} />
      <Services />
      <InfoSectionImage {...homeObjImg1} />
      <FooterSubcribe />
      <Footer />
    </>
  );
};

export default Home;
