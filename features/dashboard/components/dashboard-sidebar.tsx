"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationSwitcher, UserButton, useClerk } from "@clerk/nextjs";
import { Home,LayoutGrid, Volume2, AudioLines, Settings, Headphones } from "lucide-react";
import Link from "next/link";
import { url } from "inspector";

interface MenuItem{
    title : string,
    Url? : string,
    icon : LucideIcon,
    onclick? : ()=> void
}
interface NavSectionProps{
    label? : string,
    items : MenuItem[],
    pathname: string,
}

function NavSection({label , pathname, items}: NavSectionProps){
    return (
        <SidebarGroup>
          {label && (
            <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">
                {label}
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
                {items.map((item)=>(
                    <SidebarMenuItem key={item.title}>
                         <SidebarMenuButton
                         asChild = {!!item.Url}
                         isActive = {
                            item.Url
                            ? item.Url === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.Url)
                            : false
                         }>

                         </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
    )
}