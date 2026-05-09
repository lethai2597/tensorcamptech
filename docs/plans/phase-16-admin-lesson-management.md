# Phase 16: Admin Lesson Management

> **Loại:** Quản trị  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 15 (Admin Course)  
> **User Story:** US-13

---

## Tại sao làm việc này?

Mỗi khoá học/workshop gồm nhiều bài học. Phase này cho phép admin thêm, sửa, xoá và sắp xếp thứ tự các bài học bên trong một khoá học. Không có bài học thì giao diện học tập (Phase 11, 12) sẽ trống.

---

## Danh sách Task

### 1. Danh sách bài học theo khoá học
- [ ] Từ trang chi tiết khoá học (admin) → tab hoặc section "Bài học"
- [ ] Hiển thị danh sách bài học theo thứ tự `order`
- [ ] Mỗi bài: tên, loại (Video/Slide), nút Sửa, Xoá

### 2. Form tạo / sửa bài học
- [ ] Fields:
  - Tên bài học (text)
  - Loại nội dung: Video / Slide (select)
  - Link nội dung (URL YouTube hoặc Slide)
  - Thứ tự hiển thị (number)
- [ ] Submit → insert/update bảng `lessons`

### 3. Quản lý tài nguyên đính kèm
- [ ] Mỗi bài học có thể có nhiều link tài nguyên
- [ ] Mỗi link: tên + URL
- [ ] Thêm / xoá link tài nguyên
- [ ] Lưu vào bảng `lesson_resources`

### 4. Sắp xếp thứ tự
- [ ] Kéo thả để sắp xếp (drag & drop) HOẶC nhập số thứ tự
- [ ] Cập nhật field `order` trong database

### 5. Xoá bài học
- [ ] Confirm dialog → xoá record + tài nguyên đính kèm

---

## Hướng dẫn Test

1. Admin → chọn 1 khoá học → vào quản lý bài học
2. ✅ Tạo bài học mới → record xuất hiện trong database
3. ✅ Sửa bài học → data cập nhật
4. ✅ Thêm link tài nguyên → record trong `lesson_resources`
5. ✅ Đổi thứ tự → field `order` cập nhật
6. ✅ Xoá bài học → record bị xoá
7. ✅ Mở giao diện học tập (student) → bài học hiển thị đúng thứ tự
