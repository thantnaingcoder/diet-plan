"use client"

import Container from "@/components/Container"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <Container className={"py-10"}>
      <div className=" py-10 flex flex-col items-center mb-10">
        <h2 className="text-sm uppercase tracking-wide mb-2">Contact Us</h2>
        <h1 className="text-4xl font-bold mb-4">Get in touch with Us</h1>
        <p className="text-muted-foreground">Contact for assistance and personalized dietary guidance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="bg-muted/50">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-2 rounded-full bg-background">
              <Phone className="h-6 w-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Call Anytime</h3>
              <p className="text-sm text-muted-foreground">(+65) 987938524</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-2 rounded-full bg-background">
              <Mail className="h-6 w-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Message us</h3>
              <p className="text-sm text-muted-foreground">www.mmsos.com</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-2 rounded-full bg-background">
              <MapPin className="h-6 w-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Located in</h3>
              <p className="text-sm text-muted-foreground">Yangon,Myanmar</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

