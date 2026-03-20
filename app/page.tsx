"use client"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
const page = () => {
  return (
    <div className="p-6 flex items-center gap-3">
      <Button size="lg" onClick={() => toast.success("Hello World")}>Click me</Button>
    </div>
  )
}
export default page