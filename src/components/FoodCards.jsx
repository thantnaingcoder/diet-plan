"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import Container from "./Container"

const foodItems = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20164628-jNw7Fi0DVszmD2ulhZUWi8QMdU4hSy.png",
    isHot: true,
    title: "Special Set",
    rating: 4.1,
    reviews: 25,
    description: "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: 100,
    available: 110,
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20164628-jNw7Fi0DVszmD2ulhZUWi8QMdU4hSy.png",
    isHot: false,
    title: "Special Set",
    rating: 4.1,
    reviews: 25,
    description: "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: 100,
    available: 110,
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20164628-jNw7Fi0DVszmD2ulhZUWi8QMdU4hSy.png",
    isHot: false,
    title: "Special Set",
    rating: 4.1,
    reviews: 25,
    description: "Energize with our nutritious healthy salad, bursting with fresh greens and vibrant superfoods.",
    price: 100,
    available: 110,
  },
]

export default function FoodCards() {
  return (
    <Container>
      <Carousel className="w-full py-10">
        <CarouselContent>
          {foodItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-black text-white">
                <CardContent className="p-6">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt="Food bowl"
                      className="w-32 h-32 mx-auto rounded-full"
                    />
                    {item.isHot && (
                      <span className="absolute top-0 right-0 bg-gray-500 text-white text-xs px-2 py-1 rounded">
                        Hot Item
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>

                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                        />
                      ))}
                      <span className="text-sm">
                        ({item.rating}) | {item.reviews} Reviews
                      </span>
                    </div>

                    <p className="text-sm text-gray-300">{item.description}</p>

                    <div className="flex justify-between items-center">
                      <div className="font-bold">${item.price}</div>
                      <div className="text-sm text-gray-300">+{item.available} Available</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-white text-black hover:bg-gray-200">Add to Cart</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </Container>
  )
}

