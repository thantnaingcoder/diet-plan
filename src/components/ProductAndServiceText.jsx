import React from "react";
import Container from "./Container";
import { EllipsisVertical } from 'lucide-react';
const ProductAndServiceText = ({title,description}) => {
  return  <Container>
       <div className="  flex justify-between items-center py-10">
       <div>
            <div className="  flex   ">
            <EllipsisVertical size={60} />
            <h2 className="text-6xl font-bold mb-5 ">{title || "Product & Services"}</h2>
            </div>
            <p className=" ms-10 md:ms-16 text-justify">{description || "We offers a wide range of high-quality products and services tailored to meet  the diverse needs and preferences of our customers"}</p>
       </div>

       <button className=" px-4 py-2 bg-black text-white rounded-lg">SEE MORE</button>
       </div>
  </Container>;
};

export default ProductAndServiceText;
