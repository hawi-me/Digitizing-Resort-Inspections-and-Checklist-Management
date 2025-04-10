import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsOverview } from "@/components/analytics/analytics-overview"
import { IssuesTrends } from "@/components/analytics/issues-trends"
import { TasksCompletion } from "@/components/analytics/tasks-completion"
import { ResortPerformance } from "@/components/analytics/resort-performance"
import { PredictiveMaintenance } from "@/components/analytics/predictive-maintenance"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">AI-powered insights and trend analysis</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="issues">Issues Analysis</TabsTrigger>
          <TabsTrigger value="tasks">Tasks Analysis</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">-8% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Task Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2 days</div>
                <p className="text-xs text-muted-foreground">-0.5 days from target</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Inspection & Issues Overview</CardTitle>
                <CardDescription>Trend analysis of inspections and reported issues</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <AnalyticsOverview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Resort Performance</CardTitle>
                <CardDescription>Comparison of key metrics across resorts</CardDescription>
              </CardHeader>
              <CardContent>
                <ResortPerformance />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="issues" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Issues Trends</CardTitle>
              <CardDescription>Analysis of issue categories and trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <IssuesTrends />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tasks Completion Analysis</CardTitle>
              <CardDescription>Detailed analysis of task completion rates and efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <TasksCompletion />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="predictive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Maintenance</CardTitle>
              <CardDescription>AI-powered predictions for maintenance needs</CardDescription>
            </CardHeader>
            <CardContent>
              <PredictiveMaintenance />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
