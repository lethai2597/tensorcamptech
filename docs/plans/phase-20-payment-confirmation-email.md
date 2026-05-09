# Phase 20: Payment Confirmation Email

> **Loại:** Tự động hoá  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 09 (SePay Checkout)  
> **User Story:** US-17

---

## Tại sao làm việc này?

Sau khi học viên thanh toán thành công, hệ thống cần gửi email xác nhận — giống như "hoá đơn điện tử". Điều này tạo sự chuyên nghiệp, giúp học viên yên tâm rằng tiền đã được nhận, và cung cấp link truy cập khoá học ngay trong email.

Đây là email duy nhất hệ thống cần gửi tự động. Không cần email chào mừng, nhắc nhở hay marketing.

---

## Danh sách Task

### 1. Chọn dịch vụ email
- [ ] Đăng ký tài khoản Resend (hoặc dịch vụ tương đương)
- [ ] Lấy API key
- [ ] Cấu hình domain gửi email (hoặc dùng domain mặc định)

### 2. Tạo Email Template
- [ ] Nội dung email gồm:
  - Tiêu đề: "Xác nhận thanh toán — [Tên khoá học]"
  - Tên khoá học / workshop
  - Số tiền đã thanh toán
  - Link truy cập khoá học (link đến Dashboard hoặc trang học)
  - Thông tin liên hệ hỗ trợ
- [ ] Template HTML đơn giản, responsive

### 3. Tích hợp vào webhook flow
- [ ] Sau khi SePay webhook cập nhật order → `paid`
- [ ] Edge Function gọi API Resend gửi email đến email Google của học viên
- [ ] Log kết quả gửi email (thành công/thất bại)

### 4. Xử lý lỗi
- [ ] Gửi email thất bại → log lỗi, không ảnh hưởng đến việc cấp quyền
- [ ] Retry 1 lần nếu thất bại

---

## Hướng dẫn Test

1. Trigger mock webhook (giống Phase 09)
2. ✅ Email gửi đến đúng địa chỉ
3. ✅ Nội dung email đúng (tên khoá học, số tiền, link)
4. ✅ Email hiển thị đẹp trên Gmail (desktop + mobile)
5. ✅ Gửi thất bại → quyền truy cập vẫn được cấp (không block)

> **Mẹo test:** Dùng Resend test mode hoặc gửi đến email cá nhân để kiểm tra.
