import {  quickActions } from "../data/quick-actions"
import { QuickActionCard } from "./quickActionCard"

export function QuickActionsPanel(){
   return (
    <div className="space-y-4">
        <h2 className="text-lg font-semibold">
            Quick Actions
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickActions.map((actions)=>(
               <QuickActionCard
               key = {actions.title}
               title = {actions.title}
               description = {actions.description}
               gradient = {actions.gradient}
               href = {actions.href}
               />
            ))}
        </div>
    </div>
   )
}