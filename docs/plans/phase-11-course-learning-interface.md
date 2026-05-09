# Phase 11: Course Learning Interface

> **Loại:** Không gian Học tập  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 10 (Dashboard)  
> **User Story:** US-09

---

## Tại sao làm việc này?

Đây là giao diện "lớp học" — nơi học viên thực sự tiêu thụ nội dung (video, slide). Khác hoàn toàn với trang chi tiết public (bán hàng), giao diện này tập trung 100% vào việc truyền đạt kiến thức, không có yếu tố marketing.

---

## Danh sách Task

### 1. Layout học tập
- [ ] Sidebar liệt kê danh sách bài học (tên + thứ tự)
- [ ] Khu vực nội dung chính (bên phải sidebar)
- [ ] Click bài học trong sidebar → hiển thị nội dung tương ứng

### 2. Nội dung bài học
- [ ] Tên bài học (tiêu đề)
- [ ] Video embed (YouTube iframe) hoặc Slide embed
- [ ] Link tài nguyên đính kèm (nếu có) — list các link

### 3. Bảo vệ quyền truy cập
- [ ] Chỉ user đã mua (có enrollment) mới xem được
- [ ] User chưa mua → redirect về trang chi tiết public
- [ ] **Mock data:** Tạo enrollment giả hoặc bypass check khi dev

### 4. Responsive
- [ ] Trên mobile: sidebar thu gọn thành dropdown hoặc drawer

---

## Hướng dẫn Test

1. Đăng nhập (user đã mua) → mở `/learn/:courseId`
2. ✅ Sidebar hiển thị danh sách bài học
3. ✅ Click bài học → nội dung thay đổi (video/slide)
4. ✅ Link tài nguyên hiển thị đúng
5. ✅ User chưa mua truy cập → redirect về trang public
6. ✅ Responsive trên mobile
