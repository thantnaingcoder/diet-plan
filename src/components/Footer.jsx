import Container from "../components/Container";

const Footer = () => {
  return (
    <div className=" mt-auto  bg-[#111111]">
      <Container className={"mx-auto"}>
        <footer className=" grid grid-cols-12 py-20">
          <div className=" col-span-6 ">
            <div className=" grid grid-cols-3">
              <div className=" col-span-2 space-y-5">
                <h1 className=" text-2xl text-white">Diet Plan</h1>
                <p className=" text-justify text-gray-500">
                  Our comprehensive diet plan is designed to optimize your
                  nutrition and support your health goals, ensuring a balanced
                  and sustainable approach.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className=" col-span-2 space-y-2   ">
            <h1 className=" text-lg uppercase text-white">products</h1>

            <div className=" text-md text-gray-500 ">
              <p>How it works</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>

          <div className=" col-span-2 space-y-2   ">
            <h1 className=" text-lg uppercase text-white">about</h1>

            <div className=" text-md text-gray-500 ">
              <p>Our team</p>
              <p>careers</p>
              <p>Press</p>
              <p>Stores</p>
            </div>
          </div>

          <div className=" col-span-2 space-y-2   ">
            <h1 className=" text-lg uppercase text-white">Contact</h1>

            <div className=" text-md text-gray-500 ">
              <p>MMS IT</p>
              <p>09250152018</p>
              <p>Shan kone Street</p>
            </div>
          </div>
        </footer>
      </Container>

      <div className="  py-10 bg-black text-gray-500 ">
        <div className=" flex justify-between mx-auto max-w-[414px] px-2 lg:px-0 lg:max-w-[1280px]">
          <p> @2023 MMS IT</p>
          <p>MMSIT BUD</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
