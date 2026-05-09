# Phase 05: Landing Page

> **Loại:** Trang công khai  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 04 (Public Layout)  
> **User Story:** US-03

---

## Tại sao làm việc này?

Trang chủ là "bộ mặt" của TensorCamp — trang đầu tiên mọi người thấy. Mục đích: tạo ấn tượng, giới thiệu nền tảng, dẫn dắt người dùng đến khoá học.

---

## Danh sách Task

### 1. Hero Section
- [ ] Tiêu đề lớn giới thiệu TensorCamp
- [ ] Mô tả ngắn + nút CTA ("Khám phá khoá học" → `/explore`)
- [ ] Hình minh hoạ hoặc background bắt mắt

### 2. Section Khoá học nổi bật
- [ ] 3-4 card khoá học/workshop (thumbnail, tên, mô tả, giá)
- [ ] Click card → `/courses/:id`
- [ ] **Mock data** nếu chưa có database

### 3. Section Chỉ số nền tảng
- [ ] Hiển thị số khoá học, số học viên (mock data)

### 4. Section Giới thiệu Founder
- [ ] Ảnh, tên, mô tả ngắn

### 5. Responsive
- [ ] Tất cả sections hiển thị đúng trên mobile

---

## Hướng dẫn Test

1. Mở `http://localhost:5173/`
2. ✅ Hero section có tiêu đề + CTA
3. ✅ Card khoá học hiển thị đúng, click chuyển trang
4. ✅ Chỉ số + founder hiển thị
5. ✅ Thu nhỏ trình duyệt → responsive tốt
