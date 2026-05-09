# Business Requirements Document (BRD): TensorCamp

> **Phiên bản:** 1.0
> **Ngày tạo:** 2026-05-09
> **Nguồn gốc:** Tổng hợp từ `docs/brief.md` + phiên BA Q&A với Product Owner.

---

## 1. Tổng quan Dự án

TensorCamp là nền tảng học tập trực tuyến chuyên về AI, Lập trình và Tư duy tự động hoá. Hệ thống được thiết kế để **tự động hoá hoàn toàn** quy trình vận hành — từ đăng ký, thanh toán, cấp quyền đến phân phối nội dung — giúp người vận hành (founder) tập trung 100% vào việc sáng tạo nội dung.

**Tech Stack:**
- **Frontend:** ReactJs (Vite), TailwindCSS, Shadcn/UI, Lucide React
- **BaaS:** Supabase (Auth, Database, Storage, Edge Functions)
- **Thanh toán:** SePay (chuyển khoản ngân hàng VN)
- **Ngôn ngữ giao diện:** Tiếng Việt (không cần đa ngôn ngữ)

---

## 2. Phân quyền & Vai trò

| Vai trò | Mô tả | Cách gán |
|---------|--------|----------|
| `student` | Học viên — người dùng cuối | Tự động gán khi đăng ký tài khoản |
| `admin` | Quản trị viên — quản lý toàn bộ hệ thống | Gán thủ công trực tiếp vào database |

> **Lưu ý:** Không có vai trò `instructor` hay `editor`. Admin kiêm luôn mọi chức năng quản trị.

---

## 3. Các Tính năng Chi tiết

### 3.1. Xác thực & Tài khoản

#### US-01: Đăng ký / Đăng nhập bằng Google

**Mô tả:** Người dùng đăng ký và đăng nhập vào hệ thống thông qua tài khoản Google (Google OAuth). Không hỗ trợ phương thức đăng nhập nào khác.

**Acceptance Criteria:**
- [ ] Trang có nút "Đăng nhập bằng Google"
- [ ] Click vào → chuyển đến màn hình xác thực Google OAuth
- [ ] Đăng nhập thành công → redirect về trang trước đó hoặc trang chủ
- [ ] Nếu là lần đầu → tạo tài khoản mới với role `student`
- [ ] Nếu đã có tài khoản → đăng nhập bình thường
- [ ] Thông tin lấy từ Google: avatar, tên hiển thị, email

**Edge Cases:**
- User huỷ giữa chừng trên màn hình Google → quay về trang đăng nhập, không tạo tài khoản
- Google trả về lỗi → hiển thị thông báo lỗi chung, cho phép thử lại

#### US-02: Hiển thị thông tin tài khoản

**Mô tả:** Thông tin người dùng hiển thị trong dropdown menu ở header. Không có trang cá nhân (profile page) riêng.

**Acceptance Criteria:**
- [ ] Header hiển thị avatar của user (lấy từ Google)
- [ ] Click avatar → mở dropdown menu
- [ ] Dropdown hiển thị: avatar, tên, email, nút đăng xuất
- [ ] Click "Đăng xuất" → xoá session, redirect về trang chủ

---

### 3.2. Trang công khai (Public Pages)

#### US-03: Trang chủ (Landing Page)

**Mô tả:** Trang đầu tiên người dùng thấy khi truy cập TensorCamp. Mục đích: giới thiệu tổng quan và tạo ấn tượng ban đầu.

**Acceptance Criteria:**
- [ ] Hero section giới thiệu TensorCamp
- [ ] Danh sách các khoá học / workshop nổi bật
- [ ] Chỉ số tổng quan của nền tảng (số khoá học, số học viên, v.v.)
- [ ] Giới thiệu founder / giảng viên
- [ ] Responsive: hiển thị tốt trên cả desktop và mobile

#### US-04: Trang Khám phá (Explore)

**Mô tả:** Trang danh sách tất cả khoá học và workshop có trên nền tảng.

**Acceptance Criteria:**
- [ ] Hiển thị danh sách dạng card/grid
- [ ] Mỗi card hiển thị: thumbnail, tên, mô tả ngắn, giá
- [ ] Click vào card → chuyển đến trang chi tiết khoá học/workshop
- [ ] Phân biệt rõ ràng giữa "Khoá học" và "Workshop"

#### US-05: Trang Chi tiết Khoá học / Workshop (Public)

