import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickAction } from "../data/quick-actions";

type QuickActionCardProps = QuickAction

export function QuickActionCard({
    title,
     description,
     href,
     gradient    
}: QuickActionCardProps){
    return (
        <div className="flex gap-4 rounded-xl border bg-card p-3">

        </div>
    )
}