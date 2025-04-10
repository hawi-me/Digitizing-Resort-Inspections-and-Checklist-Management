"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

interface TasksListProps {
  status?: "pending" | "in-progress" | "completed" | "all"
  priority?: "low" | "medium" | "high" | "critical" | "all"
}

const tasks = [
  {
    id: "TASK-001",
    title: "Fix leaking faucet in Room 203",
    resort: "Bishoftu",
    category: "Plumbing",
    priority: "High",
    status: "In Progress",
    progress: 60,
    dueDate: "2023-04-15",
    assignee: {
      name: "Tekle Wolde",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "TW",
    },
  },
  {
    id: "TASK-002",
    title: "Replace broken chair in restaurant",
    resort: "Entoto",
    category: "Furniture",
    priority: "Medium",
    status: "Pending",
    progress: 0,
    dueDate: "2023-04-18",
    assignee: {
      name: "Unassigned",
      avatar: "",
      initials: "UA",
    },
  },
  {
    id: "TASK-003",
    title: "Fix AC unit in Room 105",
    resort: "Lake Tana",
    category: "HVAC",
    priority: "Critical",
    status: "In Progress",
    progress: 30,
    dueDate: "2023-04-12",
    assignee: {
      name: "Abebe Kebede",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AK",
    },
  },
  {
    id: "TASK-004",
    title: "Replace light bulbs in hallway",
    resort: "Awash Falls",
    category: "Electrical",
    priority: "Low",
    status: "Completed",
    progress: 100,
    dueDate: "2023-04-10",
    assignee: {
      name: "Frehiwot Tadesse",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "FT",
    },
  },
  {
    id: "TASK-005",
    title: "Clean pool filters",
    resort: "Bishoftu",
    category: "Maintenance",
    priority: "Medium",
    status: "Completed",
    progress: 100,
    dueDate: "2023-04-09",
    assignee: {
      name: "Solomon Hailu",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SH",
    },
  },
  {
    id: "TASK-006",
    title: "Repair broken shower head in Room 302",
    resort: "Entoto",
    category: "Plumbing",
    priority: "High",
    status: "In Progress",
    progress: 75,
    dueDate: "2023-04-14",
    assignee: {
      name: "Tigist Mengistu",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "TM",
    },
  },
  {
    id: "TASK-007",
    title: "Fix TV remote in Room 401",
    resort: "Lake Tana",
    category: "Electronics",
    priority: "Low",
    status: "Pending",
    progress: 0,
    dueDate: "2023-04-20",
    assignee: {
      name: "Unassigned",
      avatar: "",
      initials: "UA",
    },
  },
]

export function TasksList({ status = "all", priority = "all" }: TasksListProps) {
  const [sortBy, setSortBy] = useState("dueDate")
  const [sortOrder, setSortOrder] = useState("asc")

  // Filter tasks based on status and priority
  const filteredTasks = tasks.filter((task) => {
    if (status === "all" && priority === "all") {
      return true
    }
    if (status === "all") {
      return priority === task.priority.toLowerCase()
    }
    if (priority === "all") {
      if (status === "pending") {
        return task.status === "Pending"
      }
      if (status === "in-progress") {
        return task.status === "In Progress"
      }
      if (status === "completed") {
        return task.status === "Completed"
      }
    }
    if (status === "pending") {
      return task.status === "Pending" && (priority === "all" || priority === task.priority.toLowerCase())
    }
    if (status === "in-progress") {
      return task.status === "In Progress" && (priority === "all" || priority === task.priority.toLowerCase())
    }
    if (status === "completed") {
      return task.status === "Completed" && (priority === "all" || priority === task.priority.toLowerCase())
    }
    return true
  })

  return (
    <div className="space-y-4">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-medium text-muted-foreground">
              <th className="p-2 w-[100px]">ID</th>
              <th className="p-2">Task</th>
              <th className="p-2">Resort</th>
              <th className="p-2">Category</th>
              <th className="p-2">Due Date</th>
              <th className="p-2">Assignee</th>
              <th className="p-2">Priority</th>
              <th className="p-2">Progress</th>
              <th className="p-2 w-[80px]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id} className="border-b">
                <td className="p-2 text-sm">{task.id}</td>
                <td className="p-2 text-sm font-medium">{task.title}</td>
                <td className="p-2 text-sm">{task.resort}</td>
                <td className="p-2 text-sm">{task.category}</td>
                <td className="p-2 text-sm">{task.dueDate}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      {task.assignee.avatar ? (
                        <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                      ) : null}
                      <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">{task.assignee.name}</div>
                  </div>
                </td>
                <td className="p-2">
                  <Badge
                    variant={
                      task.priority === "Critical"
                        ? "destructive"
                        : task.priority === "High"
                          ? "default"
                          : task.priority === "Medium"
                            ? "secondary"
                            : "outline"
                    }
                  >
                    {task.priority}
                  </Badge>
                </td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <Progress value={task.progress} className="h-2 w-[60px]" />
                    <span className="text-xs">{task.progress}%</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-end">
                    <Link href={`/tasks/${task.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View task</span>
                      </Button>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Assign</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
