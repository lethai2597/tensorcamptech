# Phase 18: Admin Resource Management

> **Loại:** Quản trị  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 13 (Admin Layout)  
> **User Story:** US-15

---

## Tại sao làm việc này?

Trang Tài nguyên (public) hiển thị nội dung do admin tuyển chọn. Phase này tạo giao diện CMS để admin thêm, sửa, xoá tài nguyên mà không cần đụng vào code hay database trực tiếp.

---

## Danh sách Task

### 1. Danh sách tài nguyên (Table)
- [ ] Bảng hiển thị tất cả tài nguyên
- [ ] Cột: Tên, Mô tả, URL, Danh mục, Ngày tạo
- [ ] Nút "Tạo mới"
- [ ] Mỗi dòng: nút Sửa, Xoá

### 2. Form tạo / sửa tài nguyên
- [ ] Fields:
  - Tên tài nguyên (text)
  - Mô tả ngắn (textarea)
  - URL link (text)
  - Danh mục / Tag (text, tuỳ chọn)
- [ ] Validation: tên + URL bắt buộc
- [ ] Submit → insert/update bảng `resources`

### 3. Xoá tài nguyên
- [ ] Confirm dialog → xoá record

---

## Hướng dẫn Test

1. Admin → `/admin/resources`
2. ✅ Bảng hiển thị (trống hoặc có data)
3. ✅ Tạo tài nguyên mới → record trong database
4. ✅ Sửa → data cập nhật
5. ✅ Xoá → record bị xoá
6. ✅ Mở trang Resources (public) → thấy tài nguyên vừa tạo
