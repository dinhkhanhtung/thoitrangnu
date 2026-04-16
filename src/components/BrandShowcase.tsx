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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.a
              key={index}
              href={brand.link}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                <brand.icon className="w-8 h-8 mx-auto mb-3 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-600">{brand.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
