# Master Plan: TensorCamp

> **Phiên bản:** 1.0  
> **Ngày tạo:** 2026-05-09  
> **Nguồn gốc:** `docs/brief.md` + `docs/BRD.md`

---

## Tổng quan

Kế hoạch phát triển nền tảng TensorCamp được chia thành **20 phases**. Mỗi phase chỉ chứa **duy nhất 1 chức năng**, có thể test độc lập mà không cần phase sau.

**Quy ước trạng thái:**
- `[ ]` — Chưa bắt đầu
- `[/]` — Đang làm
- `[x]` — Đã hoàn thành

---

## Tiến độ tổng thể

### Nền tảng (Foundation)

- [ ] **Phase 01** — [Project Setup Foundation](./phase-01-project-setup-foundation.md)
- [ ] **Phase 02** — [Database Schema Design](./phase-02-database-schema-design.md)
- [ ] **Phase 03** — [Google Authentication](./phase-03-google-authentication.md)
- [ ] **Phase 04** — [Public Layout Shell](./phase-04-public-layout-shell.md)

### Trang công khai (Public Pages)

- [ ] **Phase 05** — [Landing Page](./phase-05-landing-page.md)
- [ ] **Phase 06** — [Explore Page](./phase-06-explore-page.md)
- [ ] **Phase 07** — [Course Detail Page](./phase-07-course-detail-page.md)
- [ ] **Phase 08** — [Resources Page](./phase-08-resources-page.md)

### Thanh toán (Payment)

- [ ] **Phase 09** — [SePay Checkout](./phase-09-sepay-checkout.md)

### Không gian Học tập (Student)

- [ ] **Phase 10** — [Student Dashboard](./phase-10-student-dashboard.md)
- [ ] **Phase 11** — [Course Learning Interface](./phase-11-course-learning-interface.md)
- [ ] **Phase 12** — [Workshop Learning Interface](./phase-12-workshop-learning-interface.md)

### Quản trị (Admin CMS)

- [ ] **Phase 13** — [Admin Layout Shell](./phase-13-admin-layout-shell.md)
- [ ] **Phase 14** — [Admin Dashboard Overview](./phase-14-admin-dashboard-overview.md)
- [ ] **Phase 15** — [Admin Course Management](./phase-15-admin-course-management.md)
- [ ] **Phase 16** — [Admin Lesson Management](./phase-16-admin-lesson-management.md)
- [ ] **Phase 17** — [Admin Student Management](./phase-17-admin-student-management.md)
- [ ] **Phase 18** — [Admin Resource Management](./phase-18-admin-resource-management.md)
- [ ] **Phase 19** — [Admin Transaction Management](./phase-19-admin-transaction-management.md)

### Tự động hoá (Automation)

- [ ] **Phase 20** — [Payment Confirmation Email](./phase-20-payment-confirmation-email.md)

---

## Sơ đồ phụ thuộc

```
Phase 01 (Setup) → Phase 02 (Database) → Phase 03 (Auth)
                                        → Phase 04 (Layout)

Phase 04 → Phase 05 (Landing)
         → Phase 06 (Explore)
         → Phase 07 (Course Detail)
         → Phase 08 (Resources)

Phase 03 + Phase 07 → Phase 09 (Checkout)

Phase 03 + Phase 04 → Phase 10 (Dashboard)
Phase 10 → Phase 11 (Course Learning)
Phase 10 → Phase 12 (Workshop Learning)

Phase 03 → Phase 13 (Admin Layout)
Phase 13 → Phase 14 (Admin Dashboard)
Phase 13 → Phase 15 (Admin Course CRUD)
Phase 15 → Phase 16 (Admin Lesson CRUD)
Phase 13 → Phase 17 (Admin Student Mgmt)
Phase 13 → Phase 18 (Admin Resource CRUD)
Phase 13 → Phase 19 (Admin Transaction)

Phase 09 → Phase 20 (Email)
```

---

## Ghi chú

- Mỗi phase sử dụng **mock data** khi chưa có phase trước đó hoàn thành
- Thứ tự phase là **khuyến nghị**, không bắt buộc tuyến tính
- Khi hoàn thành 1 phase, đánh dấu `[x]` và cập nhật ngày hoàn thành
