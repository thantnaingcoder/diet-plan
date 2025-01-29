

import FoodCards from "@/components/FoodCards";
import ProductAndServiceText from "@/components/ProductAndServiceText";
import FruitJuiceSession from "@/features/home/components/FruitJuiceSession";
import HeroSession from "@/features/home/components/HeroSession";
export default function page() {
  return <>
    <HeroSession />
    <ProductAndServiceText />
    <FoodCards />
    <FruitJuiceSession />
    <ProductAndServiceText />
   
  </>;
}