**Mô tả:** Trang giới thiệu chi tiết một khoá học hoặc workshop cho người chưa mua. Mục đích: thuyết phục mua hàng.

**Acceptance Criteria:**
- [ ] Tên khoá học / workshop
- [ ] Mô tả chi tiết nội dung
- [ ] Danh sách các bài học (chỉ hiển thị tên, không xem được nội dung)
- [ ] Đối tượng phù hợp ("Khoá học này dành cho ai?")
- [ ] Kết quả đạt được sau khi học xong ("Bạn sẽ làm được gì?")
- [ ] Danh sách người đã tham gia (avatar + tên)
- [ ] Giá tiền + nút Thanh toán (CTA)
- [ ] Nếu user chưa đăng nhập → click CTA → redirect đến đăng nhập trước
- [ ] Nếu user đã mua → hiển thị "Đã đăng ký" thay vì nút thanh toán

#### US-06: Trang Tài nguyên (Resources)

**Mô tả:** Danh sách các tài nguyên hữu ích được admin tuyển chọn (website, prompt AI, mini tool, v.v.)

**Acceptance Criteria:**
- [ ] Hiển thị danh sách tài nguyên dạng list/card
- [ ] Mỗi tài nguyên có: tên, mô tả ngắn, link
- [ ] Click → mở link trong tab mới
- [ ] Nội dung do admin quản lý qua CMS

---

### 3.3. Thanh toán (SePay)

#### US-07: Thanh toán khoá học / workshop

**Mô tả:** Học viên thanh toán bằng chuyển khoản ngân hàng qua SePay. Hệ thống tự động xác nhận và cấp quyền truy cập.

**Flow thanh toán:**
1. Học viên click "Đăng ký" trên trang chi tiết khoá học
2. Hệ thống tạo đơn hàng (order) với trạng thái `pending`
3. Hiển thị thông tin chuyển khoản (QR code / số tài khoản / nội dung CK)
4. Học viên chuyển khoản qua app ngân hàng
5. SePay gửi webhook xác nhận thanh toán thành công
6. Hệ thống cập nhật order → `paid`
7. Hệ thống cấp quyền truy cập khoá học cho học viên (tự động)
8. Gửi email xác nhận thanh toán thành công

**Acceptance Criteria:**
- [ ] Mỗi khoá học/workshop có 1 giá cố định (không có coupon, early-bird, bundle)
- [ ] Thanh toán hoàn toàn tự động — không cần admin xác nhận thủ công
- [ ] Sau khi thanh toán thành công → học viên thấy khoá học trong Dashboard ngay lập tức
- [ ] Không có chức năng hoàn tiền (refund) trên hệ thống
- [ ] Không có sản phẩm miễn phí — tất cả đều yêu cầu thanh toán

**Edge Cases:**
- Webhook SePay timeout hoặc fail → cần cơ chế retry hoặc admin kiểm tra thủ công trên SePay dashboard
- User chuyển khoản sai số tiền → xử lý ngoài hệ thống (liên hệ admin)
- User đã mua rồi → không cho mua lại, hiển thị "Đã đăng ký"

---

### 3.4. Không gian Học tập (Authenticated)

#### US-08: Dashboard cá nhân

**Mô tả:** Bảng điều khiển hiển thị tất cả khoá học / workshop mà học viên đã mua.

**Acceptance Criteria:**
- [ ] Yêu cầu đăng nhập mới truy cập được
- [ ] Hiển thị danh sách khoá học/workshop đã mua dạng card
- [ ] Click vào card → chuyển đến giao diện học tập
- [ ] Không cần track tiến độ học (không có progress bar)

#### US-09: Giao diện Học tập — Khoá học

**Mô tả:** Giao diện tập trung vào việc truyền đạt kiến thức. Khác biệt rõ so với trang chi tiết public (bán hàng).

**Cấu trúc nội dung:** 2 cấp: `Khoá học → Bài học` (không có module/chương)

**Acceptance Criteria:**
- [ ] Sidebar hoặc navigation liệt kê danh sách bài học
- [ ] Click chọn bài học → hiển thị nội dung chính
- [ ] Nội dung chính của mỗi bài học gồm:
  - Tên bài học
  - Video embed (YouTube) hoặc Slide embed
  - Link tài nguyên đính kèm (nếu có)
- [ ] Chỉ user đã mua khoá học mới truy cập được
- [ ] User chưa mua truy cập → redirect về trang chi tiết public

