"use client"

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ReferenceLine,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const predictiveData = [
  {
    month: "Jan",
    actual: 12,
    predicted: 14,
  },
  {
    month: "Feb",
    actual: 15,
    predicted: 16,
  },
  {
    month: "Mar",
    actual: 18,
    predicted: 17,
  },
  {
    month: "Apr",
    actual: 14,
    predicted: 15,
  },
  {
    month: "May",
    actual: 20,
    predicted: 19,
  },
  {
    month: "Jun",
    actual: 22,
    predicted: 21,
  },
  {
    month: "Jul",
    predicted: 24,
  },
  {
    month: "Aug",
    predicted: 26,
  },
  {
    month: "Sep",
    predicted: 22,
  },
  {
    month: "Oct",
    predicted: 18,
  },
  {
    month: "Nov",
    predicted: 20,
  },
  {
    month: "Dec",
    predicted: 23,
  },
]

const maintenanceAlerts = [
  {
    id: 1,
    system: "HVAC System",
    location: "Bishoftu - Main Building",
    prediction: "Potential failure within 30 days",
    confidence: "High",
    recommendation: "Schedule preventive maintenance within 2 weeks",
  },
  {
    id: 2,
    system: "Water Heater",
    location: "Lake Tana - Room Block C",
    prediction: "Efficiency degradation detected",
    confidence: "Medium",
    recommendation: "Inspect and clean system components",
  },
  {
    id: 3,
    system: "Pool Filtration",
    location: "Entoto - Main Pool",
    prediction: "Filter replacement needed within 45 days",
    confidence: "High",
    recommendation: "Order replacement parts and schedule maintenance",
  },
  {
    id: 4,
    system: "Kitchen Refrigeration",
    location: "Awash Falls - Main Kitchen",
    prediction: "Compressor showing early warning signs",
    confidence: "Medium",
    recommendation: "Monitor closely and schedule inspection",
  },
]

export function PredictiveMaintenance() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Maintenance Needs Forecast</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={predictiveData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{ r: 6 }}
              name="Actual Maintenance"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 6 }}
              name="Predicted Maintenance"
            />
            <ReferenceLine
              x="Jun"
              stroke="#888888"
              strokeDasharray="3 3"
              label={{ value: "Current", position: "top" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">AI-Generated Maintenance Alerts</h3>
        <div className="space-y-4">
          {maintenanceAlerts.map((alert) => (
            <Card key={alert.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">{alert.system}</CardTitle>
                  <Badge variant={alert.confidence === "High" ? "destructive" : "secondary"}>
                    {alert.confidence} Confidence
                  </Badge>
                </div>
                <CardDescription>{alert.location}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium">Prediction: </span>
                    <span className="text-sm">{alert.prediction}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Recommendation: </span>
                    <span className="text-sm">{alert.recommendation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">AI Insights</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <div className="space-y-2">
            <h4 className="font-medium">Seasonal Patterns</h4>
            <p className="text-sm text-muted-foreground">
              Maintenance needs are predicted to increase by 30% during the upcoming high season. Consider scheduling
              preventive maintenance now to avoid disruptions.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Cost Savings Opportunity</h4>
            <p className="text-sm text-muted-foreground">
              Implementing the recommended preventive maintenance schedule could reduce emergency repairs by 45%,
              resulting in estimated savings of $12,000 over the next quarter.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">System Reliability</h4>
            <p className="text-sm text-muted-foreground">
              HVAC systems across all resorts show similar wear patterns. Consider a bulk replacement program over the
              next 18 months to standardize equipment and reduce maintenance costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
