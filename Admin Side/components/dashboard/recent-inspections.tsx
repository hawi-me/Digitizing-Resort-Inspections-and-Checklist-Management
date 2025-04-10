"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"

const inspections = [
  {
    id: "INS-001",
    resort: "Bishoftu",
    type: "Housekeeping",
    date: "2023-04-08",
    inspector: {
      name: "Alex Mekonnen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AM",
    },
    status: "Completed",
    issues: 3,
  },
  {
    id: "INS-002",
    resort: "Entoto",
    type: "Maintenance",
    date: "2023-04-07",
    inspector: {
      name: "Sara Tadesse",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ST",
    },
    status: "In Progress",
    issues: 7,
  },
  {
    id: "INS-003",
    resort: "Lake Tana",
    type: "Food & Beverage",
    date: "2023-04-06",
    inspector: {
      name: "Daniel Bekele",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DB",
    },
    status: "Completed",
    issues: 2,
  },
  {
    id: "INS-004",
    resort: "Awash Falls",
    type: "Housekeeping",
    date: "2023-04-05",
    inspector: {
      name: "Hanna Girma",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "HG",
    },
    status: "Completed",
    issues: 0,
  },
  {
    id: "INS-005",
    resort: "Bishoftu",
    type: "Maintenance",
    date: "2023-04-04",
    inspector: {
      name: "Yonas Abebe",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "YA",
    },
    status: "Pending Review",
    issues: 5,
  },
]

export function RecentInspections() {
  return (
    <div className="space-y-4">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-medium text-muted-foreground">
              <th className="p-2 w-[100px]">ID</th>
              <th className="p-2">Resort</th>
              <th className="p-2">Type</th>
              <th className="p-2">Inspector</th>
              <th className="p-2">Status</th>
              <th className="p-2">Issues</th>
              <th className="p-2 w-[80px]"></th>
            </tr>
          </thead>
          <tbody>
            {inspections.map((inspection) => (
              <tr key={inspection.id} className="border-b">
                <td className="p-2 text-sm">{inspection.id}</td>
                <td className="p-2 text-sm">{inspection.resort}</td>
                <td className="p-2 text-sm">{inspection.type}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={inspection.inspector.avatar} alt={inspection.inspector.name} />
                      <AvatarFallback>{inspection.inspector.initials}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">{inspection.inspector.name}</div>
                  </div>
                </td>
                <td className="p-2">
                  <Badge
                    variant={
                      inspection.status === "Completed"
                        ? "default"
                        : inspection.status === "In Progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {inspection.status}
                  </Badge>
                </td>
                <td className="p-2 text-sm">
                  <span className={inspection.issues > 0 ? "text-red-500 font-medium" : "text-green-500 font-medium"}>
                    {inspection.issues}
                  </span>
                </td>
                <td className="p-2">
                  <Link href={`/inspections/${inspection.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View inspection</span>
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
