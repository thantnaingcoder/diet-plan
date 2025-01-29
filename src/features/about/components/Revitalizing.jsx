import React from "react";
import Re1 from "../../../assets/about-images/revitalizing.png";
import Image from "next/image";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const Revitalizing = () => {
  return (
    <Container>
      <div className=" py-10 grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative ">
          <Image src={Re1} alt="Fresh fruits and food preparation" />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col gap-6 p-10 space-y-10">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Fresh & Tasty</p>
              <h1 className="text-7xl font-bold tracking-tighter sm:text-5xl">
                Revitalizing <br /> Nutrient
              </h1>
            </div>
            <p className="text-muted-foreground">
              Experience the burst of flavors and nourishment with our selection
              of refreshing, seasonal fruits and fresh food.
            </p>
          </div>

          {/* Bullet points */}
          <ul className="grid gap-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Nature's bounty with fresh</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Fresh juice with selections</span>
            </li>
          </ul>

          {/* CTA Button */}
          <Button className="w-full sm:w-auto" size="lg">
            CONNECT NOW
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Revitalizing;
