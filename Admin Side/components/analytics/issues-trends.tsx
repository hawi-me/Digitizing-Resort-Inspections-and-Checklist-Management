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
  Cell,
  Pie,
  PieChart,
} from "recharts"

const monthlyData = [
  {
    name: "Jan",
    plumbing: 8,
    electrical: 5,
    furniture: 3,
    hvac: 6,
    other: 2,
  },
  {
    name: "Feb",
    plumbing: 6,
    electrical: 7,
    furniture: 4,
    hvac: 5,
    other: 3,
  },
  {
    name: "Mar",
    plumbing: 7,
    electrical: 4,
    furniture: 6,
    hvac: 3,
    other: 2,
  },
  {
    name: "Apr",
    plumbing: 9,
    electrical: 6,
    furniture: 5,
    hvac: 7,
    other: 4,
  },
  {
    name: "May",
    plumbing: 5,
    electrical: 8,
    furniture: 3,
    hvac: 4,
    other: 2,
  },
  {
    name: "Jun",
    plumbing: 7,
    electrical: 5,
    furniture: 4,
    hvac: 6,
    other: 3,
  },
]

const categoryData = [
  { name: "Plumbing", value: 42, color: "#4f46e5" },
  { name: "Electrical", value: 35, color: "#0ea5e9" },
  { name: "Furniture", value: 25, color: "#10b981" },
  { name: "HVAC", value: 31, color: "#f59e0b" },
  { name: "Other", value: 16, color: "#6b7280" },
]

export function IssuesTrends() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Issues by Category Over Time</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Tooltip />
            <Legend />
            <Bar dataKey="plumbing" fill="#4f46e5" name="Plumbing" />
            <Bar dataKey="electrical" fill="#0ea5e9" name="Electrical" />
            <Bar dataKey="furniture" fill="#10b981" name="Furniture" />
            <Bar dataKey="hvac" fill="#f59e0b" name="HVAC" />
            <Bar dataKey="other" fill="#6b7280" name="Other" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Issues by Category</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} issues`, "Count"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">AI Insights</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="space-y-2">
              <h4 className="font-medium">Recurring Issues</h4>
              <p className="text-sm text-muted-foreground">
                Plumbing issues show a consistent pattern in Bishoftu resort, particularly in rooms 203-208. Consider a
                preventive maintenance schedule.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Seasonal Patterns</h4>
              <p className="text-sm text-muted-foreground">
                HVAC issues increase by 40% during summer months. Schedule preventive maintenance in spring to reduce
                downtime.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Efficiency Recommendation</h4>
              <p className="text-sm text-muted-foreground">
                Electrical issues take 30% longer to resolve than other categories. Consider additional training or
                specialized contractors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
