import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { InspectionsList } from "@/components/inspections/inspections-list"

export default function InspectionsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inspections</h2>
          <p className="text-muted-foreground">Manage and track all inspection reports</p>
        </div>
        <Link href="/inspections/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Inspection
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search inspections..." className="w-full bg-background pl-8" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Advanced
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Inspections</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="issues">With Issues</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>All Inspections</CardTitle>
              <CardDescription>Showing all inspection reports across all resorts</CardDescription>
            </CardHeader>
            <CardContent>
              <InspectionsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Pending Inspections</CardTitle>
              <CardDescription>Inspections that are in progress or awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <InspectionsList status="pending" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Completed Inspections</CardTitle>
              <CardDescription>Inspections that have been completed and reviewed</CardDescription>
            </CardHeader>
            <CardContent>
              <InspectionsList status="completed" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="issues" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Inspections with Issues</CardTitle>
              <CardDescription>Inspections that have reported issues requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <InspectionsList hasIssues={true} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
