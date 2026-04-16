'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
            >
              BST Mùa Hè 2024
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Phong cách <span className="text-orange-600">Đẳng Cấp</span> <br />
              Cho Mọi Lúc Mọi Nơi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Khám phá bộ sưu tập thời trang mới nhất với thiết kế hiện đại, chất lượng cao và giá cả hợp lý. Thể hiện cá tính riêng của bạn.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              <Link href="/san-pham">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Mua ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/featured-collections">
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Xem BST
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop"
                alt="Fashion Model"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Sale Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
            >
              Sale 30%
            </motion.div>
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-lg shadow-lg"
            >
              <p className="text-sm font-medium text-gray-900">Miễn phí vận chuyển</p>
              <p className="text-xs text-gray-600">Đơn hàng trên 500k</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
