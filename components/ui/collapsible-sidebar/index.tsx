"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { CollapsibleSidebarProps, SidebarSection } from "./types"
import { useSidebarStore } from "./sidebar-store"
import { SidebarMenuItem } from "./sidebar-menu-item"
import React from "react"
import { StaticIcon } from "@/components/static-icon"
import { useAuth } from "@/hooks/useAuth"

export function CollapsibleSidebar({
  logo,
  sections,
  bottomSection,
  onAuthRequired,
  className,
  collapsedWidth = "80px",
  expandedWidth = "240px",
  showToggleButton = true,
  toggleButtonPosition = "top",
  collapsed: collapsedProp,
  onToggle,
}: CollapsibleSidebarProps) {
  const store = useSidebarStore()
  const collapsed = collapsedProp !== undefined ? collapsedProp : store.collapsed
  const toggle = onToggle || store.toggle
  const pathname = usePathname()
  
  const { user } = useAuth()

  // 토글 버튼 렌더링
  const renderToggleButton = () => {
    if (!showToggleButton) return null

    const button = (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            onClick={toggle}
            className={cn(
              "text-muted-foreground hover:text-foreground font-extrabold rounded-lg",
              collapsed ? "w-full h-11 p-0" : "h-8 w-8 p-0 hover:bg-accent/50 rounded-lg"
            )}
          >
            <StaticIcon 
              icon="solar:sidebar-minimalistic-bold-duotone" 
              className="h-5 w-5" 
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={8}>
          <p>{collapsed ? "사이드바 펼치기" : "사이드바 접기"}</p>
        </TooltipContent>
      </Tooltip>
    )

    return button
  }

  // 로고 렌더링
  const renderLogo = () => {
    if (!logo) return null

    return (
      <div className={cn(
        "mb-8",
        collapsed ? "flex justify-center" : "flex items-center justify-between"
      )}>
        <Link 
          href={logo.href || "/"} 
          className={cn("inline-block relative h-10 flex items-center", logo.className)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {collapsed ? (
              <motion.div
                key="collapsed-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                {typeof logo.collapsed === 'string' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.collapsed}
                    alt={logo.alt || "Logo Icon"}
                    className="cursor-pointer object-contain w-8 h-8"
                  />
                ) : (
                  logo.collapsed
                )}
              </motion.div>
            ) : (
              <motion.div
                key="expanded-logo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="flex items-center"
              >
                {typeof logo.expanded === 'string' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.expanded}
                    alt={logo.alt || "Logo"}
                    className="cursor-pointer object-contain w-auto h-8"
                  />
                ) : (
                  logo.expanded
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
        {!collapsed && toggleButtonPosition === "top" && renderToggleButton()}
      </div>
    )
  }

  // 섹션 렌더링
  const renderSection = (section: SidebarSection) => (
    <div key={section.id} className={cn("mb-6", section.className)}>
      {section.title && (!collapsed || section.showTitleInCollapsed) && (
        <h2 className={cn(
          "px-3 mb-2 text-xs font-extrabold text-muted-foreground uppercase tracking-wider",
          collapsed && "text-center"
        )}>
          {section.title}
        </h2>
      )}
      <div className="space-y-2">
        {section.items.map((item) => (
          <SidebarMenuItem
            key={item.id}
            item={{
              ...item,
              onClick: item.requiresAuth && !user && !item.onClick 
                ? (e) => {
                    e.preventDefault()
                    onAuthRequired?.()
                  }
                : item.onClick
            }}
            isActive={pathname === item.href}
            showLock={item.requiresAuth && !user}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  )

  return (
    <TooltipProvider>
      <motion.div
        className={cn(
          "hidden md:flex bg-background p-4 flex-col h-full flex-shrink-0",
          className
        )}
        animate={{ width: collapsed ? collapsedWidth : expandedWidth }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* 로고 영역 */}
        {renderLogo()}

        {/* 메뉴 섹션들 */}
        <nav className="flex flex-col gap-2 flex-1">
          {collapsed && toggleButtonPosition === "top" && (
            <div className="mb-2">{renderToggleButton()}</div>
          )}
          {sections.map(renderSection)}
        </nav>

        {/* 하단 영역 */}
        {(bottomSection || (toggleButtonPosition === "bottom" && collapsed)) && (
          <div className="mt-auto space-y-3">
            {collapsed && toggleButtonPosition === "bottom" && renderToggleButton()}
            {bottomSection}
          </div>
        )}
      </motion.div>
    </TooltipProvider>
  )
}

// Re-export types and store for convenience
export * from './types'
export { useSidebarStore } from './sidebar-store'
export { SidebarMenuItem } from './sidebar-menu-item'