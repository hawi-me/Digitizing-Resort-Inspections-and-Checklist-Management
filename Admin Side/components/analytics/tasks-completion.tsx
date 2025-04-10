"use client"

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const completionData = [
  {
    name: "Week 1",
    completed: 12,
    pending: 8,
    overdue: 2,
  },
  {
    name: "Week 2",
    completed: 15,
    pending: 6,
    overdue: 1,
  },
  {
    name: "Week 3",
    completed: 18,
    pending: 5,
    overdue: 3,
  },
  {
    name: "Week 4",
    completed: 14,
    pending: 7,
    overdue: 2,
  },
  {
    name: "Week 5",
    completed: 20,
    pending: 4,
    overdue: 1,
  },
  {
    name: "Week 6",
    completed: 22,
    pending: 3,
    overdue: 0,
  },
]

const timeToCompleteData = [
  {
    name: "Plumbing",
    time: 2.3,
  },
  {
    name: "Electrical",
    time: 3.1,
  },
  {
    name: "Furniture",
    time: 1.8,
  },
  {
    name: "HVAC",
    time: 4.2,
  },
  {
    name: "Cleaning",
    time: 1.2,
  },
  {
    name: "Other",
    time: 2.5,
  },
]

const staffPerformanceData = [
  {
    name: "Tekle",
    tasks: 28,
    avgTime: 1.8,
  },
  {
    name: "Abebe",
    tasks: 22,
    avgTime: 2.2,
  },
  {
    name: "Frehiwot",
    tasks: 25,
    avgTime: 1.5,
  },
  {
    name: "Solomon",
    tasks: 20,
    avgTime: 2.0,
  },
  {
    name: "Tigist",
    tasks: 30,
    avgTime: 1.7,
  },
]

export function TasksCompletion() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Task Completion Trends</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={completionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="completed" stackId="1" stroke="#10b981" fill="#10b981" name="Completed" />
            <Area type="monotone" dataKey="pending" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Pending" />
            <Area type="monotone" dataKey="overdue" stackId="1" stroke="#ef4444" fill="#ef4444" name="Overdue" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Average Time to Complete by Category</CardTitle>
            <CardDescription>Measured in days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={timeToCompleteData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" stroke="#888888" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#888888" fontSize={12} />
                <Tooltip formatter={(value) => [`${value} days`, "Avg. Time"]} />
                <Bar dataKey="time" fill="#4f46e5" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Staff Performance</CardTitle>
            <CardDescription>Tasks completed and average time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={staffPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis yAxisId="left" orientation="left" stroke="#888888" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar y fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="tasks" fill="#4f46e5" name="Tasks Completed" />
                <Bar yAxisId="right" dataKey="avgTime" fill="#10b981" name="Avg. Time (days)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">AI Insights</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <div className="space-y-2">
            <h4 className="font-medium">Efficiency Trends</h4>
            <p className="text-sm text-muted-foreground">
              Task completion efficiency has improved by 23% over the last 6 weeks. The implementation of the digital
              tracking system has contributed significantly to this improvement.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Staff Performance</h4>
            <p className="text-sm text-muted-foreground">
              Tigist consistently completes the most tasks with above-average efficiency. Consider having her conduct
              training sessions for other staff members.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Bottlenecks</h4>
            <p className="text-sm text-muted-foreground">
              HVAC repairs take significantly longer than other categories. Consider specialized training or additional
              equipment to improve efficiency in this area.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
