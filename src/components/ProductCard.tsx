'use client';

import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  sale?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  sale = false,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/san-pham/${id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-gray-50">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Sale Badge */}
      {sale && (
        <div className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
          Sale
        </div>
      )}

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-4 right-4 flex flex-col gap-2"
      >
        <Button
          size="icon"
          variant="secondary"
          className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-amber-700 hover:text-white transition-colors"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Content */}
      <div className="p-6">
        {category && (
          <p className="text-xs text-gray-500 mb-2 font-medium tracking-wide uppercase">{category}</p>
        )}
        <Link href={`/san-pham/${id}`}>
          <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors text-base leading-relaxed">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-lg font-semibold text-gray-900">
            {price.toLocaleString('vi-VN')}₫
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice.toLocaleString('vi-VN')}₫
            </span>
          )}
        </div>
        <Button
          className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Thêm vào giỏ
        </Button>
      </div>
    </motion.div>
  );
}
