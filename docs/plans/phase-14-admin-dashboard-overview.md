# Phase 14: Admin Dashboard Overview

> **Loại:** Quản trị  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 13 (Admin Layout)  
> **User Story:** US-11

---

## Tại sao làm việc này?

Admin Dashboard là "bảng điều khiển trung tâm" — nơi admin nhìn nhanh tình hình hoạt động: bao nhiêu học viên, bao nhiêu khoá học, doanh thu ra sao. Giúp đưa ra quyết định mà không cần vào từng trang quản lý.

---

## Danh sách Task

### 1. Card thống kê
- [ ] Tổng số học viên đăng ký (count `profiles` where role = student)
- [ ] Tổng số khoá học / workshop (count `courses`)
- [ ] Tổng doanh thu hoặc số giao dịch thành công (sum/count `orders` where status = paid)
- [ ] **Mock data** nếu chưa có dữ liệu thật

### 2. Khoá học phổ biến nhất
- [ ] Hiển thị top khoá học/workshop có nhiều enrollment nhất
- [ ] Dạng bảng hoặc list ngắn

### 3. Giao diện card
- [ ] Dùng Shadcn Card component
- [ ] Mỗi card có icon + số liệu + label
- [ ] Layout grid 2x2 hoặc 4 cột

---

## Hướng dẫn Test

1. Đăng nhập admin → mở `/admin`
2. ✅ 4 card thống kê hiển thị đúng (hoặc mock data)
3. ✅ Khoá học phổ biến nhất hiển thị
4. ✅ Responsive trên mobile
