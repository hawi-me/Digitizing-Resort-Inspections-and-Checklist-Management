import type { Metadata } from "next"
import DashboardPage from "@/components/dashboard-page"

export const metadata: Metadata = {
  title: "Kuriftu Resort Inspection System",
  description: "Digital tool for resort inspections and maintenance management",
}

export default function Home() {
  return <DashboardPage />
}
