import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Fashion<span className="text-orange-500">Store</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Chào mừng đến với cửa hàng của chúng tôi. Nơi cung cấp các sản phẩm thời trang chất lượng cao.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chinh-sach-doi-tra" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-mua-hang" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link href="/cau-hoi-thuong-gap" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Đăng ký nhận tin</h3>
            <p className="text-gray-400 text-sm mb-4">
              Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              />
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0982581222</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cu Van, Thái Nguyên</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>&copy; 2024 FashionStore. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-4 justify-end">
              <Link href="/chinh-sach-dieu-khoan" className="hover:text-white transition-colors">
                Điều khoản sử dụng
              </Link>
              <Link href="/chinh-sach-bao-mat" className="hover:text-white transition-colors">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
