# Cách lưu trữ TOÀN BỘ code + hướng dẫn sau khi mình gửi

Ý bạn là: sau khi có code và hướng dẫn rồi, làm sao lưu lại để không bị mất.

## Cách đơn giản nhất (khuyên dùng)

Trong thư mục `diary-web` đã có sẵn file:
- `TAO_GOI_LUU_TRU.sh`

File này sẽ tự đóng gói toàn bộ thứ bạn cần thành 1 file `.zip`.

### Bước làm
1. Mở Terminal tại thư mục project `BTL_LTDD`.
2. Chạy lệnh:
   ```bash
   bash diary-web/TAO_GOI_LUU_TRU.sh
   ```
3. Sau khi chạy xong, file lưu trữ sẽ nằm trong:
   - `diary-web/backup/`

Tên file ví dụ:
- `nhat-ky-doi_20260511_103000.zip`

---

## File zip này chứa gì?
- `index.html`
- `style.css`
- `app.js`
- `HUONG_DAN_CHAY.md`
- `HUONG_DAN_LUU_TAI_LIEU.md`

Tức là đủ cả: **mã nguồn + hướng dẫn**.

---

## Nếu bạn không dùng Terminal
Bạn vẫn có thể lưu thủ công:
1. Vào thư mục `diary-web`.
2. Chọn các file ở trên.
3. Chuột phải -> Send to -> Compressed (zipped) folder (Windows).
4. Đổi tên file zip theo ý muốn.

---

## Gợi ý lưu an toàn
- Lưu 1 bản ở máy tính.
- Lưu thêm 1 bản trên Google Drive.
- Lưu thêm 1 bản trên USB.

=> Như vậy dù máy hỏng, bạn vẫn còn dữ liệu.
