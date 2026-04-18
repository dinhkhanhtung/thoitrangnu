'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const collections = [
  {
    id: '1',
    name: 'BST Mùa Hè 2024',
    description: 'Bộ sưu tập mùa hè mới nhất với thiết kế tinh tế',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
    link: '/san-pham?collection=mua-he-2024',
  },
  {
    id: '2',
    name: 'BST Sale Đặc Biệt',
    description: 'Ưu đãi độc quyền cho các sản phẩm chọn lọc',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    link: '/san-pham?collection=sale',
  },
  {
    id: '3',
    name: 'BST Công Sở',
    description: 'Phong cách chuyên nghiệp, thanh lịch',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=600&fit=crop',
    link: '/san-pham?collection=cong-so',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center tracking-tight"
        >
          Bộ Sưu Tập Nổi Bật
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={collection.link} className="group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-light mb-2">{collection.name}</h3>
                    <p className="text-sm opacity-90 mb-4 font-light">{collection.description}</p>
                    <span className="inline-block text-amber-400 font-medium group-hover:text-amber-300 transition-colors text-sm tracking-wide">
                      Khám phá ngay →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
