import AboutHeroSession from "@/features/about/components/AboutHeroSession";
import ContactHero from "../../assets/contact-images/contact-hero.png";
import ContactSection from "@/features/contact/components/ContactSession";
import FaqSession from "@/features/contact/components/FaqSession";
import ContactForm from "@/features/contact/components/ContactFrom";
const page = () => {
  return <>
  
     <AboutHeroSession page="Contact" photo={ContactHero} />
     <ContactSection />
     <FaqSession />
     <ContactForm />
  </>;
};

export default page;
