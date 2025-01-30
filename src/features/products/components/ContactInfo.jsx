"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Globe } from "lucide-react"

export default function ContactInfo() {
  const contactCards = [
    {
      title: "Call Anytime",
      content: "+(95) 987938524",
      icon: Phone,
      href: "tel:+95987938524",
    },
    {
      title: "Message us",
      content: "www.mmsos.com",
      icon: Mail,
      href: "https://www.mmsos.com",
    },
    {
      title: "Located in",
      content: "Yangon,Myanmar",
      icon: Globe,
      href: "https://maps.google.com/?q=Yangon,Myanmar",
    },
  ]

  return (
    <div className=" py-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
      {contactCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card key={index} className="bg-gray-200 border-none">
            <CardContent className="flex items-center justify-between p-6">
              <div className="space-y-1">
                <h3 className="font-medium">{card.title}</h3>
                <a
                  href={card.href}
                  className="text-sm text-muted-foreground hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.content}
                </a>
              </div>
              <div className="bg-white p-2 rounded-full">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>


  
  )
}

 