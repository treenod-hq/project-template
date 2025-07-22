"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { SidebarMenuItem as SidebarMenuItemType } from "./types"
import { useSidebarStore } from "./sidebar-store"
import React from "react"
import { StaticIcon } from "@/components/static-icon"

interface SidebarMenuItemProps {
  item: SidebarMenuItemType
  isActive: boolean
  showLock?: boolean
  collapsed?: boolean
}

export function SidebarMenuItem({ 
  item, 
  isActive,
  showLock = false,
  collapsed: collapsedProp
}: SidebarMenuItemProps) {
  const store = useSidebarStore()
  // props로 전달된 값 우선, 없으면 스토어 값 사용
  const collapsed = collapsedProp !== undefined ? collapsedProp : store.collapsed
  
  // 아이콘 렌더링 함수
  const renderIcon = () => {
    if (typeof item.icon === 'string') {
      return <StaticIcon icon={item.icon} className="h-7 w-7" />
    }
    return item.icon
  }

  const buttonContent = (
    <Button 
      variant="ghost" 
      className={cn(
        "w-full h-11 font-extrabold rounded-lg transition-all",
        collapsed ? 'justify-center p-0' : 'justify-start gap-3',
        isActive 
          ? 'text-primary bg-primary/10 hover:bg-primary/10 hover:text-primary' 
          : 'text-muted-foreground hover:text-foreground',
        item.disabled && 'opacity-50 cursor-not-allowed',
        item.className
      )}
      disabled={item.disabled}
    >
      <span className={cn(
        "flex-shrink-0",
        showLock && !collapsed && 'opacity-50'
      )}>
        {renderIcon()}
      </span>
      {!collapsed && (
        <>
          <span className="flex-1 text-left">{item.label}</span>
          {showLock && (
            <span className="ml-auto opacity-50">
              <StaticIcon icon="solar:lock-bold-duotone" className="h-4 w-4" />
            </span>
          )}
          {item.badge && (
            <span className="ml-auto">{item.badge}</span>
          )}
        </>
      )}
    </Button>
  )

  const linkElement = (
    <Link 
      href={item.href} 
      className="block" 
      onClick={item.onClick}
    >
      {buttonContent}
    </Link>
  )

  if (collapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          {linkElement}
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={8}>
          <p>{item.label}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return linkElement
}