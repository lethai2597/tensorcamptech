# PLAN: Phase 01 — Project Setup Foundation

> **Ngày tạo:** 2026-05-10  
> **Nguồn:** `docs/plans/phase-01-project-setup-foundation.md`  
> **Trạng thái:** ✅ Đã duyệt

### Lựa chọn đã xác nhận
| Setting | Giá trị |
|---------|--------|
| Shadcn style | **Default** |
| Font chữ | **Be Vietnam Pro** |
| Package manager | **pnpm** |
| Dark mode | Có — custom theme riêng sau |

---

## Tổng quan

Phase này thiết lập **toàn bộ nền móng kỹ thuật** cho dự án TensorCamp. Sau khi hoàn thành, ta sẽ có một dự án React chạy được trên localhost, đã cài đặt đầy đủ thư viện, cấu trúc thư mục chuẩn, và dark mode mặc định.

**Hiện trạng:** Dự án hiện là thư mục trống, chỉ chứa tài liệu (`docs/`, `AGENTS.md`). Chưa có `package.json` hay bất kỳ code nào.

---

## Phân công: AI làm gì, User làm gì?

| Bước | Ai làm? | Ghi chú |
|------|---------|---------|
| Task 1-8 (toàn bộ code) | **AI làm tự động** | User chỉ cần confirm từng lệnh terminal |
| Kiểm tra kết quả cuối | **User** hoặc **AI** | AI có thể dùng browser tool để tự test |
| Tạo Supabase project thật | **User** (sau này) | Phase 01 chỉ dùng placeholder `.env` |

### 2 Lựa chọn thực thi:

1. **Option 1 — User tự làm:** Đọc plan này và chạy từng lệnh theo hướng dẫn bên dưới.
2. **Option 2 — AI làm hộ:** User chỉ cần nói "Chạy Phase 01 đi" → AI sẽ tự chạy lệnh, tạo file, và test hộ toàn bộ. User chỉ cần approve các lệnh terminal.

---

## Danh sách Task Chi tiết

### Task 1: Khởi tạo dự án React + Vite + TypeScript

**Mục đích:** Tạo bộ khung dự án React với Vite làm build tool, TypeScript để type-safe.

**Lệnh chạy:**
```bash
# Khởi tạo dự án Vite ngay trong thư mục hiện tại
pnpm create vite@latest ./ -- --template react-ts
pnpm install
```

> ⚠️ **Lưu ý:** Dùng `./` để tạo ngay trong thư mục `tensorcamptech/` thay vì tạo sub-folder. Nếu hệ thống hỏi "folder đã tồn tại", chọn "Yes" để tiếp tục (vì thư mục chỉ có docs và .git).

**File được tạo tự động:**
- `package.json` — danh sách thư viện
- `vite.config.ts` — cấu hình Vite
- `tsconfig.json`, `tsconfig.app.json` — cấu hình TypeScript
- `index.html` — file HTML gốc
- `src/main.tsx` — entry point
- `src/App.tsx` — component chính
- `src/App.css`, `src/index.css` — CSS mặc định

**Dọn dẹp sau khi tạo:**
- Xóa nội dung trong `src/App.tsx` (giữ lại skeleton đơn giản)
- Xóa `src/App.css` (sẽ dùng Tailwind thay thế)
- Xóa logo SVG trong `src/assets/` (nếu có)
- Xóa `public/vite.svg` (nếu có)

**Kiểm tra:** Chạy `pnpm dev` → mở `http://localhost:5173` → thấy trang trắng không lỗi = OK.

---

### Task 2: Cài đặt TailwindCSS v4

**Mục đích:** Thêm TailwindCSS v4 để styling. Version 4 đơn giản hơn v3 rất nhiều — không cần `tailwind.config.js` hay `postcss.config.js`.

**Lệnh chạy:**
```bash
pnpm add tailwindcss @tailwindcss/vite
```

**Cấu hình `vite.config.ts`:**
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

**Cấu hình `src/index.css`:**
```css
@import "tailwindcss";
```

> 💡 **Tailwind v4 khác v3:** Không cần file `tailwind.config.js`, không cần `@tailwind base/components/utilities`. Chỉ cần 1 dòng `@import "tailwindcss"` là xong.

**Kiểm tra:** Thêm `<p className="text-red-500">Test Tailwind</p>` vào `App.tsx` → chữ phải hiện màu đỏ.

---

### Task 3: Cài đặt Shadcn/UI

**Mục đích:** Thêm bộ UI components đẹp, sẵn sàng dùng (Button, Input, Card, Dialog...).

**Bước 3.1 — Cấu hình path alias `@/`:**

Cài thêm `@types/node` để dùng `path`:
```bash
pnpm add -D @types/node
```

Cập nhật `vite.config.ts`:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Cập nhật `tsconfig.app.json` (thêm vào `compilerOptions`):
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Bước 3.2 — Khởi tạo Shadcn/UI:**
```bash
npx shadcn@latest init
```

