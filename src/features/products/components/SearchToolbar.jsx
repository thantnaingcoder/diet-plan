"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

export default function SearchToolbar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4">
      {/* Search Input */}
      <div className="w-full md:w-[300px]">
        <Input type="search" placeholder="Search" className="w-full rounded-full border-zinc-200" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Show Items Per Page */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500">Show :</span>
          <Select defaultValue="1">
            <SelectTrigger className="w-[100px] rounded-full border-zinc-200">
              <SelectValue>1 of 5</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 of 5</SelectItem>
              <SelectItem value="2">2 of 5</SelectItem>
              <SelectItem value="3">3 of 5</SelectItem>
              <SelectItem value="4">4 of 5</SelectItem>
              <SelectItem value="5">5 of 5</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500">Sort By :</span>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[120px] rounded-full border-zinc-200">
              <SelectValue>Newest</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="price-low">Price: Low-High</SelectItem>
              <SelectItem value="price-high">Price: High-Low</SelectItem>
              <SelectItem value="name-asc">Name: A-Z</SelectItem>
              <SelectItem value="name-desc">Name: Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter Button */}
        <Button variant="outline" size="icon" className="rounded-full border-zinc-200">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>
    </div>
  )
}

