"use client"

import { Card } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import C1 from "../../../assets/about-images/Ellipse 5.png"
import C2 from "../../../assets/about-images/Ellipse 6.png"
import C3 from "../../../assets/about-images/Ellipse 7.png"
import Container from "@/components/Container"

const teamMembers = [
  {
    name: "David James",
    role: "Nutrition chef",
    image: C1,
  },
  {
    name: "Ella Wendy",
    role: "Nutrition chef",
    image:
      C2
  },
  {
    name: "David James",
    role: "Nutrition chef",
    image:
     C3,
  },
]

export default function TeamSection() {
  return (
    <Container className={"py-20"}>
      <div className="  flex flex-col items-center space-y-4 mb-5">
        <p className="text-sm uppercase tracking-wider">Our Team</p>
        <h2 className="text-4xl font-bold">Meet with Us</h2>
        <p className="text-muted-foreground">We offers a wide range of high-quality products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-gray-100  p-8 py-20">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-48 h-48">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={member.image }
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>

              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  )
}

