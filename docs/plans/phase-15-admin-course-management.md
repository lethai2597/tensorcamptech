# Phase 15: Admin Course Management

> **Loại:** Quản trị  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 13 (Admin Layout)  
> **User Story:** US-12

---

## Tại sao làm việc này?

Đây là tính năng CRUD cốt lõi nhất của admin — tạo, sửa, xoá khoá học và workshop. Không có tính năng này, admin không thể xuất bản nội dung lên nền tảng. Mọi trang public (Landing, Explore, Detail) đều phụ thuộc vào dữ liệu từ đây.

---

## Danh sách Task

### 1. Danh sách khoá học (Table)
- [ ] Bảng hiển thị tất cả khoá học/workshop
- [ ] Cột: Tên, Loại (Course/Workshop), Giá, Trạng thái (Draft/Published), Ngày tạo
- [ ] Nút "Tạo mới" ở trên bảng
- [ ] Mỗi dòng có nút Sửa, Xoá

### 2. Form tạo / sửa khoá học
- [ ] Fields:
  - Loại: Khoá học / Workshop (select)
  - Tên (text input)
  - Mô tả (textarea)
  - Thumbnail (upload ảnh → Supabase Storage)
  - Giá tiền (number input, đơn vị VNĐ)
  - Đối tượng phù hợp (textarea)
  - Kết quả sau khi học (textarea)
  - Trạng thái: Draft / Published (select)
- [ ] Riêng Workshop thêm: Ngày bắt đầu, Ngày kết thúc, Link meet
- [ ] Validation: tên bắt buộc, giá phải > 0
- [ ] Submit → insert/update bảng `courses`

### 3. Xoá khoá học
- [ ] Confirm dialog trước khi xoá
- [ ] Xoá record trong bảng `courses`

### 4. Upload thumbnail
- [ ] Upload ảnh lên Supabase Storage bucket `thumbnails`
- [ ] Lưu URL vào field `thumbnail_url`
- [ ] Preview ảnh sau khi upload

---

## Hướng dẫn Test

1. Đăng nhập admin → `/admin/courses`
2. ✅ Bảng hiển thị (trống hoặc có data)
3. ✅ Click "Tạo mới" → form hiển thị
4. ✅ Điền form + upload thumbnail → Submit → record mới trong database
5. ✅ Chọn loại Workshop → hiển thị thêm field ngày, link meet
6. ✅ Click Sửa → form load data cũ → sửa → lưu thành công
7. ✅ Click Xoá → confirm → record bị xoá
8. ✅ Mở trang Explore (public) → thấy khoá học vừa tạo (nếu Published)
