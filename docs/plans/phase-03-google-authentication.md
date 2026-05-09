# Phase 03: Google Authentication

> **Loại:** Nền tảng  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 01, Phase 02  
> **User Story:** US-01 (Đăng ký/Đăng nhập), US-02 (Hiển thị thông tin tài khoản)

---

## Tại sao làm việc này?

Xác thực (Authentication) là "cửa chính" của hệ thống. Mọi tính năng cá nhân hoá (dashboard, mua khoá học, quản trị) đều phụ thuộc vào việc biết "ai đang dùng". Nếu không có xác thực, hệ thống không thể phân biệt học viên với admin, không thể bảo vệ dữ liệu cá nhân.

TensorCamp chỉ dùng Google OAuth — nghĩa là người dùng chỉ cần 1 click để đăng nhập, không cần nhớ mật khẩu.

---

## Danh sách Task

### 1. Cấu hình Google OAuth trên Supabase
- [ ] Vào Supabase Dashboard → Authentication → Providers
- [ ] Bật Google Provider
- [ ] Tạo Google OAuth credentials trên Google Cloud Console
- [ ] Điền Client ID và Client Secret vào Supabase

### 2. Tạo Auth Context
- [ ] Tạo `src/contexts/AuthContext.tsx`
- [ ] Tạo AuthProvider wrap toàn bộ app
- [ ] Cung cấp các giá trị: `user`, `loading`, `signIn`, `signOut`
- [ ] Lắng nghe sự kiện `onAuthStateChange` từ Supabase

### 3. Tạo hook `useAuth`
- [ ] Tạo `src/hooks/useAuth.ts`
- [ ] Trả về `user`, `loading`, `signIn`, `signOut` từ AuthContext
- [ ] Xử lý trường hợp user là null (chưa đăng nhập)

### 4. Tạo nút Đăng nhập Google
- [ ] Tạo component `LoginButton`
- [ ] Click → gọi `supabase.auth.signInWithOAuth({ provider: 'google' })`
- [ ] Sau khi đăng nhập → redirect về trang trước đó hoặc trang chủ

### 5. Tạo Dropdown Menu User (Header)
- [ ] Tạo component `UserMenu`
- [ ] Khi chưa đăng nhập: hiển thị nút "Đăng nhập"
- [ ] Khi đã đăng nhập: hiển thị avatar
- [ ] Click avatar → dropdown hiển thị: avatar, tên, email, nút "Đăng xuất"
- [ ] Click "Đăng xuất" → gọi `supabase.auth.signOut()` → redirect về trang chủ

### 6. Tạo Protected Route
- [ ] Tạo component `ProtectedRoute`
- [ ] Nếu user chưa đăng nhập → redirect đến trang login
- [ ] Nếu đang loading → hiển thị loading spinner
- [ ] Nếu đã đăng nhập → render children

### 7. Tạo Admin Route Guard
- [ ] Tạo component `AdminRoute`
- [ ] Kiểm tra `user.role === 'admin'`
- [ ] Nếu không phải admin → redirect về trang chủ
- [ ] Nếu là admin → render children

### 8. Xử lý Edge Cases
- [ ] User huỷ giữa chừng trên màn hình Google → quay về trang đăng nhập, không lỗi
- [ ] Google trả về lỗi → hiển thị thông báo lỗi, cho phép thử lại
- [ ] Session hết hạn → redirect về đăng nhập

---

## Hướng dẫn Test

### Test thủ công (Manual)
1. Mở app trên trình duyệt
2. Kiểm tra:
   - ✅ Thấy nút "Đăng nhập" trên header
   - ✅ Click → chuyển đến Google OAuth
   - ✅ Đăng nhập thành công → thấy avatar trên header
   - ✅ Click avatar → thấy dropdown với tên, email, nút đăng xuất
   - ✅ Click "Đăng xuất" → quay về trạng thái chưa đăng nhập
   - ✅ Truy cập URL protected (ví dụ: `/dashboard`) khi chưa đăng nhập → bị redirect
   - ✅ Mở Supabase Dashboard → bảng `profiles` có dòng mới sau khi đăng nhập lần đầu

### AI tự test
- AI có thể mở browser, click nút đăng nhập, xác nhận redirect đúng. (Lưu ý: Google OAuth cần tài khoản thật, AI chỉ test được đến bước redirect.)

---

## Kết quả đầu ra

Sau khi hoàn thành phase này, bạn sẽ có:
- Đăng nhập/Đăng ký bằng Google hoạt động
- Avatar + dropdown menu user trên header
- Protected routes cho student và admin
- Profile tự động tạo trong database khi đăng nhập lần đầu
