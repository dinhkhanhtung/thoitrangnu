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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <Link href={`/san-pham/${id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Sale Badge */}
      {sale && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
          Sale
        </div>
      )}

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-3 right-3 flex flex-col gap-2"
      >
        <Button
          size="icon"
          variant="secondary"
          className="w-8 h-8 rounded-full bg-white shadow-md hover:bg-orange-600 hover:text-white"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Content */}
      <div className="p-4">
        {category && (
          <p className="text-xs text-gray-500 mb-1">{category}</p>
        )}
        <Link href={`/san-pham/${id}`}>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-orange-600">
            {price.toLocaleString('vi-VN')}₫
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice.toLocaleString('vi-VN')}₫
            </span>
          )}
        </div>
        <Button
          className="w-full mt-3 bg-orange-600 hover:bg-orange-700"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Thêm vào giỏ
        </Button>
      </div>
    </motion.div>
  );
}
