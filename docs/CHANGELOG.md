# Changelog: TensorCamp

> **Mục đích:** Ghi nhận tình trạng thực tế của dự án. Chỉ cập nhật khi **đã hoàn thành** một phase hoặc một mốc quan trọng.  
> **Tham chiếu:** [Master Plan](./plans/master-plan.md) · [BRD](./BRD.md) · [Brief](./brief.md)

---

## Quy ước

- **Chỉ ghi những gì đã thực sự hoàn thành** — không ghi kế hoạch hay dự kiến.
- Mỗi entry ghi rõ: ngày hoàn thành, phase/mốc nào, và kết quả cụ thể.
- Sau khi ghi vào đây, đồng thời đánh dấu `[x]` tại `master-plan.md`.

---

## [2026-05-09] — Khởi tạo Dự án

### Đã hoàn thành
- ✅ Tạo repository GitHub (`tensorcamptech`)
- ✅ Khởi tạo `AGENTS.md` — quy tắc vận hành cho AI
- ✅ Tạo `docs/brief.md` — tầm nhìn và phạm vi dự án
- ✅ Tạo `docs/BRD.md` v1.0 — yêu cầu nghiệp vụ chi tiết (17 User Stories)
- ✅ Tạo `docs/plans/master-plan.md` v1.0 — lộ trình 20 phases
- ✅ Tạo `docs/CHANGELOG.md` — file theo dõi tình trạng dự án

### Ghi chú
- Chưa có phase nào trong master plan được triển khai code.
- Dự án hiện ở giai đoạn: **Tài liệu hoàn chỉnh, sẵn sàng bắt đầu Phase 01.**

---

## [2026-05-10] — Phase 01: Project Setup Foundation

### Đã hoàn thành
- ✅ Khởi tạo dự án React + Vite + TypeScript (Vite v8, React v19, TypeScript v6)
- ✅ Cài đặt TailwindCSS v4 với Vite plugin (`@tailwindcss/vite`)
- ✅ Cài đặt và cấu hình Shadcn/UI (style: Default, baseColor: neutral)
- ✅ Cài đặt Lucide React (icon library)
- ✅ Cài đặt React Router DOM v7 với routing cơ bản (trang Home)
- ✅ Cài đặt Supabase Client (`@supabase/supabase-js`) + `.env` placeholder
- ✅ Thiết lập cấu trúc thư mục chuẩn (`components/`, `pages/`, `layouts/`, `hooks/`, `lib/`, `types/`, `assets/`)
- ✅ Cấu hình Dark Mode mặc định (class `dark` trên `<html>`)
- ✅ Cấu hình font Be Vietnam Pro (Google Fonts)
- ✅ Cấu hình path alias `@/` trỏ về `src/`
- ✅ Tạo `.gitignore` bảo vệ `.env` + `.env.example` template
- ✅ Xác nhận trên browser: dark mode, Button, Icon, Font, Routing — tất cả hoạt động

### Ghi chú
- Dev server chạy trên `http://localhost:5174` (hoặc 5173 nếu port trống)
- Supabase client dùng giá trị placeholder, chưa kết nối thật (sẽ làm ở Phase 02-03)
- Sẵn sàng cho Phase 02: Database Schema Design

## [2026-05-10] — Scaffolding Design System

### Đã hoàn thành
- ✅ Kéo 20 components từ Shadcn UI về dự án (sheet, dropdown-menu, scroll-area, card, avatar, badge, table, tabs, separator, aspect-ratio, form, input, textarea, select, checkbox, radio-group, label, dialog, alert-dialog, sonner, skeleton).
- ✅ Cấu hình và tích hợp sẵn các component này vào `src/components/ui` với cấu hình mặc định.
- ✅ Khởi tạo trang `/_dev/design-system` như một Dashboard trực quan.
- ✅ Sắp xếp và hiển thị các biến thể, trạng thái của các components (Typography, Buttons, Data Display, Forms, Overlays & Navigation).
- ✅ Thiết lập route `/_dev/design-system` trong `src/App.tsx`.

### Ghi chú
- Đây là một bước bổ sung để phục vụ cho giao diện đồng nhất sau này, hỗ trợ việc thiết kế Dark Mode-first, chuẩn bị đầy đủ UI component trước khi tiến hành các Phase tiếp theo.

---

## [2026-05-10] — Update Design System: Light Gradient

### Đã hoàn thành
- ✅ Chuyển từ Dark mode sang **Light mode** mặc định (xoá class `dark` khỏi `<html>`)
- ✅ Cập nhật CSS variables: tăng `--radius` (0.625rem → 1rem), nhạt hoá `--border`, thêm `--accent-green`, `--shadow-card`, `--shadow-card-hover`
- ✅ Thêm gradient nền `.bg-gradient-page` (vàng nhạt → xanh lá nhạt pastel)
- ✅ Card component: bo cong `rounded-2xl`, shadow cực nhẹ thay ring, hover shadow transition
- ✅ Button component: chuyển sang pill shape (`rounded-full`), tăng padding, border outline rõ hơn
- ✅ Input component: bo cong `rounded-xl`, tăng height (`h-10`), padding rộng hơn
- ✅ Badge component: thêm variant `success` (xanh lá nhạt)
- ✅ Redesign trang `/_dev/design-system`: mỗi section wrap trong Card với icon + title header, gradient nền
- ✅ Chart colors chuyển sang tone xanh lá (accent green) thay vì grayscale

### Ghi chú
- Dark mode variables vẫn giữ trong CSS cho tương lai (toggle theme)
- Gradient nền chỉ áp dụng cho trang Design System (class `.bg-gradient-page`)
- Phong cách lấy cảm hứng từ ảnh tham khảo: light, clean, pill buttons, white cards, pastel gradient

---

<!-- 
## [YYYY-MM-DD] — Phase XX: Tên Phase

### Đã hoàn thành
- ✅ Mô tả ngắn gọn kết quả 1
- ✅ Mô tả ngắn gọn kết quả 2

### Ghi chú
- Ghi chú bổ sung (nếu có)

---
-->
