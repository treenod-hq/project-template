import { ReactNode } from "react"

export interface SidebarMenuItem {
  id: string
  href: string
  icon: string | ReactNode
  label: string
  badge?: string | ReactNode
  requiresAuth?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
  disabled?: boolean
}

export interface SidebarSection {
  id: string
  title?: string
  items: SidebarMenuItem[]
  showTitleInCollapsed?: boolean
  className?: string
}

export interface SidebarLogo {
  expanded: string | ReactNode
  collapsed: string | ReactNode
  alt?: string
  href?: string
  className?: string
}

export interface CollapsibleSidebarProps {
  logo?: SidebarLogo
  sections: SidebarSection[]
  bottomSection?: ReactNode
  onAuthRequired?: () => void
  className?: string
  collapsedWidth?: string
  expandedWidth?: string
  showToggleButton?: boolean
  toggleButtonPosition?: "top" | "bottom"
  collapsed?: boolean
  onToggle?: () => void
}

export interface SidebarStore {
  collapsed: boolean
  toggle: () => void
  setCollapsed: (collapsed: boolean) => void
}