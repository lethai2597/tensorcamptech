# Phase 04: Public Layout Shell

> **Loại:** Nền tảng  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 01

---

## Tại sao làm việc này?

Layout Shell (bộ khung giao diện) là "cái khung" bao bọc tất cả các trang public: header, footer, navigation. Thay vì mỗi trang tự tạo header/footer riêng, ta tạo 1 layout dùng chung. Khi cần thay đổi menu hay logo, chỉ sửa 1 chỗ.

Hãy hiểu: Layout Shell giống như "khung tranh" — mỗi trang là 1 bức tranh khác nhau, nhưng đều nằm trong cùng 1 khung.

---

## Danh sách Task

### 1. Tạo component Header
- [ ] Tạo `src/components/Header.tsx`
- [ ] Logo TensorCamp (text hoặc hình) — click về trang chủ
- [ ] Menu điều hướng: Trang chủ, Khám phá, Tài nguyên
- [ ] Khu vực bên phải: nút Đăng nhập (hoặc avatar user nếu đã login — tích hợp khi Phase 03 xong)
- [ ] Responsive: trên mobile thu gọn thành hamburger menu

### 2. Tạo component Footer
- [ ] Tạo `src/components/Footer.tsx`
- [ ] Hiển thị thông tin cơ bản: © TensorCamp, năm hiện tại
- [ ] Link liên hệ hoặc mạng xã hội (nếu có)

### 3. Tạo Public Layout
- [ ] Tạo `src/layouts/PublicLayout.tsx`
- [ ] Bao gồm: Header + nội dung trang (Outlet) + Footer
- [ ] Cấu hình React Router sử dụng layout này cho các route public

### 4. Tạo trang placeholder
- [ ] Tạo các trang trống (chỉ có tiêu đề) để test navigation:
  - `src/pages/HomePage.tsx` → route `/`
  - `src/pages/ExplorePage.tsx` → route `/explore`
  - `src/pages/ResourcesPage.tsx` → route `/resources`
- [ ] Xác nhận điều hướng giữa các trang hoạt động mượt mà

### 5. Thiết lập Design Tokens
- [ ] Định nghĩa CSS variables cho toàn bộ dự án:
  - Bảng màu (primary, secondary, background, text, border, v.v.)
  - Font family (nếu dùng Google Fonts)
  - Spacing, border-radius chuẩn
- [ ] Áp dụng dark mode làm theme mặc định

---

## Hướng dẫn Test

### Test thủ công (Manual)
1. Mở trình duyệt tại `http://localhost:5173`
2. Kiểm tra:
   - ✅ Header hiển thị logo + menu (Trang chủ, Khám phá, Tài nguyên)
   - ✅ Click từng menu → chuyển trang đúng, URL thay đổi
   - ✅ Footer hiển thị ở cuối trang
   - ✅ Thu nhỏ cửa sổ (mobile) → menu chuyển thành hamburger
   - ✅ Giao diện dark mode, nhìn chuyên nghiệp

### AI tự test
- AI mở browser, chụp ảnh giao diện header/footer, xác nhận navigation hoạt động bằng cách click từng link.

---

## Kết quả đầu ra

Sau khi hoàn thành phase này, bạn sẽ có:
- Bộ khung giao diện (Header + Footer) dùng chung cho mọi trang public
- Navigation hoạt động giữa các trang
- Responsive trên cả desktop và mobile
- Design tokens (màu sắc, font) thống nhất cho toàn dự án
