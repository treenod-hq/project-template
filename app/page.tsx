import { Icon } from "@iconify/react"

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-[1600px] mx-auto py-4 px-6">
        <div className="flex items-center gap-2 mb-6">
          <Icon icon="solar:home-2-bold-duotone" className="h-7 w-7 text-primary" />
          <span className="text-2xl text-primary font-extrabold">
            홈
          </span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">환영합니다!</h1>
        <p className="text-muted-foreground">
          이것은 사이드바가 포함된 프로젝트 템플릿입니다.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-2">빠른 시작</h2>
            <p className="text-muted-foreground">
              사이드바를 사용하여 페이지 간을 탐색하세요.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-2">인증 통합</h2>
            <p className="text-muted-foreground">
              Logto를 사용한 사용자 인증이 준비되어 있습니다.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-2">모던 UI</h2>
            <p className="text-muted-foreground">
              Tailwind CSS와 shadcn/ui로 구축된 아름다운 인터페이스.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
