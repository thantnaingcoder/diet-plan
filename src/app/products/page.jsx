import Container from "@/components/Container";
import AboutHeroSession from "@/features/about/components/AboutHeroSession";
import ProductHero from "../../assets/product-images/product-hero.png";

import SpecialSet from "@/features/products/components/SpecialSet";
import SearchToolbar from "@/features/products/components/SearchToolbar";
import ProductAndServiceText from "@/components/ProductAndServiceText";
import FoodCards from "@/components/FoodCards";
import ContactInfo from "@/features/products/components/ContactInfo";
const page = () => {
  return (
    <>
      <Container>
        <AboutHeroSession page="Product" photo={ProductHero} />
        <SpecialSet />
        <SearchToolbar />
        <ProductAndServiceText title={"Special Set"}  />
        <FoodCards />
        <FoodCards />
        <ProductAndServiceText title={"Daily Best Sale"}  />
        <FoodCards />
        <ContactInfo />
      </Container>
    </>
  );
};

export default page;
