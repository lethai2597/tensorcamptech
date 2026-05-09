# Phase 06: Explore Page

> **Loại:** Trang công khai  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 04 (Public Layout)  
> **User Story:** US-04

---

## Tại sao làm việc này?

Trang Khám phá là nơi hiển thị toàn bộ khoá học và workshop. Nếu Landing Page là "quảng cáo", thì Explore Page là "cửa hàng" — nơi người dùng duyệt và chọn sản phẩm muốn mua.

---

## Danh sách Task

### 1. Danh sách khoá học dạng Grid
- [ ] Hiển thị tất cả khoá học/workshop dạng card grid
- [ ] Mỗi card: thumbnail, tên, mô tả ngắn, giá
- [ ] Click card → `/courses/:id`
- [ ] Phân biệt rõ "Khoá học" vs "Workshop" (badge hoặc tag)

### 2. Fetch dữ liệu
- [ ] Query bảng `courses` (status = 'published') từ Supabase
- [ ] **Mock data** nếu chưa có Phase 02: dùng array tĩnh trong code

### 3. Empty State
- [ ] Khi chưa có khoá học nào → hiển thị thông báo thân thiện

### 4. Responsive
- [ ] Grid chuyển từ 3 cột (desktop) → 2 cột (tablet) → 1 cột (mobile)

---

## Hướng dẫn Test

1. Mở `http://localhost:5173/explore`
2. ✅ Danh sách card hiển thị đúng
3. ✅ Có phân biệt Khoá học vs Workshop
4. ✅ Click card → chuyển đến trang chi tiết
5. ✅ Responsive trên mobile
