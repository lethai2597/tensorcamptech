# Phase 10: Student Dashboard

> **Loại:** Không gian Học tập  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 03 (Auth), Phase 04 (Layout)  
> **User Story:** US-08

---

## Tại sao làm việc này?

Dashboard là "trang cá nhân" của học viên — nơi hiển thị tất cả khoá học/workshop đã mua. Đây là điểm bắt đầu cho mọi phiên học: đăng nhập → vào dashboard → chọn khoá học → học.

---

## Danh sách Task

### 1. Protected Route
- [ ] Route `/dashboard` yêu cầu đăng nhập
- [ ] Chưa đăng nhập → redirect đến login

### 2. Danh sách khoá học đã mua
- [ ] Query bảng `enrollments` theo `user_id`
- [ ] Join với `courses` để lấy thông tin khoá học
- [ ] Hiển thị dạng card: thumbnail, tên, loại (khoá học/workshop)
- [ ] **Mock data** nếu chưa có enrollment: hiển thị 2-3 card giả

### 3. Click → Giao diện học tập
- [ ] Click card → `/learn/:courseId`

### 4. Empty State
- [ ] Khi chưa mua khoá học nào → thông báo + link đến `/explore`

### 5. Responsive
- [ ] Card grid responsive trên mobile

---

## Hướng dẫn Test

1. Đăng nhập → mở `http://localhost:5173/dashboard`
2. ✅ Hiển thị danh sách khoá học đã mua (hoặc mock data)
3. ✅ Click card → chuyển đến `/learn/:id`
4. ✅ Chưa đăng nhập truy cập `/dashboard` → redirect login
5. ✅ Không có khoá học → hiển thị empty state