#### US-10: Giao diện Học tập — Workshop

**Mô tả:** Giao diện workshop có 3 trạng thái tuỳ theo thời gian.

**3 trạng thái:**

| Trạng thái | Điều kiện | Hiển thị |
|-------------|-----------|----------|
| **Chưa diễn ra** | `now < ngày_bắt_đầu` | Countdown đếm ngược đến ngày diễn ra |
| **Đang diễn ra** | `ngày_bắt_đầu <= now <= ngày_kết_thúc` | Link tham gia (Google Meet / YouTube Live) |
| **Đã kết thúc** | `now > ngày_kết_thúc` | Video xem lại + tài nguyên (giống giao diện khoá học) |

**Acceptance Criteria:**
- [ ] Hệ thống tự động chuyển trạng thái dựa trên thời gian
- [ ] Trạng thái "Chưa diễn ra": hiển thị countdown (ngày, giờ, phút, giây)
- [ ] Trạng thái "Đang diễn ra": hiển thị link meet nổi bật để click tham gia
- [ ] Trạng thái "Đã kết thúc": hiển thị danh sách bài học với video/slide giống khoá học
- [ ] Workshop cũng có cấu trúc 2 cấp: `Workshop → Bài học`
- [ ] Chỉ user đã mua workshop mới truy cập được

---

### 3.5. Quản trị (Admin CMS)

> **Chỉ dành cho user có role `admin`.** Giao diện CMS riêng, không hiển thị cho student.

#### US-11: Dashboard Tổng quan (Admin)

**Mô tả:** Trang tổng quan cho admin xem nhanh tình hình hoạt động của nền tảng.

**Acceptance Criteria:**
- [ ] Tổng số học viên đăng ký
- [ ] Tổng số khoá học / workshop
- [ ] Tổng doanh thu (hoặc số giao dịch thành công)
- [ ] Khoá học / workshop phổ biến nhất (nhiều đăng ký nhất)

#### US-12: Quản lý Khoá học / Workshop (CRUD)

**Mô tả:** Admin tạo, sửa, xoá khoá học và workshop.

**Acceptance Criteria:**
- [ ] Form tạo/sửa với các field:
  - Loại: Khoá học hoặc Workshop
  - Tên
  - Mô tả (text thuần, không cần rich text)
  - Thumbnail (upload ảnh)
  - Giá tiền
  - Đối tượng phù hợp (text)
  - Kết quả sau khi học (text)
  - Trạng thái: Draft / Published
  - *(Riêng Workshop thêm):* Ngày bắt đầu, Ngày kết thúc, Link meet
- [ ] Danh sách khoá học/workshop dạng bảng
- [ ] Có thể xoá (soft delete hoặc hard delete)

#### US-13: Quản lý Bài học trong Khoá học / Workshop

**Mô tả:** Admin thêm, sửa, xoá, sắp xếp thứ tự các bài học bên trong một khoá học hoặc workshop.

**Acceptance Criteria:**
- [ ] Form tạo/sửa bài học với các field:
  - Tên bài học
  - Loại nội dung: Video hoặc Slide
  - Link nội dung (URL YouTube / URL Slide)
  - Link tài nguyên đính kèm (nhiều link, mỗi link có tên + URL)
  - Thứ tự hiển thị (order)
- [ ] Có thể kéo thả để sắp xếp thứ tự (hoặc nhập số thứ tự)
- [ ] Có thể xoá bài học

#### US-14: Quản lý Học viên theo Sản phẩm

**Mô tả:** Admin xem danh sách học viên đã đăng ký (đã thanh toán) cho từng khoá học / workshop.

**Acceptance Criteria:**
- [ ] Chọn khoá học/workshop → xem danh sách học viên
- [ ] Mỗi dòng hiển thị: avatar, tên, email, ngày đăng ký
- [ ] Có thể xoá quyền truy cập của học viên (nếu cần)

#### US-15: Quản lý Tài nguyên (CRUD)

**Mô tả:** Admin thêm, sửa, xoá tài nguyên hiển thị trên trang Tài nguyên public.

**Acceptance Criteria:**
- [ ] Form tạo/sửa với các field:
  - Tên tài nguyên
  - Mô tả ngắn
  - URL link
  - Danh mục / Tag (tuỳ chọn)
- [ ] Danh sách tài nguyên dạng bảng
- [ ] Có thể xoá tài nguyên

