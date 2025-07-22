import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SidebarStore } from './types'

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      collapsed: false,
      toggle: () => set((state) => ({ collapsed: !state.collapsed })),
      setCollapsed: (collapsed) => set({ collapsed }),
    }),
    {
      name: 'sidebar-state',
    }
  )
)