"use client"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
const page = () => {
  return (
    <>
    <div>
      <Button size="lg" onClick={()=> toast.success("Hello World")}>ClickMEsss</Button>
    </div>
    </>
  )
}
export default page