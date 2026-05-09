# Phase 08: Resources Page

> **Loại:** Trang công khai  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 04 (Public Layout)  
> **User Story:** US-06

---

## Tại sao làm việc này?

Trang Tài nguyên cung cấp giá trị miễn phí cho cộng đồng — các website hữu ích, prompt AI, mini tool. Đây là cách xây dựng uy tín và thu hút người dùng quay lại.

---

## Danh sách Task

### 1. Danh sách tài nguyên
- [ ] Hiển thị dạng list hoặc card
- [ ] Mỗi item: tên, mô tả ngắn, link
- [ ] Click → mở link trong tab mới (`target="_blank"`)

### 2. Phân loại (tùy chọn)
- [ ] Nếu có category → filter theo danh mục
- [ ] Nếu chưa có → hiển thị danh sách phẳng

### 3. Fetch dữ liệu
- [ ] Query bảng `resources` từ Supabase
- [ ] **Mock data** nếu chưa có database

### 4. Empty State
- [ ] Khi chưa có tài nguyên → thông báo thân thiện

---

## Hướng dẫn Test

1. Mở `http://localhost:5173/resources`
2. ✅ Danh sách tài nguyên hiển thị đúng
3. ✅ Click link → mở tab mới
4. ✅ Responsive trên mobile
