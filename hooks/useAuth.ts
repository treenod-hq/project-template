'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/store/useAppStore'

export function useAuth() {
  const { user, setUser } = useAppStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status on mount
    setIsLoading(true)
    fetch('/api/logto/user')
      .then(res => {
        // 응답 상태 확인
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        // Content-Type 확인
        const contentType = res.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('응답이 JSON 형식이 아닙니다')
        }
        return res.json()
      })
      .then(data => {
        setUser(data.user)
      })
      .catch(error => {
        console.error('인증 상태 확인 중 오류 발생:', error)
        // 오류 발생 시 user를 null로 설정
        setUser(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setUser])

  const signIn = () => {
    window.location.href = '/api/logto/sign-in'
  }

  const signOut = () => {
    window.location.href = '/api/logto/sign-out'
  }

  return {
    user,
    isLoading,
    signIn,
    signOut,
    isAuthenticated: !!user,
  }
}