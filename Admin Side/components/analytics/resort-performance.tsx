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
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"

const data = [
  {
    resort: "Bishoftu",
    issues: 28,
    taskCompletion: 85,
    responseTime: 1.2,
    guestSatisfaction: 4.2,
  },
  {
    resort: "Entoto",
    issues: 22,
    taskCompletion: 78,
    responseTime: 1.8,
    guestSatisfaction: 3.9,
  },
  {
    resort: "Lake Tana",
    issues: 18,
    taskCompletion: 92,
    responseTime: 0.9,
    guestSatisfaction: 4.5,
  },
  {
    resort: "Awash Falls",
    issues: 24,
    taskCompletion: 81,
    responseTime: 1.5,
    guestSatisfaction: 4.0,
  },
]

const radarData = [
  {
    subject: "Maintenance",
    Bishoftu: 85,
    Entoto: 78,
    "Lake Tana": 92,
    "Awash Falls": 81,
  },
  {
    subject: "Cleanliness",
    Bishoftu: 88,
    Entoto: 82,
    "Lake Tana": 90,
    "Awash Falls": 85,
  },
  {
    subject: "Response Time",
    Bishoftu: 78,
    Entoto: 70,
    "Lake Tana": 95,
    "Awash Falls": 75,
  },
  {
    subject: "Issue Resolution",
    Bishoftu: 82,
    Entoto: 75,
    "Lake Tana": 88,
    "Awash Falls": 80,
  },
  {
    subject: "Guest Satisfaction",
    Bishoftu: 84,
    Entoto: 78,
    "Lake Tana": 90,
    "Awash Falls": 80,
  },
]

export function ResortPerformance() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Resort Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart outerRadius={90} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Bishoftu" dataKey="Bishoftu" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
            <Radar name="Entoto" dataKey="Entoto" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
            <Radar name="Lake Tana" dataKey="Lake Tana" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
            <Radar name="Awash Falls" dataKey="Awash Falls" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Key Metrics by Resort</h3>
        <div className="text-xs text-muted-foreground mb-2">
          Issues (count) | Task Completion (%) | Response Time (days) | Guest Satisfaction (1-5)
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="resort" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Tooltip />
            <Legend />
            <Bar dataKey="issues" fill="#ef4444" name="Issues" />
            <Bar dataKey="taskCompletion" fill="#10b981" name="Task Completion %" />
            <Bar dataKey="responseTime" fill="#0ea5e9" name="Response Time (days)" />
            <Bar dataKey="guestSatisfaction" fill="#f59e0b" name="Guest Satisfaction" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
