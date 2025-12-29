# Pilmin Frontend 프로젝트 세팅 가이드

이 문서는 Next.js 단일 앱을 Turborepo 모노레포로 전환한 과정을 기록합니다.

---

## 1. 기존 프로젝트 정리

```bash
# 기존 node_modules 및 lock 파일 삭제
rm -rf node_modules .next pnpm-lock.yaml package-lock.yaml
```

---

## 2. pnpm workspace 설정

### 2.1 pnpm-workspace.yaml 생성

```yaml
# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"
```

### 2.2 Turbo 설치

```bash
pnpm add -D turbo -w
```

> `-w` 플래그는 루트 워크스페이스에 설치한다는 의미입니다.

---

## 3. 디렉토리 구조 생성

```bash
# apps 디렉토리 (각 앱)
mkdir -p apps/web apps/admin/app apps/admin/public apps/user/app apps/user/public

# packages 디렉토리 (공유 패키지)
mkdir -p packages
```

---

## 4. 기존 앱 파일 이동

기존 Next.js 앱 파일들을 `apps/web`으로 이동:

```bash
mv app apps/web/
mv public apps/web/
mv next.config.ts apps/web/
mv postcss.config.mjs apps/web/
```

---

## 5. turbo.json 설정

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

### 설정 설명

| 속성 | 설명 |
|-----|-----|
| `dependsOn: ["^build"]` | 의존하는 패키지의 build가 먼저 실행됨 |
| `outputs` | 캐싱할 빌드 결과물 경로 |
| `cache: false` | dev 명령어는 캐싱하지 않음 |
| `persistent: true` | dev 서버처럼 계속 실행되는 태스크 |

---

## 6. 루트 package.json 설정

```json
// package.json (루트)
{
  "name": "pilmin-fe",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "start": "turbo start",
    "lint": "turbo lint",
    "type-check": "turbo type-check",
    "dev:web": "turbo dev --filter=@pilmin/web",
    "dev:admin": "turbo dev --filter=@pilmin/admin",
    "dev:user": "turbo dev --filter=@pilmin/user"
  },
  "devDependencies": {
    "turbo": "^2.7.2"
  },
  "packageManager": "pnpm@10.26.2"
}
```

### 스크립트 설명

| 스크립트 | 설명 |
|---------|-----|
| `pnpm dev` | 모든 앱의 dev 서버 동시 실행 |
| `pnpm dev:web` | web 앱만 실행 |
| `--filter=@pilmin/web` | 특정 패키지만 선택하는 필터 |

---

## 7. 각 앱 설정

### 7.1 apps/web/package.json

```json
{
  "name": "@pilmin/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3000",
    "build": "next build",
    "start": "next start --port 3000",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "axios": "^1.13.2",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### 7.2 apps/admin/package.json

```json
{
  "name": "@pilmin/admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3001",
    "build": "next build",
    "start": "next start --port 3001",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "axios": "^1.13.2",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### 7.3 apps/user/package.json

```json
{
  "name": "@pilmin/user",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3002",
    "build": "next build",
    "start": "next start --port 3002",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "axios": "^1.13.2",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### 포트 할당

| 앱 | 포트 |
|---|-----|
| web | 3000 |
| admin | 3001 |
| user | 3002 |

---

## 8. 각 앱의 tsconfig.json

모든 앱에 동일하게 적용:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

---

## 9. 각 앱의 next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

---

## 10. 각 앱의 postcss.config.mjs

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

---

## 11. 각 앱의 기본 파일들

### 11.1 app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pilmin",  // 각 앱에 맞게 수정
  description: "Pilmin App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### 11.2 app/page.tsx

```tsx
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="text-center">
        <h1 className="text-4xl font-bold">Pilmin</h1>
        <p className="mt-4 text-gray-600">앱 설명</p>
      </main>
    </div>
  );
}
```

### 11.3 app/globals.css

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

---

## 12. 의존성 설치

```bash
pnpm install
```

---

## 13. 동작 확인

### 빌드 테스트

```bash
pnpm build
```

### 개발 서버 실행

```bash
# 전체 실행
pnpm dev

# 개별 실행
pnpm dev:web      # http://localhost:3000
pnpm dev:admin    # http://localhost:3001
pnpm dev:user     # http://localhost:3002
```

---

## 14. 최종 디렉토리 구조

```
pilmin-fe/
├── apps/
│   ├── web/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── public/
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   └── tsconfig.json
│   ├── admin/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── public/
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   └── tsconfig.json
│   └── user/
│       ├── app/
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── public/
│       ├── next.config.ts
│       ├── package.json
│       ├── postcss.config.mjs
│       └── tsconfig.json
├── packages/
│   └── ui/
│       ├── src/
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
├── README.md
└── SETUP.md
```

---

## 15. 새 앱/패키지 추가하기

### 대화형으로 추가

```bash
pnpm turbo gen workspace
```

### 수동으로 추가

1. `apps/새앱이름` 또는 `packages/새패키지이름` 디렉토리 생성
2. `package.json` 생성 (name 필드에 `@pilmin/새이름` 형식 사용)
3. `pnpm install` 실행

---

## 16. 유용한 Turbo 명령어

```bash
# 특정 앱만 빌드
pnpm turbo build --filter=@pilmin/web

# 특정 앱과 그 의존성 빌드
pnpm turbo build --filter=@pilmin/web...

# 변경된 패키지만 빌드
pnpm turbo build --filter=[HEAD^1]

# 캐시 무시하고 빌드
pnpm turbo build --force

# 빌드 그래프 시각화
pnpm turbo build --graph
```

---

## 참고 자료

- [Turborepo 공식 문서](https://turbo.build/repo/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Next.js 공식 문서](https://nextjs.org/docs)
