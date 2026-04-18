import Link from 'next/link';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-light mb-6 tracking-tight">
              Fashion<span className="text-amber-500 font-normal">Store</span>
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
              Chào mừng đến với cửa hàng của chúng tôi. Nơi cung cấp các sản phẩm thời trang chất lượng cao.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-light mb-6 tracking-wide">Liên kết</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-lg font-light mb-6 tracking-wide">Hỗ trợ</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/chinh-sach-doi-tra" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-mua-hang" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link href="/cau-hoi-thuong-gap" className="text-gray-400 hover:text-amber-500 transition-colors font-light">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-light mb-6 tracking-wide">Đăng ký nhận tin</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
              Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors font-light"
              />
              <button className="px-5 py-3 bg-amber-700 hover:bg-amber-800 rounded-xl transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="font-light">0982581222</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="font-light">Cu Van, Thái Nguyên</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p className="font-light">&copy; 2024 FashionStore. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-6 justify-end">
              <Link href="/chinh-sach-dieu-khoan" className="hover:text-white transition-colors font-light">
                Điều khoản sử dụng
              </Link>
              <Link href="/chinh-sach-bao-mat" className="hover:text-white transition-colors font-light">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
