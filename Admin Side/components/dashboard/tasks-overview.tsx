"use client"

import { Progress } from "@/components/ui/progress"

const tasks = [
  {
    department: "Housekeeping",
    total: 24,
    completed: 18,
    color: "#4f46e5",
  },
  {
    department: "Maintenance",
    total: 32,
    completed: 21,
    color: "#0ea5e9",
  },
  {
    department: "Food & Beverage",
    total: 18,
    completed: 15,
    color: "#10b981",
  },
  {
    department: "Front Desk",
    total: 12,
    completed: 10,
    color: "#f59e0b",
  },
  {
    department: "Security",
    total: 8,
    completed: 8,
    color: "#6b7280",
  },
]

export function TasksOverview() {
  return (
    <div className="space-y-6">
      {tasks.map((task) => (
        <div key={task.department} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{task.department}</div>
            <div className="text-sm text-muted-foreground">
              {task.completed}/{task.total}
            </div>
          </div>
          <Progress
            value={(task.completed / task.total) * 100}
            className="h-2"
            indicatorClassName={`bg-[${task.color}]`}
          />
        </div>
      ))}
    </div>
  )
}
