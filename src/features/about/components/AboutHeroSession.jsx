import AboutHero from "../../../assets/about-images/about-hero.png";

import Image from "next/image";

import Link from "next/link";
const AboutHeroSession = ({ photo, page }) => {
  return (
    <div className=" relative w-full">
      <Image
        className="w-full object-contain   "
        src={photo || AboutHero}
        alt="about hero image"
      />

    
      <div className="absolute flex flex-col items-center gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2     ">
       <h1 className=" text-6xl font-bold">{page || "About"}</h1>   
       <div className=" flex gap-2 items-center">
       <Link className=" text-black" href="/">
          Home
        </Link>
        /<p className=" cursor-pointer "> {page || "About"} </p>
       </div>
      </div>

     
    </div>
  );
};

export default AboutHeroSession;