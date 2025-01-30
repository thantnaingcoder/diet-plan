"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SS1 from "../../../assets/product-images/ss1.png"
import SS2 from "../../../assets/product-images/ss2.png"
import SS3 from "../../../assets/product-images/ss3.png"
import Image from "next/image"
export default function SpecialSet() {
  const specialSets = [
    {
      title: "Special Set",
      description: "A healthy balanced diet plan to individual health goals.",
      bgColor: "bg-[#e6f7e9]", // Light green background
      image: SS1,
    },
    {
      title: "Special Set",
      description: "A healthy balanced diet plan to individual health goals.",
      bgColor: "bg-[#ffe8e8]", // Light red/pink background
      image: SS2,
    },
    {
      title: "Special Set",
      description: "A healthy balanced diet plan to individual health goals.",
      bgColor: "bg-[#fff5e6]", // Light yellow/orange background
      image: SS3,
    },
  ]

  return (
    <>
      <div className= " py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialSets.map((set, index) => (
          <Card key={index} className={`overflow-hidden border-none ${set.bgColor}`}>
            <CardContent className=" relative p-6">
              <div className="  space-y-3">
                <h3 className="text-xl font-bold text-zinc-900">{set.title}</h3>
                <p className="text-sm text-zinc-600">{set.description}</p>
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">START NOW</Button>
              </div>
              <div className=" absolute right-0 top-0">
                <Image
                  src={set.image }
                  width={300}
                  height={200}
                  alt={`Special Set ${index + 1}`}
                  className="  w-full h-auto rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

