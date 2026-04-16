# FashionStore - Website Thời Trang Nữ

Website bán quần áo thời trang nữ được xây dựng với Next.js 14, Firebase, và imgbb API. Tất cả dịch vụ sử dụng đều miễn phí 100%.

## Tech Stack (100% Free)

- **Frontend**: Next.js 14 App Router + TypeScript + TailwindCSS + shadcn/ui + framer-motion
- **Database**: Firebase Firestore (NoSQL database)
- **Authentication**: Firebase Auth
- **Image Storage**: imgbb API (free image hosting)
- **Deployment**: Vercel (free tier)

## Features

- Trang chủ với Hero, Trending Products, Promotional Banners, Categories, Features, Best Selling Products
- Danh sách sản phẩm với filter và pagination
- Chi tiết sản phẩm với gallery, size/color selection
- Giỏ hàng với CRUD items
- Trang thanh toán với form checkout
- Admin Dashboard quản lý sản phẩm
- Upload ảnh qua imgbb API

## Cấu trúc dự án

```
/
├── src/
│   ├── app/
│   │   ├── admin/dashboard/     # Admin dashboard
│   │   ├── gio-hang/            # Cart page
│   │   ├── san-pham/            # Products listing & detail
│   │   ├── thanh-toan/          # Checkout page
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...                  # Other components
│   └── lib/
│       ├── firebase.ts          # Firebase config
│       ├── imgbb.ts             # imgbb API utility
│       └── utils.ts             # Utilities
├── .env.example                 # Environment variables template
└── README.md
```

## Cài đặt

### 1. Clone dự án

```bash
git clone https://github.com/dinhkhanhtung/thoitrangnu.git
cd thoitrangnu
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cấu hình Firebase

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Tạo project mới
3. Enable **Firestore Database**
4. Enable **Authentication**
5. Lấy API keys từ Project Settings
6. Thêm keys vào file `.env`

### 4. Lấy imgbb API Key

1. Truy cập [imgbb.com](https://imgbb.com/)
2. Đăng ký tài khoản miễn phí
3. Lấy API Key từ trang Settings
4. Thêm vào file `.env`

### 5. Tạo file .env

Sao chép `.env.example` thành `.env` và điền thông tin:

```bash
cp .env.example .env
```

Nội dung file `.env`:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# imgbb API Key
IMGBB_KEY=your_imgbb_api_key
```

## Chạy dự án

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Deploy lên Vercel

### Cách 1: Deploy qua Vercel CLI

1. Cài đặt Vercel CLI:
```bash
npm i -g vercel
```

2. Login vào Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Thêm environment variables trong Vercel Dashboard:
   - Vào Project Settings > Environment Variables
   - Thêm tất cả biến từ file `.env`

### Cách 2: Deploy qua GitHub

1. Push code lên GitHub repository
2. Import repository vào [Vercel](https://vercel.com/new)
3. Thêm environment variables trong Project Settings
4. Deploy tự động

## Các trang chính

- `/` - Trang chủ
- `/san-pham` - Danh sách sản phẩm
- `/san-pham/[id]` - Chi tiết sản phẩm
- `/gio-hang` - Giỏ hàng
- `/thanh-toan` - Thanh toán
- `/admin/dashboard` - Quản lý sản phẩm

## Tùy chỉnh

### Thay đổi màu sắc

Màu chính hiện tại là `#b45309` (cam). Để thay đổi:
- Tìm và thay thế `orange-600` trong Tailwind classes
- Hoặc thêm custom màu vào `tailwind.config.ts`

### Thêm sản phẩm mới

1. Vào `/admin/dashboard`
2. Click "Thêm sản phẩm"
3. Điền thông tin và upload ảnh
4. Lưu sản phẩm

## Hỗ trợ

- Hotline: 0982581222
- Email: contact@fashionstore.com
- Địa chỉ: Cu Van, Thái Nguyên

## License

MIT License
