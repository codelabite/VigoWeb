import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtue Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new acoount today and reacieve $250 in creadit towards
            your next payment
          </HeroP>
          <HeroBtnWrapper>
            <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get start {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
