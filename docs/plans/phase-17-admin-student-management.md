# Phase 17: Admin Student Management

> **Loại:** Quản trị  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 13 (Admin Layout)  
> **User Story:** US-14

---

## Tại sao làm việc này?

Admin cần biết ai đã đăng ký khoá học nào — để hỗ trợ học viên, kiểm tra thanh toán, hoặc xoá quyền truy cập khi cần. Đây là tính năng quản lý con người, không phải quản lý nội dung.

---

## Danh sách Task

### 1. Chọn khoá học / workshop
- [ ] Dropdown hoặc tab chọn khoá học/workshop cần xem
- [ ] Load danh sách khoá học từ bảng `courses`

### 2. Danh sách học viên
- [ ] Bảng hiển thị học viên đã đăng ký (từ bảng `enrollments` join `profiles`)
- [ ] Cột: Avatar, Tên, Email, Ngày đăng ký
- [ ] **Mock data** nếu chưa có enrollment thật

### 3. Xoá quyền truy cập
- [ ] Mỗi dòng có nút "Xoá quyền"
- [ ] Confirm dialog → xoá record trong `enrollments`
- [ ] Học viên sẽ không còn thấy khoá học trong Dashboard

---

## Hướng dẫn Test

1. Admin → `/admin/courses` → chọn 1 khoá học → xem học viên
2. ✅ Bảng hiển thị đúng danh sách (hoặc mock data)
3. ✅ Click "Xoá quyền" → confirm → record `enrollments` bị xoá
4. ✅ Đăng nhập bằng tài khoản student đó → khoá học không còn trong Dashboard
