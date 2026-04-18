'use client';

import { motion } from 'framer-motion';
import { Crown, Gem, Star, Zap } from 'lucide-react';

const brands = [
  {
    name: 'BST Luxury',
    icon: Crown,
    description: 'Bộ sưu tập cao cấp',
    link: '/san-pham?brand=luxury',
  },
  {
    name: 'BST Classic',
    icon: Gem,
    description: 'Phong cách cổ điển',
    link: '/san-pham?brand=classic',
  },
  {
    name: 'BST Modern',
    icon: Star,
    description: 'Thiết kế hiện đại',
    link: '/san-pham?brand=modern',
  },
  {
    name: 'BST Trend',
    icon: Zap,
    description: 'Xu hướng mới nhất',
    link: '/san-pham?brand=trend',
  },
];

export default function BrandShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.a
              key={index}
              href={brand.link}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <brand.icon className="w-10 h-10 mx-auto mb-4 text-amber-700 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-medium text-gray-900 mb-2 text-sm tracking-wide">{brand.name}</h3>
                <p className="text-xs text-gray-600 font-light">{brand.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
