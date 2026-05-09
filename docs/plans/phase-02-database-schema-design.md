# Phase 02: Database Schema Design

> **Loại:** Nền tảng  
> **Trạng thái:** Chưa bắt đầu  
> **Phụ thuộc:** Phase 01 (Project Setup)

---

## Tại sao làm việc này?

Database là "kho chứa" toàn bộ dữ liệu của hệ thống: thông tin khoá học, bài học, học viên, giao dịch, tài nguyên. Nếu không thiết kế database trước, khi code các trang sẽ không biết dữ liệu lấy từ đâu và có cấu trúc như thế nào.

Hãy hiểu đơn giản: database giống như "sổ sách kế toán" — phải kẻ bảng trước, rồi mới ghi số liệu vào.

---

## Danh sách Task

### 1. Tạo project Supabase
- [ ] Đăng nhập Supabase Dashboard và tạo project mới
- [ ] Lưu lại `SUPABASE_URL` và `SUPABASE_ANON_KEY`
- [ ] Cập nhật file `.env` trong dự án với các giá trị thật

### 2. Thiết kế bảng `profiles`
- [ ] Tạo bảng `profiles` lưu thông tin user:
  - `id` (uuid, khớp với auth.users)
  - `full_name` (text)
  - `avatar_url` (text)
  - `email` (text)
  - `role` (text, mặc định: 'student')
  - `created_at` (timestamp)
- [ ] Tạo trigger tự động tạo profile khi có user mới đăng ký

### 3. Thiết kế bảng `courses`
- [ ] Tạo bảng `courses` lưu thông tin khoá học/workshop:
  - `id` (uuid)
  - `type` (text: 'course' hoặc 'workshop')
  - `title` (text)
  - `description` (text)
  - `thumbnail_url` (text)
  - `price` (integer — đơn vị VNĐ)
  - `target_audience` (text — "Dành cho ai?")
  - `outcomes` (text — "Bạn sẽ làm được gì?")
  - `status` (text: 'draft' hoặc 'published')
  - `start_date` (timestamp, nullable — riêng workshop)
  - `end_date` (timestamp, nullable — riêng workshop)
  - `meet_link` (text, nullable — riêng workshop)
  - `created_at` (timestamp)

### 4. Thiết kế bảng `lessons`
- [ ] Tạo bảng `lessons` lưu bài học:
  - `id` (uuid)
  - `course_id` (uuid, FK → courses)
  - `title` (text)
  - `content_type` (text: 'video' hoặc 'slide')
  - `content_url` (text — URL YouTube hoặc Slide)
  - `order` (integer — thứ tự hiển thị)
  - `created_at` (timestamp)

### 5. Thiết kế bảng `lesson_resources`
- [ ] Tạo bảng `lesson_resources` lưu tài nguyên đính kèm bài học:
  - `id` (uuid)
  - `lesson_id` (uuid, FK → lessons)
  - `name` (text)
  - `url` (text)

### 6. Thiết kế bảng `enrollments`
- [ ] Tạo bảng `enrollments` lưu thông tin đăng ký khoá học:
  - `id` (uuid)
  - `user_id` (uuid, FK → profiles)
  - `course_id` (uuid, FK → courses)
  - `enrolled_at` (timestamp)
- [ ] Thêm unique constraint: mỗi user chỉ đăng ký 1 khoá học 1 lần

### 7. Thiết kế bảng `orders`
- [ ] Tạo bảng `orders` lưu giao dịch thanh toán:
  - `id` (uuid)
  - `user_id` (uuid, FK → profiles)
  - `course_id` (uuid, FK → courses)
  - `amount` (integer — số tiền VNĐ)
  - `status` (text: 'pending' hoặc 'paid')
  - `transaction_ref` (text, nullable — mã giao dịch từ SePay)
  - `created_at` (timestamp)
  - `paid_at` (timestamp, nullable)

### 8. Thiết kế bảng `resources`
- [ ] Tạo bảng `resources` lưu tài nguyên public:
  - `id` (uuid)
  - `title` (text)
  - `description` (text)
  - `url` (text)
  - `category` (text, nullable)
  - `created_at` (timestamp)

### 9. Thiết lập RLS (Row Level Security)
- [ ] Bật RLS cho tất cả các bảng
- [ ] `profiles`: user chỉ đọc được profile của mình, admin đọc tất cả
- [ ] `courses`: ai cũng đọc được (published), admin CRUD tất cả
- [ ] `lessons`: user đã enroll đọc được, admin CRUD
- [ ] `enrollments`: user đọc enrollment của mình, admin CRUD
- [ ] `orders`: user đọc order của mình, admin đọc tất cả
- [ ] `resources`: ai cũng đọc được, admin CRUD

### 10. Tạo Supabase Storage bucket
- [ ] Tạo bucket `thumbnails` cho ảnh thumbnail khoá học
- [ ] Thiết lập policy: admin upload, public read

---

## Hướng dẫn Test

### Test thủ công (Manual)
1. Mở Supabase Dashboard → Table Editor
2. Kiểm tra:
   - ✅ Tất cả 7 bảng đã được tạo (profiles, courses, lessons, lesson_resources, enrollments, orders, resources)
   - ✅ Thử insert 1 dòng vào bảng `courses` → thành công
   - ✅ Thử insert 1 dòng vào bảng `lessons` với `course_id` hợp lệ → thành công
   - ✅ Thử insert 1 dòng vào bảng `lessons` với `course_id` không tồn tại → thất bại (FK constraint)
   - ✅ RLS hoạt động: dùng anon key không thể insert vào bảng `courses`

### AI tự test
- AI có thể chạy SQL query qua Supabase client để insert/select dữ liệu test và xác nhận kết quả.

---

## Kết quả đầu ra

Sau khi hoàn thành phase này, bạn sẽ có:
- Database Supabase với đầy đủ 7 bảng
- RLS policies bảo vệ dữ liệu
- Storage bucket cho upload thumbnail
- Sẵn sàng để các phase tiếp theo đọc/ghi dữ liệu
