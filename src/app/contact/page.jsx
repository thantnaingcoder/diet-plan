import AboutHeroSession from "@/features/about/components/AboutHeroSession";
import ContactHero from "../../assets/contact-images/contact-hero.png";
const page = () => {
  return <>
  
     <AboutHeroSession page="Contact" photo={ContactHero} />
  </>;
};

export default page;
