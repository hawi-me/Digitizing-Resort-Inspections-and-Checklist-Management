import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, SlidersHorizontal } from "lucide-react"
import { TasksList } from "@/components/tasks/tasks-list"

export default function TasksPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
          <p className="text-muted-foreground">Manage and track maintenance tasks across all resorts</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search tasks..." className="w-full bg-background pl-8" />
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
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>All Tasks</CardTitle>
              <CardDescription>Showing all maintenance tasks across all resorts</CardDescription>
            </CardHeader>
            <CardContent>
              <TasksList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Tasks that are waiting to be assigned or started</CardDescription>
            </CardHeader>
            <CardContent>
              <TasksList status="pending" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="in-progress" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>In Progress Tasks</CardTitle>
              <CardDescription>Tasks that are currently being worked on</CardDescription>
            </CardHeader>
            <CardContent>
              <TasksList status="in-progress" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Completed Tasks</CardTitle>
              <CardDescription>Tasks that have been completed and verified</CardDescription>
            </CardHeader>
            <CardContent>
              <TasksList status="completed" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
