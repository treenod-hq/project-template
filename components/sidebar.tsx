"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { StaticIcon } from "@/components/static-icon"
import { 
  CollapsibleSidebar, 
  SidebarSection,
  useSidebarStore
} from "@/components/ui/collapsible-sidebar"
import Image from "next/image"
import { useAuth } from "@/hooks/useAuth"

export function Sidebar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { collapsed } = useSidebarStore()
  const { user, signIn, signOut } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="hidden md:flex w-[240px] bg-background p-4 flex-col h-full flex-shrink-0" />
  }

  // 사이드바 섹션 구성
  const sections: SidebarSection[] = [
    {
      id: "main",
      items: [
        {
          id: "home",
          href: "/",
          icon: <StaticIcon icon="solar:home-2-linear" className="h-7 w-7" />,
          label: "홈",
        },
        {
          id: "menu1",
          href: "/menu1",
          icon: <StaticIcon icon="solar:folder-linear" className="h-7 w-7" />,
          label: "메뉴1",
        },
        {
          id: "menu2",
          href: "/menu2",
          icon: <StaticIcon icon="solar:battery-low-linear" className="h-7 w-7" />,
          label: "메뉴2",
        },
        {
          id: "menu3",
          href: "/menu3",
          icon: <StaticIcon icon="solar:clapperboard-linear" className="h-7 w-7" />,
          label: "메뉴3",
        },
      ],
    },
  ]

  // 하단 섹션 컴포넌트
  const bottomSection = (
    <>
      {/* 테마 토글 */}
      {collapsed ? (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full h-11 p-0 flex items-center justify-center text-muted-foreground hover:text-foreground font-extrabold rounded-lg"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <div className="h-7 w-7 flex items-center justify-center">
                <StaticIcon icon={theme === "dark" ? "solar:moon-linear" : "solar:sun-linear"} className="h-7 w-7" />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={8}>
            <p>{theme === "dark" ? "다크 모드" : "라이트 모드"}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 h-11 text-muted-foreground hover:text-foreground font-extrabold rounded-lg"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <StaticIcon icon={theme === "dark" ? "solar:moon-linear" : "solar:sun-linear"} className="h-7 w-7" />
          {theme === "dark" ? "다크 모드" : "라이트 모드"}
        </Button>
      )}

      {/* 로그인/로그아웃 버튼 */}
      {user ? (
        <Button 
          className={`${collapsed ? 'w-full h-11 p-0 justify-center' : 'w-full h-auto p-2 justify-start gap-2'} bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold flex items-center`}
          onClick={signOut}
        >
          <div className="h-8 w-8 flex items-center justify-center flex-shrink-0">
            <StaticIcon icon="solar:exit-bold-duotone" className="h-7 w-7" />
          </div>
          {!collapsed && (
            <div className="text-sm font-extrabold whitespace-nowrap">
              로그아웃
            </div>
          )}
        </Button>
      ) : (
        <Button 
          className={`${collapsed ? 'w-full h-11 p-0 justify-center' : 'w-full h-auto p-2 justify-start gap-2'} bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold flex items-center`}
          onClick={signIn}
        >
          <div className="h-8 w-8 flex items-center justify-center flex-shrink-0">
            <StaticIcon icon="solar:login-3-bold-duotone" className="h-7 w-7" />
          </div>
          {!collapsed && (
            <div className="text-sm font-extrabold whitespace-nowrap">
              로그인
            </div>
          )}
        </Button>
      )}
    </>
  )

  return (
    <CollapsibleSidebar
      logo={{
        expanded: (
          <Image
            src="/images/logo/logo.png"
            alt="Project Template"
            height={32}
            width={160}
            className="h-8 w-auto"
            priority
          />
        ),
        collapsed: (
          <Image
            src="/images/logo/icon.png"
            alt="PT"
            height={32}
            width={32}
            className="h-8 w-auto"
            priority
          />
        ),
        href: "/",
      }}
      sections={sections}
      bottomSection={bottomSection}
      toggleButtonPosition="top"
    />
  )
}