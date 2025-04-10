"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Camera, ArrowLeft, Upload, Save } from "lucide-react"
import { ResortSelector, resorts } from "@/components/dashboard/resort-selector"
import { Badge } from "@/components/ui/badge"

const resortsConst = [
  { value: "beachside", label: "Beachside Resort" },
  { value: "mountainview", label: "Mountainview Lodge" },
  { value: "citycenter", label: "City Center Hotel" },
]

export default function NewInspectionPage() {
  const router = useRouter()
  const [selectedResort, setSelectedResort] = useState("")

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">New Inspection</h1>
          <p className="text-muted-foreground">Create a new inspection report</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Inspection Details</CardTitle>
            <CardDescription>Enter the basic information about this inspection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="inspection-type">Inspection Type</Label>
                <Select>
                  <SelectTrigger id="inspection-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="housekeeping">Housekeeping</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="front-desk">Front Desk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="resort">Resort</Label>
                <ResortSelector value={selectedResort} onValueChange={setSelectedResort} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Specific Location</Label>
                <Input id="location" placeholder="e.g., Room 203, Restaurant, Pool Area" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Inspection Date</Label>
                <Input id="date" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">General Notes</Label>
              <Textarea id="notes" placeholder="Enter any general notes about this inspection" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="checklist">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="checklist">Checklist</TabsTrigger>
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="photos">Photos & Media</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="checklist" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inspection Checklist</CardTitle>
                <CardDescription>Complete the standardized checklist for this inspection type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Cleanliness Standards</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-1" />
                      <Label htmlFor="item-1" className="text-sm font-normal">
                        Floors are clean and free of debris
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-2" />
                      <Label htmlFor="item-2" className="text-sm font-normal">
                        Surfaces are dusted and sanitized
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-3" />
                      <Label htmlFor="item-3" className="text-sm font-normal">
                        Bathroom fixtures are clean and sanitized
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-4" />
                      <Label htmlFor="item-4" className="text-sm font-normal">
                        Linens are fresh and properly placed
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Maintenance Items</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-5" />
                      <Label htmlFor="item-5" className="text-sm font-normal">
                        Lighting fixtures are functional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-6" />
                      <Label htmlFor="item-6" className="text-sm font-normal">
                        Plumbing is working properly
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-7" />
                      <Label htmlFor="item-7" className="text-sm font-normal">
                        HVAC system is operational
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-8" />
                      <Label htmlFor="item-8" className="text-sm font-normal">
                        Furniture is in good condition
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Safety & Security</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-9" />
                      <Label htmlFor="item-9" className="text-sm font-normal">
                        Smoke detectors are functional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-10" />
                      <Label htmlFor="item-10" className="text-sm font-normal">
                        Emergency exits are clear and accessible
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-11" />
                      <Label htmlFor="item-11" className="text-sm font-normal">
                        Door locks and security features work properly
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="item-12" />
                      <Label htmlFor="item-12" className="text-sm font-normal">
                        First aid kit is stocked and accessible
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="issues" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Report Issues</CardTitle>
                <CardDescription>Document any issues that require attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue-title">Issue Title</Label>
                      <Input id="issue-title" placeholder="Brief description of the issue" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issue-category">Category</Label>
                      <Select>
                        <SelectTrigger id="issue-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="furniture">Furniture</SelectItem>
                          <SelectItem value="cleanliness">Cleanliness</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issue-description">Description</Label>
                    <Textarea id="issue-description" placeholder="Detailed description of the issue" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue-priority">Priority</Label>
                      <Select>
                        <SelectTrigger id="issue-priority">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critical">Critical</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issue-location">Specific Location</Label>
                      <Input id="issue-location" placeholder="Where exactly is the issue?" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button type="button" variant="outline" className="gap-2">
                      <Camera className="h-4 w-4" />
                      Add Photo
                    </Button>
                    <Button type="button" variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Media
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="button">Add Issue</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Photos & Media</CardTitle>
                <CardDescription>Upload photos and videos to document the inspection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <h3 className="font-medium">Drag & drop files here</h3>
                    <p className="text-sm text-muted-foreground">or click to browse files from your device</p>
                    <Button type="button" variant="outline" className="mt-2">
                      Browse Files
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="relative aspect-square rounded-md bg-muted flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="relative aspect-square rounded-md bg-muted flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="relative aspect-square rounded-md bg-muted flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="relative aspect-square rounded-md bg-muted flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="preview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inspection Preview</CardTitle>
                <CardDescription>Review your inspection before submission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Inspection Type</h3>
                      <p className="font-medium">Housekeeping</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Resort</h3>
                      <p className="font-medium">
                        {selectedResort ? resorts.find((r) => r.value === selectedResort)?.label : "Not selected"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                      <p className="font-medium">Room 203</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
                      <p className="font-medium">April 10, 2023</p>
                    </div>
                  </div>

                  <div className="space-y-2 border-b pb-4">
                    <h3 className="font-medium">Checklist Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Cleanliness Standards</span>
                        <span className="text-sm font-medium">3/4 Complete</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Maintenance Items</span>
                        <span className="text-sm font-medium">2/4 Complete</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Safety & Security</span>
                        <span className="text-sm font-medium">4/4 Complete</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 border-b pb-4">
                    <h3 className="font-medium">Reported Issues (2)</h3>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Leaking faucet in bathroom</h4>
                          <Badge>Plumbing</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Continuous dripping from the sink faucet. Needs immediate attention.
                        </p>
                        <div className="flex justify-between mt-2">
                          <span className="text-sm">Location: Main bathroom</span>
                          <Badge variant="outline">High Priority</Badge>
                        </div>
                      </div>

                      <div className="bg-muted p-3 rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Damaged chair leg</h4>
                          <Badge>Furniture</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Chair by the desk has a wobbly leg that needs repair.
                        </p>
                        <div className="flex justify-between mt-2">
                          <span className="text-sm">Location: Desk area</span>
                          <Badge variant="outline">Medium Priority</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Photos & Media</h3>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="aspect-square bg-muted rounded-md"></div>
                      <div className="aspect-square bg-muted rounded-md"></div>
                      <div className="aspect-square bg-muted rounded-md"></div>
                      <div className="aspect-square bg-muted rounded-md"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <CardFooter className="flex justify-between px-0">
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              const previewTab = document.querySelector('[value="preview"]')
              if (previewTab) {
                ;(previewTab as HTMLElement).click()
              }
            }}
          >
            Preview
          </Button>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Inspection
          </Button>
        </div>
      </CardFooter>
    </div>
  )
}
