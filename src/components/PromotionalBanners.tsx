import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const banners = [
  {
    title: 'Xuân Hè 2024',
    subtitle: 'Bộ sưu tập mới',
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
  },
  {
    title: 'Giảm giá',
    subtitle: 'Săn sale ngay',
    discount: '-30%',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
  },
  {
    title: 'Hàng mới',
    subtitle: 'Cập nhật liên tục',
    discount: 'NEW',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
  },
];

export default function PromotionalBanners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6">
                <span className="text-4xl font-bold mb-2">{banner.discount}</span>
                <h3 className="text-2xl font-bold mb-1">{banner.title}</h3>
                <p className="text-sm mb-4">{banner.subtitle}</p>
                <Button variant="secondary" size="sm">
                  Khám phá ngay
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