> Khi CLI hỏi, chọn style **Default**.

**Bước 3.3 — Cài thử component Button:**
```bash
npx shadcn@latest add button
```

**Kiểm tra:** Import `<Button>` vào `App.tsx`, render ra → thấy nút bấm đẹp = OK.

---

### Task 4: Cài đặt Lucide React (icon)

**Mục đích:** Thêm bộ icon SVG đẹp, nhẹ.

**Lệnh chạy:**
```bash
pnpm add lucide-react
```

**Kiểm tra:** Import 1 icon (ví dụ `<Rocket />`) vào `App.tsx` → thấy icon hiển thị = OK.

---

### Task 5: Cài đặt React Router

**Mục đích:** Thêm khả năng điều hướng giữa các trang (Home, Explore, Course Detail, v.v.).

**Lệnh chạy:**
```bash
pnpm add react-router-dom
```

**Tạo cấu trúc routing cơ bản:**

File `src/pages/HomePage.tsx`:
```tsx
export default function HomePage() {
  return <div>Home Page</div>;
}
```

File `src/App.tsx` — cấu hình router:
```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Kiểm tra:** Truy cập `http://localhost:5173/` → thấy "Home Page" = OK.

---

### Task 6: Cài đặt Supabase Client

**Mục đích:** Chuẩn bị kết nối đến Supabase (database + auth). Phase 01 chỉ tạo file cấu hình với giá trị placeholder, chưa kết nối thật.

**Lệnh chạy:**
```bash
pnpm add @supabase/supabase-js
```

**Tạo file `src/lib/supabase.ts`:**
```typescript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**Tạo file `.env`:**
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Cập nhật `.gitignore`:**
```
# Thêm dòng này (nếu chưa có)
.env
.env.local
.env.*.local
```

> ⚠️ **Quan trọng:** File `.env` chứa thông tin nhạy cảm, KHÔNG ĐƯỢC commit lên GitHub. Đảm bảo `.gitignore` đã chặn nó.

**Tạo file `.env.example`** (để người khác biết cần env gì):
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

**Kiểm tra:** Import `supabase` ở bất kỳ đâu → không có lỗi TypeScript = OK. (Kết nối thật sẽ test ở Phase 02-03.)

---

### Task 7: Thiết lập cấu trúc thư mục

**Mục đích:** Tạo sẵn các thư mục theo chuẩn để code sau này gọn gàng, dễ tìm.

**Cấu trúc cần tạo:**
```
src/
├── assets/         # Hình ảnh, font (placeholder .gitkeep)
├── components/     # Components dùng chung (Header, Footer, v.v.)
│   └── ui/         # Components từ Shadcn/UI (tự tạo bởi Shadcn CLI)
├── hooks/          # Custom React hooks
├── layouts/        # Layout wrappers (MainLayout, AdminLayout)
├── lib/            # Utilities, config (supabase.ts, utils, v.v.)
├── pages/          # Các trang (mỗi route = 1 file)
├── types/          # TypeScript type definitions
└── main.tsx        # Entry point
```

**Cách tạo:** Tạo file `.gitkeep` trong mỗi thư mục trống để Git track được.

```bash
mkdir -p src/{assets,components/ui,hooks,layouts,lib,pages,types}
touch src/{assets,hooks,layouts,types}/.gitkeep
```

> 💡 **Giải thích đơn giản:** Thư mục trống sẽ bị Git bỏ qua. File `.gitkeep` là file rỗng, chỉ để Git "nhìn thấy" thư mục đó. Khi có code thật, xóa `.gitkeep` đi cũng được.

---

### Task 8: Cấu hình Dark Mode mặc định

**Mục đích:** Website TensorCamp mặc định dùng giao diện tối (dark mode) — trông chuyên nghiệp hơn cho nền tảng công nghệ.

**Cấu hình trong `src/index.css`:**
```css
@import "tailwindcss";

/* ===== TensorCamp Design Tokens ===== */
@theme inline {
  --color-background: #0a0a0b;
  --color-foreground: #fafafa;
  --color-card: #141416;
  --color-card-foreground: #fafafa;
  --color-primary: #3b82f6;
  --color-primary-foreground: #fafafa;
  --color-muted: #27272a;
  --color-muted-foreground: #a1a1aa;
  --color-border: #27272a;
}

/* ===== Base Styles ===== */
body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: "Be Vietnam Pro", system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

> 💡 **Tailwind v4 dùng `@theme`** thay vì `tailwind.config.js` để khai báo design tokens. Các biến CSS này sẽ được dùng xuyên suốt dự án.

**Cập nhật `index.html`** — thêm Google Fonts (Be Vietnam Pro):
```html
<head>
  <!-- ... existing tags ... -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
  <title>TensorCamp — Học AI & Lập trình thực chiến</title>
</head>
```

