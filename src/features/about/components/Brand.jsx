"use client"

import Container from "@/components/Container"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const brands = [
  {
    name: "ORGANICS",
    className: "text-emerald-600 font-semibold tracking-wide",
  },
  {
    name: "Planta",
    className: "text-emerald-600 font-serif text-2xl",
  },
  {
    name: "LE FRUITIER",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-4 h-4 text-emerald-600"
      >
        <path d="M12 2L3 9l9 7 9-7-9-7z" />
      </svg>
    ),
    className: "text-emerald-600 font-medium tracking-wide flex items-center gap-1",
  },
  {
    name: "JUICE",
    className: "text-green-500 font-bold text-2xl",
  },
]

export default function Brand() {
  return (
    <Container>
      
        <div className="py-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="flex items-center justify-center p-10 bg-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <div className={cn("text-center", brand.className)}>
                {brand.icon}
                {brand.name}
              </div>
            </Card>
          ))}
        </div>
      
    </Container>
  )
}

