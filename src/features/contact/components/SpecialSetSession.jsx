"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export default function SpecialSetSession() {
  const specialSets = [
    {
      title: "Special Set",
      description: "A healthy balanced diet plan to individual health goals.",
      bgColor: "bg-[#e6f7e9]", // Light green background
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Special Set",
      description: "A healthy balanced diet plan to individual health goals.",
      bgColor: "bg-[#ffe8e8]", // Light red/pink background
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Special Set",
      description: "A healthy balanced diet plan to individual health goals.",
      bgColor: "bg-[#fff5e6]", // Light yellow/orange background
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <>
      <div className=" py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialSets.map((set, index) => (
          <Card key={index} className={`overflow-hidden border-none ${set.bgColor}`}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-zinc-900">{set.title}</h3>
                <p className="text-sm text-zinc-600">{set.description}</p>
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">START NOW</Button>
              </div>
              <div >
                <img
                  src={set.image || "/placeholder.svg"}
                  alt={`Special Set ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

