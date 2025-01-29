import Container from "@/components/Container";
import AboutHeroSession from "@/features/about/components/AboutHeroSession";
import ProductHero from "../../assets/product-images/product-hero.png";
const page = () => {
  return <>
      
         <Container>
           <AboutHeroSession page="Product" photo={ProductHero} />

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className=" text-4xl">test 1</div>
              <div className=" text-green-500 bg-gray-200 gap-8  p-10 space-y-10">test 2</div>
           </div>
         </Container>
      </>;
};

export default page;
