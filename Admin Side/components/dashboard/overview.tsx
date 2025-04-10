"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    housekeeping: 21,
    maintenance: 17,
    foodBeverage: 14,
  },
  {
    name: "Feb",
    housekeeping: 15,
    maintenance: 23,
    foodBeverage: 18,
  },
  {
    name: "Mar",
    housekeeping: 27,
    maintenance: 19,
    foodBeverage: 15,
  },
  {
    name: "Apr",
    housekeeping: 19,
    maintenance: 25,
    foodBeverage: 22,
  },
  {
    name: "May",
    housekeeping: 24,
    maintenance: 18,
    foodBeverage: 16,
  },
  {
    name: "Jun",
    housekeeping: 28,
    maintenance: 22,
    foodBeverage: 19,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="housekeeping" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Housekeeping" />
        <Bar dataKey="maintenance" fill="#0ea5e9" radius={[4, 4, 0, 0]} name="Maintenance" />
        <Bar dataKey="foodBeverage" fill="#10b981" radius={[4, 4, 0, 0]} name="Food & Beverage" />
      </BarChart>
    </ResponsiveContainer>
  )
}
