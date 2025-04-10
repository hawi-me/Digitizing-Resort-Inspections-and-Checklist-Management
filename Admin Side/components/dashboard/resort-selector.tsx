"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Add this at the top of the file, after the imports
export const resorts = [
  { value: "all", label: "All Resorts" },
  { value: "bishoftu", label: "Bishoftu" },
  { value: "entoto", label: "Entoto" },
  { value: "lake-tana", label: "Lake Tana" },
  { value: "awash-falls", label: "Awash Falls" },
]

interface ResortSelectorProps {
  value: string
  onValueChange: (value: string) => void
}

export function ResortSelector({ value, onValueChange }: ResortSelectorProps) {
  const selectedResort = resorts.find((resort) => resort.value === value)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="w-[180px] justify-between">
          {selectedResort?.label || "Select resort"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search resort..." />
          <CommandList>
            <CommandEmpty>No resort found.</CommandEmpty>
            <CommandGroup>
              {resorts.map((resort) => (
                <CommandItem key={resort.value} value={resort.value} onSelect={() => onValueChange(resort.value)}>
                  <Check className={cn("mr-2 h-4 w-4", value === resort.value ? "opacity-100" : "opacity-0")} />
                  {resort.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