#### US-16: Quản lý Giao dịch

**Mô tả:** Admin xem lịch sử giao dịch thanh toán.

**Acceptance Criteria:**
- [ ] Danh sách giao dịch dạng bảng
- [ ] Mỗi dòng: học viên, khoá học, số tiền, trạng thái (pending/paid), ngày thanh toán

---

### 3.6. Email Tự động

#### US-17: Email xác nhận thanh toán

**Mô tả:** Sau khi SePay webhook xác nhận thanh toán thành công, hệ thống tự động gửi email cho học viên.

**Acceptance Criteria:**
- [ ] Email gửi đến email đăng ký (email Google) của học viên
- [ ] Nội dung email gồm: tên khoá học/workshop, số tiền, link truy cập khoá học
- [ ] Gửi tự động — không cần admin thao tác

> **Lưu ý:** Đây là email duy nhất hệ thống cần gửi tự động. Không cần email chào mừng, nhắc nhở, hay marketing.

---

## 4. Ngoài phạm vi (Out of Scope)

Những tính năng sau **KHÔNG** nằm trong phiên bản này:

| # | Tính năng | Lý do |
|---|-----------|-------|
| 1 | Đăng nhập bằng email/password, GitHub | Chỉ hỗ trợ Google OAuth |
| 2 | Vai trò instructor / editor | Chỉ có admin và student |
| 3 | Coupon / mã giảm giá / early-bird / bundle | Giá cố định, chưa cần logic phức tạp |
| 4 | Hoàn tiền (refund) | Xử lý ngoài hệ thống |
| 5 | Sản phẩm miễn phí | Tất cả sản phẩm yêu cầu thanh toán |
| 6 | Track tiến độ học tập | Không cần progress bar hay "đã xem" |
| 7 | Chứng nhận / Certificate | Không cần |
| 8 | Đa ngôn ngữ (i18n) | Chỉ tiếng Việt |
| 9 | Livestream nội bộ | Dùng Google Meet / YouTube Live bên ngoài |
| 10 | SEO nâng cao (SSR/SSG, sitemap) | Chưa cần |
| 11 | Analytics (Google Analytics) | Chưa cần |
| 12 | Trang Profile cá nhân | Thông tin hiển thị trong dropdown header |
| 13 | Rich text editor cho CMS | Chỉ dùng form input đơn giản |
| 14 | Cấu trúc 3 cấp (Module/Chương) | Chỉ dùng 2 cấp: Khoá học → Bài học |

---

## 5. Sơ đồ Flow chính

### 5.1. Flow Đăng ký & Mua khoá học

```
Truy cập trang chủ
  → Xem danh sách khoá học
  → Click vào khoá học
  → Xem trang chi tiết (public)
  → Click "Đăng ký"
  → [Chưa đăng nhập?] → Đăng nhập Google → Quay lại
  → Hiển thị thông tin chuyển khoản (SePay QR)
  → Học viên chuyển khoản
  → SePay webhook → Hệ thống xác nhận
  → Cấp quyền truy cập + Gửi email xác nhận
  → Học viên vào Dashboard → Học
```

### 5.2. Flow Workshop (3 trạng thái)

```
Workshop được tạo bởi Admin (có ngày bắt đầu + kết thúc)

[Trước ngày bắt đầu]
  → Hiển thị Countdown đếm ngược

[Trong khoảng ngày bắt đầu → kết thúc]
  → Hiển thị Link Meet để tham gia

[Sau ngày kết thúc]
  → Hiển thị Video xem lại + Tài nguyên
  → (Giống giao diện khoá học)
```

---

## 6. Ghi chú cho Dev

- **Database:** Sử dụng Supabase PostgreSQL. RLS (Row Level Security) phải được bật cho mọi bảng.
- **Auth:** Dùng Supabase Auth với Google Provider.
- **File Storage:** Thumbnail khoá học upload lên Supabase Storage.
- **Video:** Embed từ YouTube (không host trên Supabase).
- **Email:** Sử dụng Supabase Edge Functions + dịch vụ email (Resend hoặc tương đương) để gửi email xác nhận thanh toán.
- **SePay Webhook:** Cần endpoint nhận webhook từ SePay (Supabase Edge Function). Endpoint cần verify signature để đảm bảo an toàn.
- **Responsive:** Hỗ trợ cả Desktop và Mobile. Thiết kế responsive, không cần mobile app.
