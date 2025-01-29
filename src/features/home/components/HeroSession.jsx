"use client";

import Image from "next/image";
import HeroHomePng from "../../../assets/home-images/hero-session.png";

const HeroSession = () => {
  return (
    <>
      <Image src={HeroHomePng} width={1920} priority height={300} alt="hero" />
    </>
  );
};

export default HeroSession;
