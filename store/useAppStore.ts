import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email?: string
  avatar?: string
}

interface AppStore {
  // 사용자 정보
  user: User | null
  setUser: (user: User | null) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      // 사용자 정보
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'app-storage',
      // 사용자 정보만 저장
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
)