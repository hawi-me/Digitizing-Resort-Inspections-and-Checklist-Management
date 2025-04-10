"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Home, ClipboardCheck, CheckSquare, BarChart2, Settings, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between p-4 border-b">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="sr-only">Kuriftu Resorts</span>
          Kuriftu Inspect
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/inspections/new">
            <Button size="sm" variant="ghost">
              <Plus className="h-5 w-5" />
            </Button>
          </Link>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
        </div>
      </div>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setOpen(false)}>
            <span className="sr-only">Kuriftu Resorts</span>
            Kuriftu Inspect
          </Link>
        </div>
        <nav className="flex flex-col gap-4 px-2 mt-8">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/inspections"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            <ClipboardCheck className="h-5 w-5" />
            Inspections
          </Link>
          <Link
            href="/tasks"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            <CheckSquare className="h-5 w-5" />
            Tasks
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            <BarChart2 className="h-5 w-5" />
            Analytics
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
