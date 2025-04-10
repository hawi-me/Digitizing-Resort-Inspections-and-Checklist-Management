"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, CheckSquare, ChevronDown, ClipboardCheck, Home, Hotel, Menu, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCollapsed?: boolean
}

export function Sidebar({ className, defaultCollapsed = false }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  const mainNav = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
      isActive: isActive("/"),
    },
    {
      title: "Inspections",
      href: "/inspections",
      icon: ClipboardCheck,
      isActive: isActive("/inspections"),
    },
    {
      title: "Tasks",
      href: "/tasks",
      icon: CheckSquare,
      isActive: isActive("/tasks"),
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: BarChart2,
      isActive: isActive("/analytics"),
    },
  ]

  const resortNav = [
    {
      title: "Bishoftu",
      href: "/resorts/bishoftu",
      icon: Hotel,
      isActive: isActive("/resorts/bishoftu"),
    },
    {
      title: "Entoto",
      href: "/resorts/entoto",
      icon: Hotel,
      isActive: isActive("/resorts/entoto"),
    },
    {
      title: "Lake Tana",
      href: "/resorts/lake-tana",
      icon: Hotel,
      isActive: isActive("/resorts/lake-tana"),
    },
    {
      title: "Awash Falls",
      href: "/resorts/awash-falls",
      icon: Hotel,
      isActive: isActive("/resorts/awash-falls"),
    },
  ]

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[280px] pr-0">
          <MobileSidebar />
        </SheetContent>
      </Sheet>
      <div
        className={cn(
          "hidden md:flex flex-col h-[calc(100vh-4rem)] border-r bg-background",
          isCollapsed ? "w-[80px]" : "w-[240px]",
          className,
        )}
      >
        <div className="flex h-14 items-center px-4 border-b">
          <Link href="/" className={cn("flex items-center gap-2 font-semibold", isCollapsed && "justify-center")}>
            {!isCollapsed && <span>Kuriftu Inspect</span>}
            <ClipboardCheck className="h-5 w-5" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", isCollapsed ? "rotate-90" : "rotate-270")} />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="px-3 py-2">
            <div className="mb-2">
              <h2
                className={cn(
                  "mb-1 px-2 text-xs font-semibold tracking-tight text-muted-foreground",
                  isCollapsed && "sr-only",
                )}
              >
                Main
              </h2>
              <div className="space-y-1">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                      item.isActive ? "bg-muted" : "transparent",
                      isCollapsed && "justify-center px-0",
                    )}
                  >
                    <item.icon className={cn("h-4 w-4", item.isActive ? "text-primary" : "text-muted-foreground")} />
                    {!isCollapsed && <span>{item.title}</span>}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-2">
              <Collapsible defaultOpen>
                <div className="flex items-center px-2">
                  <h2
                    className={cn(
                      "text-xs font-semibold tracking-tight text-muted-foreground",
                      isCollapsed && "sr-only",
                    )}
                  >
                    Resorts
                  </h2>
                  {!isCollapsed && (
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="ml-auto h-7 w-7 p-0">
                        <ChevronDown className="h-4 w-4" />
                        <span className="sr-only">Toggle resorts</span>
                      </Button>
                    </CollapsibleTrigger>
                  )}
                </div>
                <CollapsibleContent className="space-y-1 mt-1">
                  {resortNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                        item.isActive ? "bg-muted" : "transparent",
                        isCollapsed && "justify-center px-0",
                      )}
                    >
                      <item.icon className={cn("h-4 w-4", item.isActive ? "text-primary" : "text-muted-foreground")} />
                      {!isCollapsed && <span>{item.title}</span>}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="py-2">
              <h2
                className={cn(
                  "mb-1 px-2 text-xs font-semibold tracking-tight text-muted-foreground",
                  isCollapsed && "sr-only",
                )}
              >
                Settings
              </h2>
              <div className="space-y-1">
                <Link
                  href="/settings"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                    isActive("/settings") ? "bg-muted" : "transparent",
                    isCollapsed && "justify-center px-0",
                  )}
                >
                  <Settings
                    className={cn("h-4 w-4", isActive("/settings") ? "text-primary" : "text-muted-foreground")}
                  />
                  {!isCollapsed && <span>Settings</span>}
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  )
}

export function MobileSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-14 items-center px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <ClipboardCheck className="h-5 w-5" />
          <span>Kuriftu Inspect</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-2 py-2">
          <div className="mb-4">
            <h2 className="mb-1 px-2 text-xs font-semibold tracking-tight text-muted-foreground">Main</h2>
            <div className="space-y-1">
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/") && "bg-muted",
                )}
              >
                <Home className={cn("h-4 w-4", isActive("/") ? "text-primary" : "text-muted-foreground")} />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/inspections"
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/inspections") && "bg-muted",
                )}
              >
                <ClipboardCheck
                  className={cn("h-4 w-4", isActive("/inspections") ? "text-primary" : "text-muted-foreground")}
                />
                <span>Inspections</span>
              </Link>
              <Link
                href="/tasks"
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/tasks") && "bg-muted",
                )}
              >
                <CheckSquare className={cn("h-4 w-4", isActive("/tasks") ? "text-primary" : "text-muted-foreground")} />
                <span>Tasks</span>
              </Link>
              <Link
                href="/analytics"
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/analytics") && "bg-muted",
                )}
              >
                <BarChart2
                  className={cn("h-4 w-4", isActive("/analytics") ? "text-primary" : "text-muted-foreground")}
                />
                <span>Analytics</span>
              </Link>
            </div>
          </div>
          <div className="mb-4">
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1 text-xs font-semibold tracking-tight hover:bg-muted">
                <span className="text-muted-foreground">Resorts</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 mt-1">
                <Link
                  href="/resorts/bishoftu"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                    isActive("/resorts/bishoftu") && "bg-muted",
                  )}
                >
                  <Hotel
                    className={cn("h-4 w-4", isActive("/resorts/bishoftu") ? "text-primary" : "text-muted-foreground")}
                  />
                  <span>Bishoftu</span>
                </Link>
                <Link
                  href="/resorts/entoto"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                    isActive("/resorts/entoto") && "bg-muted",
                  )}
                >
                  <Hotel
                    className={cn("h-4 w-4", isActive("/resorts/entoto") ? "text-primary" : "text-muted-foreground")}
                  />
                  <span>Entoto</span>
                </Link>
                <Link
                  href="/resorts/lake-tana"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                    isActive("/resorts/lake-tana") && "bg-muted",
                  )}
                >
                  <Hotel
                    className={cn("h-4 w-4", isActive("/resorts/lake-tana") ? "text-primary" : "text-muted-foreground")}
                  />
                  <span>Lake Tana</span>
                </Link>
                <Link
                  href="/resorts/awash-falls"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                    isActive("/resorts/awash-falls") && "bg-muted",
                  )}
                >
                  <Hotel
                    className={cn(
                      "h-4 w-4",
                      isActive("/resorts/awash-falls") ? "text-primary" : "text-muted-foreground",
                    )}
                  />
                  <span>Awash Falls</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="mb-4">
            <h2 className="mb-1 px-2 text-xs font-semibold tracking-tight text-muted-foreground">Settings</h2>
            <div className="space-y-1">
              <Link
                href="/settings"
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/settings") && "bg-muted",
                )}
              >
                <Settings className={cn("h-4 w-4", isActive("/settings") ? "text-primary" : "text-muted-foreground")} />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
