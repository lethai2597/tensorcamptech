# Phase 09: SePay Checkout

> **Loại:** Thanh toán  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 03 (Auth), Phase 07 (Course Detail)  
> **User Story:** US-07

---

## Tại sao làm việc này?

Thanh toán là "tim" của hệ thống kinh doanh — không có thanh toán thì không có doanh thu. Phase này kết nối SePay (dịch vụ thanh toán chuyển khoản VN) để tự động xác nhận khi học viên chuyển tiền, và cấp quyền truy cập ngay lập tức.

---

## Danh sách Task

### 1. Tạo Order
- [ ] Khi user click "Đăng ký" trên trang chi tiết → tạo record trong bảng `orders` (status: 'pending')
- [ ] Kiểm tra user đã mua chưa → nếu rồi thì không cho mua lại

### 2. Hiển thị thông tin chuyển khoản
- [ ] Modal hoặc trang hiển thị: QR code, số tài khoản, nội dung chuyển khoản
- [ ] Nội dung CK chứa mã order để SePay match được

### 3. Tạo Webhook Endpoint
- [ ] Tạo Supabase Edge Function nhận webhook từ SePay
- [ ] Verify signature để đảm bảo an toàn
- [ ] Khi nhận được webhook:
  - Cập nhật order → `paid`
  - Tạo record trong bảng `enrollments`
  - (Trigger email ở Phase 20)

### 4. Xử lý Edge Cases
- [ ] Webhook fail/timeout → log lỗi, admin kiểm tra thủ công
- [ ] User chuyển sai số tiền → xử lý ngoài hệ thống
- [ ] User đã mua → hiển thị "Đã đăng ký"

### 5. Cập nhật UI trang chi tiết
- [ ] Sau thanh toán thành công → user thấy khoá học trong Dashboard ngay
- [ ] Nút CTA đổi thành "Đã đăng ký"

---

## Hướng dẫn Test

1. Đăng nhập → vào trang chi tiết khoá học
2. ✅ Click "Đăng ký" → hiển thị thông tin chuyển khoản
3. ✅ Kiểm tra bảng `orders` có record mới (status: pending)
4. ✅ Gửi mock webhook → order chuyển sang `paid`
5. ✅ Bảng `enrollments` có record mới
6. ✅ Quay lại trang chi tiết → hiển thị "Đã đăng ký"

> **Lưu ý:** Test webhook có thể dùng tool như Postman gửi request giả lập đến Edge Function.
