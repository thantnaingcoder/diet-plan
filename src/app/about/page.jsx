import AboutHeroSession from "@/features/about/components/AboutHeroSession";
import Brand from "@/features/about/components/Brand";
import Revitalizing from "@/features/about/components/Revitalizing";
import RichFruitSession from "@/features/about/components/RichFruitSession";
import TeamSession from "@/features/about/components/TeamSession";

const page = () => {
  return <>
       <AboutHeroSession />
       <Revitalizing />
       <TeamSession />
       <RichFruitSession />
       <Brand />
  </>;
};

export default page;
