/**
 * Knowledge Base – Truy xuất từ quy_trinh_xin_nghi_phep.md
 * Structured data for chatbot answer retrieval
 */

const KNOWLEDGE_BASE = [
  {
    id: "loai_nghi_phep",
    keywords: [
      "loại nghỉ phép", "loại nghỉ", "các loại", "những loại", "bao nhiêu loại",
      "nghỉ phép nào", "hình thức nghỉ", "trường hợp nghỉ", "nghỉ gì",
      "phép năm", "phép bù", "thai sản", "kết hôn", "tang", "không lương",
      "học tập", "đào tạo", "nghỉ bệnh", "nghỉ ốm", "loại", "dạng"
    ],
    answer: `
      <h3>📋 Các loại nghỉ phép phổ biến tại doanh nghiệp</h3>
      <p>Có <strong>8 loại nghỉ phép</strong> phổ biến:</p>
      <table class="info-table">
        <tr><th>Loại nghỉ phép</th><th>Mô tả</th></tr>
        <tr><td><strong>Nghỉ phép năm</strong></td><td>Ít nhất 12 ngày/năm theo quy định pháp luật</td></tr>
        <tr><td><strong>Nghỉ phép bù</strong></td><td>Nghỉ bù khi làm ngoài giờ hoặc ngày nghỉ</td></tr>
        <tr><td><strong>Nghỉ thai sản</strong></td><td>Theo quy định pháp luật cho lao động nữ</td></tr>
        <tr><td><strong>Nghỉ kết hôn</strong></td><td>Theo chính sách công ty</td></tr>
        <tr><td><strong>Nghỉ tang</strong></td><td>Khi có người thân qua đời</td></tr>
        <tr><td><strong>Nghỉ không lương</strong></td><td>Nghỉ dài hạn vì lý do cá nhân khi hết phép năm</td></tr>
        <tr><td><strong>Nghỉ học tập/đào tạo</strong></td><td>Tham gia khóa học liên quan công việc</td></tr>
        <tr><td><strong>Nghỉ bệnh</strong></td><td>Khi ốm đau hoặc tai nạn</td></tr>
      </table>
      <div class="highlight-box">💡 Trong mọi trường hợp, nhân viên cần <strong>nộp đơn xin nghỉ phép</strong> và <strong>thông báo cho quản lý trực tiếp</strong> để được xem xét và phê duyệt.</div>
    `
  },
  {
    id: "quy_trinh",
    keywords: [
      "quy trình", "các bước", "bao nhiêu bước", "mấy bước", "bước nào",
      "làm sao", "xin nghỉ như thế nào", "cách xin", "thủ tục", "trình tự",
      "xin nghỉ phép", "thế nào", "flow", "procedure"
    ],
    answer: `
      <h3>📝 Quy trình xin nghỉ phép tiêu chuẩn (3 bước)</h3>
      <p>Quy trình gồm <strong>3 bước</strong> chính:</p>
      <ol>
        <li><strong>Bước 1 – Chuẩn bị mẫu đơn:</strong> Viết đơn xin nghỉ theo mẫu của Phòng Nhân sự, đảm bảo xin phép trước đúng thời hạn quy định.</li>
        <li><strong>Bước 2 – Trình cấp trên phê duyệt:</strong> Nộp đơn cho cấp quản lý phù hợp tùy theo số ngày nghỉ (Trưởng bộ phận hoặc Tổng Giám đốc).</li>
        <li><strong>Bước 3 – Chuyển đến Phòng Nhân sự:</strong> Sau khi được duyệt, chuyển đơn đến Phòng NS để cập nhật và tính thời gian nghỉ.</li>
      </ol>
      <div class="highlight-box">⚠️ Nếu <strong>không chuyển đơn cho Phòng Nhân sự</strong>, đơn sẽ <strong>KHÔNG được chấp nhận</strong> dù đã có chữ ký phê duyệt!</div>
    `
  },
  {
    id: "thoi_gian_xin_phep",
    keywords: [
      "thời gian", "trước bao lâu", "xin trước", "bao nhiêu ngày trước",
      "deadline", "hạn", "thời hạn", "xin phép trước", "báo trước",
      "24 giờ", "1 tuần", "2 tuần", "nửa ngày", "prior notice"
    ],
    answer: `
      <h3>⏰ Thời gian xin phép trước</h3>
      <p>Tùy thuộc vào số ngày nghỉ, nhân viên cần xin phép trước:</p>
      <table class="info-table">
        <tr><th>Số ngày nghỉ</th><th>Xin phép trước</th></tr>
        <tr><td>Nửa ngày – 1 ngày</td><td><strong>24 giờ</strong> (ngày hôm trước)</td></tr>
        <tr><td>1,5 – 3 ngày</td><td><strong>2 ngày</strong></td></tr>
        <tr><td>3,5 – 5 ngày</td><td><strong>1 tuần</strong></td></tr>
        <tr><td>Hơn 5 ngày</td><td><strong>2 tuần</strong></td></tr>
      </table>
      <div class="highlight-box">💡 Thời gian nghỉ phép cụ thể thường được quy định trong <strong>hợp đồng lao động</strong> của công ty.</div>
    `
  },
  {
    id: "phe_duyet",
    keywords: [
      "phê duyệt", "ai duyệt", "người duyệt", "duyệt đơn", "cấp trên",
      "trưởng bộ phận", "tổng giám đốc", "giám đốc", "quản lý", "cấp quản lý",
      "ai ký", "xét duyệt", "approve", "approval", "phó", "trưởng phòng"
    ],
    answer: `
      <h3>✅ Phân cấp phê duyệt đơn xin nghỉ</h3>
      <p>Tùy vào thời gian nghỉ phép, đơn sẽ được phê duyệt bởi cấp quản lý phù hợp:</p>
      <table class="info-table">
        <tr><th>Số ngày nghỉ</th><th>Người phê duyệt</th></tr>
        <tr><td>Dưới 1 ngày</td><td>Trưởng/Phó hoặc Trưởng bộ phận</td></tr>
        <tr><td>1 – 5 ngày</td><td>Trưởng bộ phận trực tiếp</td></tr>
        <tr><td>Từ 5 ngày trở lên</td><td><strong>Tổng Giám đốc</strong> trực tiếp duyệt</td></tr>
      </table>
      <div class="highlight-box">📌 Người duyệt sẽ xem xét: <strong>khối lượng công việc</strong>, thời gian làm việc/nghỉ ngơi của nhân viên, và <strong>nội quy/quy chế công ty</strong>.</div>
    `
  },
  {
    id: "mau_don",
    keywords: [
      "mẫu đơn", "mẫu", "đơn xin nghỉ", "viết đơn", "form", "đơn mẫu",
      "nội dung đơn", "cấu trúc đơn", "template", "biểu mẫu", "soạn đơn",
      "đơn nghỉ phép", "xem mẫu"
    ],
    answer: `
      <h3>📄 Mẫu đơn xin nghỉ phép chuyên nghiệp</h3>
      <p>Cấu trúc một đơn xin nghỉ phép chuẩn gồm các phần:</p>
      <div class="template-box">[Người gửi: tên, chức vụ, bộ phận]
[Địa chỉ công ty]
[Tên người nhận: quản lý trực tiếp / giám đốc]
[Chức danh người nhận]

[Thành phố, ngày tháng năm]

            ĐƠN XIN NGHỈ PHÉP

Kính gửi [tên người nhận],

Tôi tên là [tên đầy đủ], chức vụ [chức vụ] tại
bộ phận [bộ phận] của công ty [tên công ty].

Tôi xin nghỉ phép từ ngày [bắt đầu] đến ngày
[kết thúc], tổng cộng [số ngày] ngày.

Lý do: [trình bày lý do]

Trong thời gian nghỉ, tôi đã bàn giao công việc
cho [tên đồng nghiệp] để đảm bảo không bị
gián đoạn.

Tôi quay lại làm việc vào ngày [ngày trở lại].

Trân trọng,
[Chữ ký]
[Tên người gửi]</div>
      <div class="highlight-box">💡 Nhớ <strong>điền đầy đủ thông tin</strong> và <strong>nêu rõ người nhận bàn giao</strong> công việc.</div>
    `
  },
  {
    id: "luu_y",
    keywords: [
      "lưu ý", "chú ý", "cần biết", "quan trọng", "nhớ gì", "tips",
      "bí quyết", "kinh nghiệm", "thái độ", "lịch sự", "lý do", "trình bày",
      "bàn giao", "rõ ràng", "chuyên nghiệp", "nên", "không nên",
      "cẩn thận", "tránh"
    ],
    answer: `
      <h3>⚠️ 3 lưu ý quan trọng khi viết đơn xin nghỉ phép</h3>
      <ol>
        <li>
          <strong>🤝 Thái độ thân thiện và lịch sự:</strong>
          <p>Thể hiện thái độ chân thành, có trách nhiệm với công việc. Cấp trên sẽ đồng cảm và tin tưởng hơn trước thái độ chân thành.</p>
        </li>
        <li>
          <strong>📌 Lý do xin nghỉ hợp lý:</strong>
          <p>Phải đưa ra <strong>lý do chính đáng</strong> (nghỉ ốm, xin visa, công tác…). Ngay cả nghỉ không lương, nếu lý do không thuyết phục vẫn <strong>bị từ chối</strong>.</p>
        </li>
        <li>
          <strong>📄 Trình bày mẫu đơn rõ ràng:</strong>
          <p>Đơn phải chỉn chu, rõ ràng, thể hiện sự chuyên nghiệp. Nếu nghỉ dài ngày → <strong>phải có phương án bàn giao công việc</strong>.</p>
        </li>
      </ol>
      <div class="highlight-box">🔴 Điều cấp trên quan tâm nhất: <strong>sự vắng mặt của bạn có ảnh hưởng đến công việc của công ty không</strong>. Luôn chuẩn bị phương án bàn giao trước khi nộp đơn!</div>
    `
  },
  {
    id: "bat_kha_khang",
    keywords: [
      "bất khả kháng", "khẩn cấp", "tai nạn", "tang lễ", "emergency",
      "nghỉ trước", "gửi đơn sau", "đột xuất", "cấp bách", "gấp",
      "trường hợp đặc biệt"
    ],
    answer: `
      <h3>🚨 Trường hợp bất khả kháng</h3>
      <p>Trong các trường hợp <strong>bất khả kháng</strong> như tai nạn, tang lễ hoặc các tình huống khẩn cấp:</p>
      <ul>
        <li>Nhân viên <strong>có thể nghỉ trước, gửi đơn sau</strong>.</li>
        <li>Tuy nhiên, <strong>phải báo trước cho quản lý</strong> (qua điện thoại, tin nhắn…) để họ có thể sắp xếp công việc.</li>
        <li>Sau khi quay lại, cần hoàn tất thủ tục đơn xin nghỉ phép.</li>
      </ul>
      <div class="highlight-box">💡 Dù là trường hợp đặc biệt, vẫn nên <strong>thông báo sớm nhất có thể</strong> cho quản lý trực tiếp.</div>
    `
  },
  {
    id: "phong_nhan_su",
    keywords: [
      "phòng nhân sự", "nhân sự", "HR", "chuyển đơn", "nộp đơn",
      "cập nhật", "tính ngày", "bộ phận nhân sự", "nộp cho ai"
    ],
    answer: `
      <h3>📨 Vai trò của Phòng Nhân sự</h3>
      <p>Sau khi đơn xin nghỉ phép được cấp trên phê duyệt:</p>
      <ol>
        <li>Nhân viên <strong>chuyển đơn đã duyệt</strong> đến Phòng Nhân sự.</li>
        <li>Phòng Nhân sự sẽ <strong>cập nhật và tính thời gian nghỉ</strong>.</li>
      </ol>
      <div class="highlight-box">⚠️ <strong>Quan trọng:</strong> Nếu không chuyển đơn cho Phòng Nhân sự, ngay cả khi bạn đã ký tên và được duyệt, đơn của bạn vẫn <strong>KHÔNG được chấp nhận</strong>!</div>
    `
  },
  {
    id: "nghi_phep_nam",
    keywords: [
      "phép năm", "nghỉ phép năm", "12 ngày", "annual leave",
      "ngày nghỉ trong năm", "bao nhiêu ngày phép"
    ],
    answer: `
      <h3>🗓️ Nghỉ phép năm</h3>
      <p>Theo quy định của pháp luật:</p>
      <ul>
        <li>Nhân viên được nghỉ phép năm <strong>ít nhất 12 ngày</strong> trong một năm làm việc.</li>
        <li>Số ngày cụ thể có thể khác nhau tùy theo chính sách công ty và thâm niên.</li>
      </ul>
      <div class="highlight-box">💡 Thời gian nghỉ phép cụ thể thường được quy định trong <strong>hợp đồng lao động</strong> của từng công ty.</div>
    `
  },
  {
    id: "nghi_khong_luong",
    keywords: [
      "không lương", "nghỉ không lương", "unpaid", "không hưởng lương",
      "hết phép"
    ],
    answer: `
      <h3>💰 Nghỉ phép không hưởng lương</h3>
      <p>Khi nhân viên muốn nghỉ dài hạn vì lý do cá nhân nhưng <strong>không đủ số ngày phép năm</strong>:</p>
      <ul>
        <li>Có thể xin <strong>nghỉ phép không hưởng lương</strong>.</li>
        <li>Quy trình vẫn giống quy trình nghỉ phép thông thường: nộp đơn → phê duyệt → chuyển Phòng NS.</li>
        <li>Cần đưa ra <strong>lý do thuyết phục</strong>, nếu không vẫn bị từ chối.</li>
      </ul>
    `
  }
];

