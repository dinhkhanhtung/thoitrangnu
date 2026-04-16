'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const collections = [
  {
    id: '1',
    name: 'BST Mùa Hè 2024',
    description: 'Bộ sưu tập mùa hè mới nhất với thiết kế hiện đại',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    link: '/san-pham?collection=mua-he-2024',
  },
  {
    id: '2',
    name: 'BST Sale Đặc Biệt',
    description: 'Giảm giá lên đến 50% cho các sản phẩm chọn lọc',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
    link: '/san-pham?collection=sale',
  },
  {
    id: '3',
    name: 'BST Công Sở',
    description: 'Phong cách chuyên nghiệp cho môi trường công sở',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=400&fit=crop',
    link: '/san-pham?collection=cong-so',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
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
                <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{collection.description}</p>
                    <span className="inline-block text-orange-400 font-medium group-hover:text-orange-300 transition-colors">
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
