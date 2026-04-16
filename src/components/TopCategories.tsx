'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: '1',
    name: 'Đầm',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop',
    count: 45,
  },
  {
    id: '2',
    name: 'Áo sơ mi',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop',
    count: 32,
  },
  {
    id: '3',
    name: 'Váy',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&h=200&fit=crop',
    count: 28,
  },
  {
    id: '4',
    name: 'Áo khoác',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop',
    count: 19,
  },
  {
    id: '5',
    name: 'Quần',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=200&fit=crop',
    count: 36,
  },
  {
    id: '6',
    name: 'Phụ kiện',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200&h=200&fit=crop',
    count: 24,
  },
];

export default function TopCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Danh mục nổi bật
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/san-pham?category=${category.id}`}
                className="group"
              >
                <div className="relative aspect-square rounded-full overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <h3 className="text-center font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-center text-sm text-gray-500">{category.count} sản phẩm</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