/**
 * Default / fallback answer
 */
const DEFAULT_ANSWER = `
  <p>Xin lỗi, tôi chưa tìm thấy thông tin phù hợp với câu hỏi của bạn trong cơ sở dữ liệu nghỉ phép.</p>
  <p>Bạn có thể thử hỏi về:</p>
  <ul>
    <li>📋 Các <strong>loại nghỉ phép</strong> phổ biến</li>
    <li>📝 <strong>Quy trình</strong> xin nghỉ phép (3 bước)</li>
    <li>⏰ <strong>Thời gian</strong> xin phép trước</li>
    <li>✅ <strong>Ai phê duyệt</strong> đơn nghỉ phép</li>
    <li>📄 <strong>Mẫu đơn</strong> xin nghỉ phép</li>
    <li>⚠️ <strong>Lưu ý</strong> khi viết đơn</li>
    <li>🚨 Trường hợp <strong>bất khả kháng</strong></li>
  </ul>
`;

/**
 * Welcome message
 */
const WELCOME_MESSAGE = `
  <p>Xin chào! 👋 Tôi là <strong>HR Assistant</strong>, trợ lý hỏi đáp về <strong>quy trình xin nghỉ phép</strong> tại doanh nghiệp.</p>
  <p>Bạn có thể hỏi tôi về:</p>
  <ul>
    <li>Các loại nghỉ phép phổ biến</li>
    <li>Quy trình xin nghỉ phép (3 bước)</li>
    <li>Thời gian xin phép trước, phân cấp phê duyệt</li>
    <li>Mẫu đơn xin nghỉ phép chuyên nghiệp</li>
    <li>Các lưu ý quan trọng khi viết đơn</li>
  </ul>
  <p>Hãy gõ câu hỏi hoặc chọn một chủ đề bên dưới nhé! 🚀</p>
`;
