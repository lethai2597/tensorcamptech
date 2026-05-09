# Phase 01: Project Setup Foundation

> **Loại:** Nền tảng  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Không có — đây là phase đầu tiên

---

## Tại sao làm việc này?

Mọi dự án đều cần một "bộ khung" ban đầu trước khi code bất kỳ tính năng nào. Phase này thiết lập toàn bộ môi trường phát triển: cài đặt thư viện, cấu hình công cụ, tạo cấu trúc thư mục chuẩn. Nếu bước này làm không kỹ, các phase sau sẽ gặp lỗi liên tục.

Hãy hiểu đơn giản: đây là bước "xây móng nhà" — chưa có phòng nào cả, nhưng nếu móng vững thì xây gì cũng nhanh.

---

## Danh sách Task

### 1. Khởi tạo dự án React + Vite + TypeScript
- [ ] Chạy lệnh khởi tạo Vite với template React + TypeScript
- [ ] Xác nhận dự án chạy được trên `localhost`
- [ ] Dọn dẹp code mẫu mặc định (xóa logo, CSS mẫu)

### 2. Cài đặt TailwindCSS v4
- [ ] Cài đặt TailwindCSS theo hướng dẫn chính thức cho Vite
- [ ] Cấu hình file CSS gốc (import Tailwind)
- [ ] Test: thêm 1 class Tailwind vào App.tsx, xác nhận hiển thị đúng

### 3. Cài đặt Shadcn/UI
- [ ] Cài đặt và cấu hình Shadcn/UI cho dự án
- [ ] Cấu hình path alias (`@/` trỏ về `src/`)
- [ ] Cài thử 1 component (ví dụ: Button) để xác nhận hoạt động

### 4. Cài đặt Lucide React (icon)
- [ ] Cài package `lucide-react`
- [ ] Test: hiển thị 1 icon trên màn hình

### 5. Cài đặt React Router
- [ ] Cài `react-router-dom`
- [ ] Tạo cấu trúc routing cơ bản (trang Home trống)
- [ ] Xác nhận điều hướng hoạt động

### 6. Cài đặt Supabase Client
- [ ] Cài `@supabase/supabase-js`
- [ ] Tạo file `src/lib/supabase.ts` với cấu hình client
- [ ] Tạo file `.env` với `VITE_SUPABASE_URL` và `VITE_SUPABASE_ANON_KEY` (giá trị placeholder)
- [ ] Thêm `.env` vào `.gitignore`

### 7. Thiết lập cấu trúc thư mục
- [ ] Tạo cấu trúc thư mục chuẩn:
  ```
  src/
  ├── components/     # Components dùng chung
  ├── pages/          # Các trang (mỗi route = 1 file)
  ├── layouts/        # Layout wrappers
  ├── lib/            # Utilities, config (supabase, v.v.)
  ├── hooks/          # Custom React hooks
  ├── types/          # TypeScript type definitions
  └── assets/         # Hình ảnh, font, v.v.
  ```

### 8. Cấu hình Dark Mode mặc định
- [ ] Thiết lập CSS variables cho dark theme
- [ ] Đặt dark mode là theme mặc định
- [ ] Xác nhận background tối, chữ sáng hiển thị đúng

---

## Hướng dẫn Test

### Test thủ công (Manual)
1. Chạy `pnpm dev` (hoặc `npm run dev`)
2. Mở trình duyệt tại `http://localhost:5173`
3. Kiểm tra:
   - ✅ Trang hiển thị được (không lỗi trắng)
   - ✅ Background tối (dark mode)
   - ✅ Có 1 nút Button từ Shadcn/UI hiển thị đúng
   - ✅ Có 1 icon từ Lucide React hiển thị đúng
   - ✅ Điều hướng đến `/` hoạt động
   - ✅ Không có lỗi đỏ trong Console

### AI tự test
- AI có thể chạy `pnpm dev` và dùng browser tool để mở localhost, chụp ảnh xác nhận giao diện hiển thị đúng.

---

## Kết quả đầu ra

Sau khi hoàn thành phase này, bạn sẽ có:
- Dự án React chạy được trên localhost
- Tất cả thư viện cần thiết đã cài đặt và hoạt động
- Cấu trúc thư mục sạch sẽ, sẵn sàng cho các phase tiếp theo
