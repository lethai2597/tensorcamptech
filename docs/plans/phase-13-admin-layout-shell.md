# Phase 13: Admin Layout Shell

> **Loại:** Quản trị (Nền tảng)  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 03 (Auth)

---

## Tại sao làm việc này?

Khu vực Admin (CMS) cần một layout riêng biệt hoàn toàn với trang public. Admin layout có sidebar điều hướng cố định, giúp admin truy cập nhanh các trang quản lý. Tách riêng layout giúp student không bao giờ thấy giao diện admin, và admin có trải nghiệm quản trị chuyên nghiệp.

---

## Danh sách Task

### 1. Admin Layout
- [ ] Tạo `src/layouts/AdminLayout.tsx`
- [ ] Sidebar cố định bên trái với menu:
  - Tổng quan (Dashboard)
  - Khoá học
  - Tài nguyên
  - Giao dịch
- [ ] Khu vực nội dung chính bên phải (Outlet)
- [ ] Header nhỏ: tên admin, nút quay về trang public, đăng xuất

### 2. Admin Route Guard
- [ ] Tất cả route `/admin/*` phải check `role === 'admin'`
- [ ] Không phải admin → redirect về trang chủ
- [ ] Chưa đăng nhập → redirect về đăng nhập

### 3. Trang placeholder
- [ ] Tạo các trang admin trống để test navigation:
  - `/admin` → Admin Dashboard
  - `/admin/courses` → Quản lý khoá học
  - `/admin/resources` → Quản lý tài nguyên
  - `/admin/transactions` → Giao dịch

### 4. Responsive
- [ ] Trên mobile: sidebar thu gọn thành drawer/hamburger

---

## Hướng dẫn Test

1. Đăng nhập bằng tài khoản admin → mở `/admin`
2. ✅ Sidebar hiển thị đúng menu
3. ✅ Click từng menu → chuyển trang, URL đúng
4. ✅ Đăng nhập bằng tài khoản student → truy cập `/admin` → bị redirect
5. ✅ Chưa đăng nhập → truy cập `/admin` → redirect về login

> **Mẹo test:** Trong Supabase Dashboard, set `role = 'admin'` cho 1 tài khoản test.
