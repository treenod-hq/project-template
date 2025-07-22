"use client"

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Icon } from "@iconify/react"

export default function ProfilePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto py-4 px-6">
          <p>로딩 중...</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return null
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-[1600px] mx-auto py-4 px-6">
        <div className="flex items-center gap-2 mb-6">
          <Icon icon="solar:user-linear" className="h-7 w-7 text-primary" />
          <span className="text-2xl text-primary font-extrabold">
            프로필
          </span>
        </div>
        
        <div className="mt-8 p-6 rounded-lg border bg-card">
          <h2 className="text-xl font-semibold mb-4">사용자 정보</h2>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              <span className="font-medium">이름:</span> {user.name}
            </p>
            {user.email && (
              <p className="text-muted-foreground">
                <span className="font-medium">이메일:</span> {user.email}
              </p>
            )}
            <p className="text-muted-foreground">
              <span className="font-medium">ID:</span> {user.id}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}