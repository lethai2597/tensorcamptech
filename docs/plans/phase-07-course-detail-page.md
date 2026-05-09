# Phase 07: Course Detail Page

> **Loại:** Trang công khai  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 04 (Public Layout)  
> **User Story:** US-05

---

## Tại sao làm việc này?

Trang chi tiết khoá học là trang "bán hàng" — nơi thuyết phục người dùng mua khoá học. Đây là trang quan trọng nhất để chuyển đổi (conversion): từ "xem" thành "mua".

---

## Danh sách Task

### 1. Thông tin khoá học
- [ ] Tên khoá học / workshop
- [ ] Mô tả chi tiết
- [ ] Thumbnail lớn

### 2. Danh sách bài học (Preview)
- [ ] Liệt kê tên các bài học (chỉ tên, không xem nội dung)
- [ ] **Mock data** nếu chưa có database

### 3. Thông tin bổ sung
- [ ] "Khoá học này dành cho ai?" (target_audience)
- [ ] "Bạn sẽ làm được gì?" (outcomes)
- [ ] Danh sách người đã tham gia (avatar + tên) — mock data

### 4. Khu vực giá + CTA
- [ ] Hiển thị giá tiền
- [ ] Nút "Đăng ký ngay" (CTA nổi bật)
- [ ] Nếu user chưa đăng nhập → click CTA → redirect đăng nhập
- [ ] Nếu user đã mua → hiển thị "Đã đăng ký" thay nút thanh toán

### 5. Responsive
- [ ] Layout hiển thị tốt trên mobile (stack dọc)

---

## Hướng dẫn Test

1. Mở `http://localhost:5173/courses/mock-id`
2. ✅ Hiển thị đầy đủ thông tin khoá học
3. ✅ Danh sách bài học chỉ hiển thị tên
4. ✅ Nút CTA hoạt động (redirect nếu chưa login)
5. ✅ Responsive trên mobile
