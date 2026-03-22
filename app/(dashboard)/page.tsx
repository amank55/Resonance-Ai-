import { SidebarTrigger } from "@/components/ui/sidebar"

const page = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-background">
     <SidebarTrigger/>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
    </div>
  )
}
export default page