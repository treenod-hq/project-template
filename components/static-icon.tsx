import { icons } from "@/lib/icons"

interface StaticIconProps {
  icon: string
  className?: string
}

export function StaticIcon({ icon, className = "h-4 w-4" }: StaticIconProps) {
  const iconData = icons[icon as keyof typeof icons]
  
  if (!iconData) {
    return null
  }
  
  // Extract size from className
  const sizeMatch = className?.match(/h-(\d+)/)
  const size = sizeMatch ? parseInt(sizeMatch[1]) * 4 : 16
  
  return (
    <svg
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
      viewBox={`0 0 ${iconData.width} ${iconData.height}`}
      fill="currentColor"
      dangerouslySetInnerHTML={{ __html: iconData.body }}
    />
  )
}