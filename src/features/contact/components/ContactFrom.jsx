"use client"

import Container from "@/components/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault()
    // Add your form submission logic here
  }

  return (
    <Container className="py-10">
      <div className=" flex flex-col items-center justify-center mb-10">
        <p className="text-sm uppercase tracking-wide mb-2">Contact with us</p>
        <h1 className="text-4xl font-bold mb-4">Feel free to reach out</h1>
        <p className="text-muted-foreground">Feel free to contact us for any assistance you may need.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="rounded-lg overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.4728874717486!2d96.1339!3d16.8276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ5JzM5LjQiTiA5NsKwMDgnMDIuMCJF!5e0!3m2!1sen!2smm!4v1635825谷歌地图"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          ></iframe>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input id="fullName" name="fullName" required className="w-full" placeholder="Enter your full name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" name="email" type="email" required className="w-full" placeholder="Enter your email" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="w-full min-h-[150px]"
                placeholder="Enter your message"
              />
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
              SUBMIT REQUEST
            </Button>
          </form>
        </div>
      </div>
    </Container>
  )
}

