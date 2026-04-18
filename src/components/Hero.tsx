'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-5 py-2.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium tracking-wide"
            >
              BST Mùa Hè 2024
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight"
            >
              Phong cách <span className="font-normal text-amber-700">Đẳng Cấp</span> <br />
              Cho Mọi Lúc Mọi Nơi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
            >
              Khám phá bộ sưu tập thời trang mới nhất với thiết kế tinh tế, chất lượng cao và phong cách riêng biệt.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <Link href="/san-pham">
                <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-base font-medium rounded-lg">
                  Mua ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/featured-collections">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-medium rounded-lg">
                  Xem BST
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop"
                alt="Fashion Model"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Sale Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-6 right-6 bg-amber-700 text-white px-5 py-2.5 rounded-full font-medium shadow-xl"
            >
              Sale 30%
            </motion.div>
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <p className="text-sm font-medium text-gray-900">Miễn phí vận chuyển</p>
              <p className="text-xs text-gray-600 mt-0.5">Đơn hàng trên 500k</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