**Kiểm tra:** Mở `http://localhost:5173/` → background tối (#0a0a0b), chữ sáng (#fafafa), font Be Vietnam Pro = OK.

---

## Kết quả cuối cùng mong đợi

Sau khi chạy xong 8 tasks, mở `http://localhost:5173/`:

| Kiểm tra | Kỳ vọng |
|----------|---------|
| Trang hiển thị được | ✅ Không lỗi trắng, không crash |
| Background tối | ✅ Nền đen (#0a0a0b), chữ trắng |
| Button Shadcn/UI | ✅ Có 1 nút bấm đẹp hiển thị |
| Icon Lucide | ✅ Có 1 icon hiển thị |
| Routing | ✅ Truy cập `/` hoạt động |
| Console | ✅ Không có lỗi đỏ |
| Font Be Vietnam Pro | ✅ Font chữ tiếng Việt đẹp, không dùng font mặc định |

---

## Cây thư mục dự kiến sau Phase 01

```
tensorcamptech/
├── .env                    # Biến môi trường (KHÔNG commit)
├── .env.example            # Template cho người khác
├── .gitignore              # Danh sách file bỏ qua
├── index.html              # HTML gốc + Google Fonts
├── package.json            # Danh sách thư viện
├── pnpm-lock.yaml          # Lock file
├── vite.config.ts          # Cấu hình Vite + Tailwind + Path alias
├── tsconfig.json           # TypeScript config (gốc)
├── tsconfig.app.json       # TypeScript config (app)
├── components.json         # Config Shadcn/UI
├── AGENTS.md
├── docs/
│   ├── brief.md
│   ├── BRD.md
│   ├── CHANGELOG.md
│   ├── PLAN-phase01-setup.md
│   └── plans/
│       ├── master-plan.md
│       └── phase-01-project-setup-foundation.md
└── src/
    ├── main.tsx
    ├── index.css           # Tailwind import + dark mode tokens
    ├── App.tsx              # Router setup
    ├── assets/
    │   └── .gitkeep
    ├── components/
    │   └── ui/
    │       └── button.tsx  # Từ Shadcn/UI
    ├── hooks/
    │   └── .gitkeep
    ├── layouts/
    │   └── .gitkeep
    ├── lib/
    │   ├── supabase.ts     # Supabase client config
    │   └── utils.ts        # Từ Shadcn/UI
    ├── pages/
    │   └── HomePage.tsx    # Trang Home trống
    └── types/
        └── .gitkeep
```

---

## Danh sách Package được cài

| Package | Loại | Mục đích |
|---------|------|----------|
| `react`, `react-dom` | dependency | Framework UI |
| `tailwindcss` | dependency | CSS utility framework (v4) |
| `@tailwindcss/vite` | dependency | Vite plugin cho Tailwind v4 |
| `react-router-dom` | dependency | Điều hướng trang |
| `@supabase/supabase-js` | dependency | Supabase client SDK |
| `lucide-react` | dependency | Icon library |
| `@types/node` | devDependency | TypeScript types cho Node.js (dùng cho path alias) |
| `typescript` | devDependency | TypeScript compiler (có sẵn từ Vite template) |
| `@vitejs/plugin-react` | devDependency | Vite plugin cho React (có sẵn từ Vite template) |

---

## Hướng dẫn Test (Manual)

Sau khi AI hoàn thành, User có thể tự kiểm tra bằng cách:

1. Chạy `pnpm dev` trong terminal
2. Mở trình duyệt tại `http://localhost:5173`
3. Checklist:
   - [ ] Trang hiển thị được (không lỗi trắng)
   - [ ] Background tối (dark mode)
   - [ ] Có 1 nút Button từ Shadcn/UI hiển thị đúng
   - [ ] Có 1 icon từ Lucide React hiển thị đúng
   - [ ] Điều hướng đến `/` hoạt động
   - [ ] Không có lỗi đỏ trong Console
   - [ ] Font chữ Inter được load đúng

**AI cũng có thể tự test:** Chạy `pnpm dev` → dùng browser tool mở localhost → chụp screenshot xác nhận.

---

## Thời gian ước tính

| Task | Thời gian |
|------|-----------|
| Task 1: Khởi tạo Vite | ~2 phút |
| Task 2: TailwindCSS v4 | ~2 phút |
| Task 3: Shadcn/UI | ~3 phút |
| Task 4: Lucide React | ~1 phút |
| Task 5: React Router | ~2 phút |
| Task 6: Supabase Client | ~2 phút |
| Task 7: Cấu trúc thư mục | ~1 phút |
| Task 8: Dark Mode | ~2 phút |
| **Tổng** | **~15 phút** |

---

## Sau khi hoàn thành Phase 01

Theo quy trình AGENTS.md, sau khi xong Phase 01, AI sẽ:

1. ✅ Cập nhật `docs/CHANGELOG.md` — thêm entry Phase 01
2. ✅ Cập nhật `docs/plans/master-plan.md` — đánh dấu `[x]` Phase 01
3. ✅ Commit code với message rõ ràng (ví dụ: `feat: Phase 01 - Project Setup Foundation`)
