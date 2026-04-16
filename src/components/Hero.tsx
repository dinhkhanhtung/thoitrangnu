import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Phong cách <span className="text-orange-600">Mùa Hè</span> Đẳng Cấp
            </h1>
            <p className="text-lg text-gray-600">
              Khám phá bộ sưu tập thời trang mới nhất với thiết kế hiện đại, chất lượng cao và giá cả hợp lý.
            </p>
            <div className="flex gap-4">
              <Link href="/san-pham">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Mua ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/san-pham">
                <Button size="lg" variant="outline">
                  Xem thêm
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop"
                alt="Fashion Model"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Sale Badge */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
              Sale 30%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
