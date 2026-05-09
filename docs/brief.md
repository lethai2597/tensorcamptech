# Project Brief: TensorCamp

## 1. Bối cảnh & Tổng quan dự án
- **Bối cảnh:** Xuất phát từ kiến thức, kinh nghiệm thực tiễn trong việc đào tạo Lập trình và các Kỹ năng ứng dụng AI, dự án ra đời với mong muốn đóng gói những giá trị này và đưa lên một nền tảng học tập chuyên nghiệp. Việc đã có sẵn hệ sinh thái sản phẩm TensorLab.tech là một bước đệm hoàn hảo để tiếp tục phát triển và mở rộng thành nền tảng học tập TensorCamp (thông qua các khoá học và workshop).
- **Tầm nhìn:** Xây dựng TensorCamp trở thành một không gian học tập hiện đại, tối giản nhưng mạnh mẽ. Nơi mang đến cho những người đam mê công nghệ các nội dung đào tạo thực chiến về AI, Lập trình và Tư duy tự động hoá.

## 2. Mục tiêu & Thước đo thành công
- **Mục tiêu của Người Vận hành:** Xây dựng một nền tảng học tập tự động hoá hoàn toàn từ A-Z. Giảm thiểu tối đa thời gian vận hành tay chân để dồn toàn lực vào việc tối ưu nội dung phân phối.
- **Mục tiêu của Học viên:** Trải nghiệm một quy trình học tập liền mạch, hiện đại từ bước tiếp cận thông tin, đăng ký tham gia cho đến khi nhận tài liệu, mã nguồn và chứng nhận sau khóa học.
- **Thước đo thành công:**
  - **Tự động hoá:** 100% quy trình đăng ký, gửi email thông báo và cấp quyền truy cập tài nguyên được xử lý tự động bởi hệ thống.
  - **Trải nghiệm:** Giao diện trực quan, dễ dàng điều hướng để tìm kiếm nội dung tài nguyên.
  - **Vận hành:** Có thể xuất bản một trang giới thiệu cho khoá học hoặc workshop mới một cách dễ dàng và nhanh chóng.
## 3. Chân dung học viên
- **Chân dung:** 
  - Những người quan tâm đến việc ứng dụng AI vào công việc thực tế để tăng hiệu suất.
  - Các lập trình viên mong muốn nâng cao kỹ năng hoặc cập nhật xu hướng công nghệ mới.
  - Các nhà phát triển, nhân sự phi kỹ thuật muốn học phương pháp làm việc kiểu mới.
- **Nỗi đau:** Họ thường chán nản với các khoá học lý thuyết dài dòng, khó tìm lại tài liệu hoặc mã nguồn sau các buổi học, và cần những nội dung đi thẳng vào thực chiến.
- **Các sản phẩm tiêu biểu:**
  - Khoá học: Xây dựng Sản phẩm bằng AI.
  - Workshop: Nhập môn Antigravity.
  - Workshop: Từ Vibe Coding đến Agentic Coding.
  - Workshop: Agentic Working.

## 4. Phạm vi Hệ thống
Hệ thống được phát triển hoàn chỉnh từ A-Z, bao trùm toàn bộ luồng trải nghiệm học tập và vận hành tự động. Dưới đây là chi tiết các tính năng cốt lõi:

### 4.1. Trải nghiệm Học viên
- **Hệ thống Xác thực & Quản lý Tài khoản:** 
  - Đăng nhập và Đăng ký nhanh chóng thông qua Google.
  - Thông tin tài khoản (avatar, tên, email) hiển thị trong dropdown menu header — không có trang cá nhân riêng.
- **Khám phá Nội dung:**
  - Trang chủ giới thiệu tổng quan nền tảng TensorCamp, các khoá học/workshop trên nền tảng, tóm tắt chỉ số của nền tảng, giới thiệu founder/giảng viên.
  - Trang khám phá tập trung vào danh sách tất cả các khoá học/workshop.
  - Trang chi tiết khoá học trình bày rõ ràng nội dung khoá học/workshop, danh sách các bài học, chỉ rõ đối tượng phù hợp, những thứ có thể làm sau khi học xong, danh sách người đã tham gia, giá tiền (thanh toán qua SePay)
  - Trang tài nguyên là danh sách các tài nguyên hay, đó có thể là các website hữu ích, các prompt AI được tuyển chọn, các mini tool giúp đỡ học viên, ...
- **Không gian Học tập:**
  - Bảng điều khiển cá nhân hiển thị các khoá học/workshop đã tham gia.
  - Trang chi tiết sẽ là giao diện học tập mượt mà, tập chung vào việc truyền đạt kiến thức (thay vì PR như trang chi tiết public), mỗi bài học/workshop sẽ có thể có 1 hoặc nhiều bài học, mỗi bài học sẽ có nội dung truyền tải chính là Video hoặc Slide, ngoài ra sẽ có thông tin về tên bài học, các link tài nguyên đính kèm (nếu có), giao diện của khoá học và woekshop khi đã xong khá giống nhau. Đối với workshop chưa diễn ra khu vực nội dung truyền tải chính có thể sẽ là bộ đếm lùi hoặc thôn tin tham gia.

### 4.2. Trải nghiệm Quản trị
- **Quản lý Nội dung Tập trung:**
  - Có khả năng quản lý khoá học/workshop mượt mà, nhanh chóng.
  - Quản lý danh sách học viên đăng ký theo từng sản phẩm.

### 4.3. Giới hạn Dự án
Để tập trung vào các giá trị cốt lõi, phiên bản này **SẼ KHÔNG** bao gồm:
- Không xây dựng hệ thống Livestream nội bộ; sẽ sử dụng nền tảng bên thứ ba như Google Meet hoặc YouTube Live và chỉ nhúng video xem lại.

## 5. Yêu cầu Kỹ thuật
Hệ thống sẽ được xây dựng với kiến trúc hiện đại, tập trung vào hiệu năng và tính mở rộng:
- **Frontend:** ReactJs (Vite), TailwindCss, Shadcn/UI, Lucide React
- **BaaS**: Supabase
