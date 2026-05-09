# Phase 19: Admin Transaction Management

> **Loại:** Quản trị  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 13 (Admin Layout)  
> **User Story:** US-16

---

## Tại sao làm việc này?

Admin cần theo dõi lịch sử giao dịch — ai đã thanh toán, bao nhiêu tiền, trạng thái ra sao. Đây là "sổ kế toán" của nền tảng, giúp admin đối soát với SePay và phát hiện giao dịch lỗi.

---

## Danh sách Task

### 1. Bảng giao dịch
- [ ] Hiển thị tất cả orders từ bảng `orders`
- [ ] Join với `profiles` (tên học viên) và `courses` (tên khoá học)
- [ ] Cột: Học viên, Khoá học, Số tiền, Trạng thái (pending/paid), Ngày thanh toán
- [ ] **Mock data** nếu chưa có giao dịch thật

### 2. Filter / Sort
- [ ] Lọc theo trạng thái (Tất cả / Pending / Paid)
- [ ] Sắp xếp theo ngày (mới nhất trước)

### 3. Chỉ đọc
- [ ] Admin chỉ xem, không sửa/xoá giao dịch trên giao diện
- [ ] Giao dịch được tạo/cập nhật tự động bởi hệ thống (Phase 09)

---

## Hướng dẫn Test

1. Admin → `/admin/transactions`
2. ✅ Bảng hiển thị đúng (hoặc mock data)
3. ✅ Filter theo trạng thái hoạt động
4. ✅ Sắp xếp theo ngày hoạt động
5. ✅ Không có nút sửa/xoá
