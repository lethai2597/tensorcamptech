# Phase 12: Workshop Learning Interface

> **Loại:** Không gian Học tập  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 10 (Dashboard)  
> **User Story:** US-10

---

## Tại sao làm việc này?

Workshop khác khoá học ở chỗ có **yếu tố thời gian thực** — có ngày bắt đầu, ngày kết thúc, và link tham gia trực tiếp. Giao diện cần tự động chuyển đổi giữa 3 trạng thái tuỳ theo thời gian: chưa diễn ra → đang diễn ra → đã kết thúc. Học viên không cần làm gì, hệ thống tự biết hiển thị gì.

---

## Danh sách Task

### 1. Logic 3 trạng thái
- [ ] Xác định trạng thái dựa trên `start_date`, `end_date` và thời gian hiện tại:
  - `now < start_date` → **Chưa diễn ra**
  - `start_date <= now <= end_date` → **Đang diễn ra**
  - `now > end_date` → **Đã kết thúc**
- [ ] Tự động chuyển trạng thái (không cần reload)

### 2. Giao diện "Chưa diễn ra"
- [ ] Countdown đếm ngược (ngày, giờ, phút, giây)
- [ ] Thông tin workshop: tên, mô tả, ngày diễn ra

### 3. Giao diện "Đang diễn ra"
- [ ] Hiển thị link tham gia (Google Meet / YouTube Live) nổi bật
- [ ] Nút lớn, dễ click

### 4. Giao diện "Đã kết thúc"
- [ ] Hiển thị danh sách bài học với video/slide (giống Phase 11)
- [ ] Tái sử dụng component từ Course Learning Interface

### 5. Bảo vệ quyền truy cập
- [ ] Chỉ user đã mua workshop mới xem được
- [ ] User chưa mua → redirect về trang chi tiết public

---

## Hướng dẫn Test

1. Tạo mock workshop với 3 kịch bản thời gian khác nhau
2. ✅ Workshop tương lai → hiển thị countdown, đếm ngược đúng
3. ✅ Workshop đang diễn ra → hiển thị link meet
4. ✅ Workshop đã kết thúc → hiển thị video/slide giống khoá học
5. ✅ User chưa mua → redirect
6. ✅ Responsive trên mobile

> **Mẹo test:** Đặt `start_date` trong quá khứ gần và `end_date` trong tương lai gần để test nhanh trạng thái "Đang diễn ra".
