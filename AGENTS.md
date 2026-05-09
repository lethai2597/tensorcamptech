# AGENTS.md — TensorCamp

> File này là "luật chơi" cho mọi AI agent làm việc trong dự án. Đọc kỹ trước khi code.

---

## 1. Quy tắc Vận hành (Bắt buộc)

1. **Ngôn ngữ:** Luôn ưu tiên phản hồi bằng Tiếng Việt.
2. **Văn phong tài liệu:** Mọi tài liệu (docs, hướng dẫn, giải thích) phải được diễn đạt một cách đơn giản, sử dụng từ ngữ đời thường để người không chuyên công nghệ cũng có thể đọc hiểu.
3. **Thiết kế & Code:** Giữ các giải pháp và chức năng ở mức độ đơn giản, dễ hiểu nhất. Tuyệt đối tránh việc vẽ vời thiết kế hệ thống phức tạp (over-engineering).
4. **Phân công & Tự động hoá** (Mỗi khi lên Kế hoạch/Plan):
   - Phân định công việc: Chỉ rõ người dùng (User) sẽ phải tự thao tác hoặc xác nhận (confirm) những bước nào.
   - 2 Lựa chọn thực thi: Nếu AI có thể làm giúp (dùng browser subagent, tạo script, chạy terminal...), AI phải luôn đưa ra 2 Option: [1] Hướng dẫn chi tiết để User tự làm, HOẶC [2] AI tự động làm hộ toàn bộ (User chỉ cần confirm).
   - Mô tả đầu ra: Kết quả của mỗi bước phải được giải thích một cách dễ hiểu, bình dân với người non-tech.
   - Testing: Hướng dẫn User cách tự Manual Test để nghiệm thu. Nếu AI có khả năng tự test hộ (bằng browser, script...), hãy chủ động đề xuất làm thay.

---

## 2. Bối cảnh Dự án

### Dự án là gì?
**TensorCamp** — Nền tảng học tập trực tuyến chuyên về AI, Lập trình và Tư duy tự động hoá. Hệ thống tự động hoá hoàn toàn quy trình vận hành (đăng ký, thanh toán, cấp quyền, phân phối nội dung).

### Tech Stack
| Thành phần | Công nghệ |
|------------|-----------|
| Frontend | ReactJs (Vite), TypeScript |
| Styling | TailwindCSS, Shadcn/UI, Lucide React |
| BaaS | Supabase (Auth, Database, Storage, Edge Functions) |
| Thanh toán | SePay (chuyển khoản ngân hàng VN) |
| Ngôn ngữ giao diện | Tiếng Việt (không đa ngôn ngữ) |

### Vai trò người dùng
- `student` — Học viên (tự động gán khi đăng ký)
- `admin` — Quản trị viên (gán thủ công trong database)

### Tài liệu tham chiếu
| File | Mô tả |
|------|-------|
| `docs/brief.md` | Tầm nhìn, mục tiêu, phạm vi dự án |
| `docs/BRD.md` | Yêu cầu nghiệp vụ chi tiết (17 User Stories) |
| `docs/plans/master-plan.md` | Lộ trình 20 phases phát triển |
| `docs/CHANGELOG.md` | Tình trạng thực tế — những gì đã hoàn thành |

---

## 3. Luồng Làm việc

### Trước khi bắt đầu bất kỳ task nào
1. **Đọc `docs/CHANGELOG.md`** để biết dự án đang ở đâu.
2. **Đọc `docs/plans/master-plan.md`** để hiểu phase nào đang cần làm.
3. **Đọc file phase cụ thể** (vd: `docs/plans/phase-01-project-setup-foundation.md`) để nắm yêu cầu chi tiết.

### Sau khi hoàn thành một phase/plan
> ⚠️ **BẮT BUỘC — Không được bỏ qua bước này.**

Khi đã hoàn thành và kiểm tra xong một phase, AI phải thực hiện **cả 2 bước** sau:

1. **Cập nhật `docs/CHANGELOG.md`:**
   - Thêm entry mới theo format có sẵn trong file.
   - Ghi rõ ngày, tên phase, và danh sách kết quả cụ thể đã hoàn thành.
   - **CHỈ ghi những gì đã thực sự hoàn thành** — không ghi kế hoạch hay dự kiến.

2. **Cập nhật `docs/plans/master-plan.md`:**
   - Đánh dấu `[x]` cho phase vừa hoàn thành.

---

## 4. Những điều KHÔNG được làm

- ❌ Không thêm tính năng ngoài phạm vi BRD (xem mục "Ngoài phạm vi" trong `docs/BRD.md`).
- ❌ Không sử dụng đăng nhập nào khác ngoài Google OAuth.
- ❌ Không tạo cấu trúc 3 cấp (Module/Chương) — chỉ dùng 2 cấp: Khoá học → Bài học.
- ❌ Không thêm rich text editor — chỉ dùng form input đơn giản cho CMS.
- ❌ Không tạo trang Profile cá nhân — thông tin hiển thị trong dropdown header.