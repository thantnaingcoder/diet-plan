import Container from "@/components/Container";
import AboutHeroSession from "@/features/about/components/AboutHeroSession";
import ProductHero from "../../assets/product-images/product-hero.png";
const page = () => {
  return <>
      
         <Container>
           <AboutHeroSession page="Product" photo={ProductHero} />
         </Container>
      </>;
};

export default page;
