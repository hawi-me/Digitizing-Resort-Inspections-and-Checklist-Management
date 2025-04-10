"use client"

import { ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line, LineChart } from "recharts"

const data = [
  {
    name: "Jan",
    inspections: 21,
    issues: 14,
  },
  {
    name: "Feb",
    inspections: 15,
    issues: 18,
  },
  {
    name: "Mar",
    inspections: 27,
    issues: 15,
  },
  {
    name: "Apr",
    inspections: 19,
    issues: 22,
  },
  {
    name: "May",
    inspections: 24,
    issues: 16,
  },
  {
    name: "Jun",
    inspections: 28,
    issues: 19,
  },
  {
    name: "Jul",
    inspections: 30,
    issues: 15,
  },
  {
    name: "Aug",
    inspections: 32,
    issues: 17,
  },
  {
    name: "Sep",
    inspections: 25,
    issues: 12,
  },
  {
    name: "Oct",
    inspections: 29,
    issues: 14,
  },
  {
    name: "Nov",
    inspections: 33,
    issues: 20,
  },
  {
    name: "Dec",
    inspections: 31,
    issues: 16,
  },
]

export function AnalyticsOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="inspections"
          stroke="#4f46e5"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          name="Inspections"
        />
        <Line type="monotone" dataKey="issues" stroke="#ef4444" strokeWidth={2} activeDot={{ r: 8 }} name="Issues" />
      </LineChart>
    </ResponsiveContainer>
  )
}
