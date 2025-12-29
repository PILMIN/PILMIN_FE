# Pilmin Frontend

Turborepo 기반의 모노레포 프로젝트입니다.

## 프로젝트 구조

```
pilmin-fe/
├── apps/
│   ├── web/          # 랜딩페이지 (port: 3000)
│   ├── admin/        # 어드민 (port: 3001)
│   └── user/         # 일반유저 (port: 3002)
├── packages/
│   └── ui/           # 공유 UI 컴포넌트 (@pilmin/ui)
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## 시작하기

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
# 전체 앱 동시 실행
pnpm dev

# 개별 앱 실행
pnpm dev:web      # 랜딩페이지 (http://localhost:3000)
pnpm dev:admin    # 어드민 (http://localhost:3001)
pnpm dev:user     # 유저 (http://localhost:3002)
```

### 빌드

```bash
# 전체 빌드
pnpm build

# 개별 빌드
pnpm turbo build --filter=@pilmin/web
pnpm turbo build --filter=@pilmin/admin
pnpm turbo build --filter=@pilmin/user
```

### 린트 & 타입 체크

```bash
pnpm lint
pnpm type-check
```

## 앱 설명

| 앱 | 패키지명 | 포트 | 설명 |
|---|---------|-----|-----|
| web | @pilmin/web | 3000 | 랜딩페이지 |
| admin | @pilmin/admin | 3001 | 어드민 대시보드 |
| user | @pilmin/user | 3002 | 일반유저 서비스 |

## 새 앱/패키지 추가

```bash
# 대화형으로 새 워크스페이스 추가
pnpm turbo gen workspace
```

## 기술 스택

- **Framework**: Next.js 16
- **Build System**: Turborepo
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
