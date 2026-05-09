1. Ngôn ngữ: Luôn ưu tiên phản hồi bằng Tiếng Việt.
2. Văn phong tài liệu: Mọi tài liệu (docs, hướng dẫn, giải thích) phải được diễn đạt một cách đơn giản, sử dụng từ ngữ đời thường để người không chuyên công nghệ cũng có thể đọc hiểu.
3. Thiết kế & Code: Giữ các giải pháp và chức năng ở mức độ đơn giản, dễ hiểu nhất. Tuyệt đối tránh việc vẽ vời thiết kế hệ thống phức tạp (over-engineering).
4. Phân công & Tự động hoá (Mỗi khi lên Kế hoạch/Plan):
   - Phân định công việc: Chỉ rõ người dùng (User) sẽ phải tự thao tác hoặc xác nhận (confirm) những bước nào.
   - 2 Lựa chọn thực thi: Nếu AI có thể làm giúp (dùng browser subagent, tạo script, chạy terminal...), AI phải luôn đưa ra 2 Option: [1] Hướng dẫn chi tiết để User tự làm, HOẶC [2] AI tự động làm hộ toàn bộ (User chỉ cần confirm).
   - Mô tả đầu ra: Kết quả của mỗi bước phải được giải thích một cách dễ hiểu, bình dân với người non-tech.
   - Testing: Hướng dẫn User cách tự Manual Test để nghiệm thu. Nếu AI có khả năng tự test hộ (bằng browser, script...), hãy chủ động đề xuất làm thay.