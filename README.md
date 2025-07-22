# Project Template

> 🚀 빠른 프로젝트 시작을 위한 GitHub Template 저장소

이 프로젝트는 **GitHub Template**으로, 새로운 프로젝트를 시작할 때 필요한 모든 기본 설정과 컴포넌트가 포함되어 있습니다.

## 🎯 주요 특징

- ⚡ **Next.js 15** - App Router 기반의 최신 React 프레임워크
- 🎨 **Tailwind CSS v4** - 최신 버전의 유틸리티 우선 CSS 프레임워크
- 🧩 **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- 🔐 **Logto 인증** - 안전한 사용자 인증 시스템
- 📱 **반응형 사이드바** - 접기/펼치기 가능한 네비게이션
- 🌓 **다크모드 지원** - 시스템 설정 연동 테마 전환
- 🎭 **Framer Motion** - 부드러운 애니메이션
- 📦 **상태 관리** - Zustand를 이용한 전역 상태 관리

## 🚀 시작하기

### 1. 템플릿으로 새 저장소 생성

이 저장소의 "Use this template" 버튼을 클릭하여 새로운 프로젝트를 생성하세요.

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# Logto Configuration
LOGTO_ENDPOINT=your_logto_endpoint
LOGTO_APP_ID=your_app_id
LOGTO_APP_SECRET=your_app_secret
LOGTO_COOKIE_SECRET=your_cookie_secret_min_32_chars
LOGTO_BASE_URL=http://localhost:3000
```

### 4. 개발 서버 실행

```bash
npm run dev
```

## 📚 사용 가이드

### 아이콘 사용 방법

#### 1. 사이드바 내부 (StaticIcon 사용)

사이드바 내부에서는 `StaticIcon` 컴포넌트를 사용합니다:

```tsx
import { StaticIcon } from "@/components/static-icon"

<StaticIcon icon="solar:home-2-linear" className="h-5 w-5" />
```

#### 2. 사이드바 외부 (@iconify/react 사용)

페이지나 다른 컴포넌트에서는 `@iconify/react`를 직접 사용합니다:

```tsx
import { Icon } from "@iconify/react"

<Icon icon="solar:home-2-bold-duotone" className="h-7 w-7 text-primary" />
```

### 새로운 StaticIcon 추가 방법

사이드바에서 사용할 새로운 아이콘을 추가하려면:

1. `lib/icons.ts` 파일을 엽니다
2. 필요한 아이콘을 import하거나 커스텀 SVG를 정의합니다:

```typescript
// npm 패키지에서 import
import newIcon from '@iconify-icons/solar/new-icon'

// 또는 커스텀 SVG 정의
const customIcon = {
  body: '<svg 내용>',
  width: 24,
  height: 24
}

// icons 객체에 추가
export const icons = {
  // ... 기존 아이콘들
  'solar:new-icon': newIcon,
  'custom:icon': customIcon,
}
```

### 새로운 페이지 추가

1. `app` 디렉토리에 새 폴더를 생성합니다
2. `page.tsx` 파일을 생성합니다:

```tsx
import { Icon } from "@iconify/react"

export default function NewPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-[1600px] mx-auto py-4 px-6">
        <div className="flex items-center gap-2 mb-6">
          <Icon icon="solar:your-icon" className="h-7 w-7 text-primary" />
          <span className="text-2xl text-primary font-extrabold">
            페이지 제목
          </span>
        </div>
        {/* 페이지 내용 */}
      </div>
    </main>
  )
}
```

### 사이드바 메뉴 수정

`components/sidebar.tsx` 파일에서 메뉴 항목을 수정할 수 있습니다:

```tsx
const menuItems = [
  { icon: "solar:home-2-linear", label: "홈", href: "/" },
  { icon: "solar:folder-linear", label: "메뉴1", href: "/menu1" },
  // 새 메뉴 추가
]
```

## 🎨 테마 커스터마이징

### 색상 변경

`app/globals.css`에서 primary 색상을 변경할 수 있습니다:

```css
@theme {
  --color-primary: 45 100% 48%; /* HSL 형식 */
}
```

### 폰트 변경

현재 NanumSquareRound 폰트가 적용되어 있습니다. 다른 폰트로 변경하려면 `app/globals.css`를 수정하세요.

## 📁 프로젝트 구조

```
project-template/
├── app/                    # Next.js App Router
│   ├── api/               # API 라우트
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈 페이지
├── components/            # React 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── sidebar.tsx       # 사이드바 컴포넌트
│   └── static-icon.tsx   # 정적 아이콘 컴포넌트
├── hooks/                # 커스텀 React 훅
├── lib/                  # 유틸리티 함수
└── public/              # 정적 파일
    └── images/          # 이미지 파일
        └── logo/        # 로고 이미지
```

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: @iconify/react, @iconify-icons/solar
- **Authentication**: Logto
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Theme**: next-themes
- **Language**: TypeScript

## 📄 라이센스

MIT License

## 🤝 기여하기

이 템플릿을 개선하고 싶으시다면 PR을 보내주세요!

---

Made with ❤️ by Treenod HQ