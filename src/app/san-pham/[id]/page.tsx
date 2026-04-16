'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Share2, Star, Minus, Plus } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const productData: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Áo sơ mi nữ công sở',
    price: 350000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop',
    category: 'Áo sơ mi',
    sale: true,
    description: 'Áo sơ mi nữ công sở với thiết kế thanh lịch, chất liệu cotton cao cấp thoáng mát. Phù hợp cho môi trường văn phòng và các buổi gặp gỡ trang trọng.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Trắng', 'Xanh nhạt', 'Hồng pastel'],
    rating: 4.5,
    reviews: 128,
  },
  '2': {
    id: '2',
    name: 'Đầm maxi mùa hè',
    price: 550000,
    originalPrice: 700000,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop',
    category: 'Đầm',
    sale: true,
    description: 'Đầm maxi mùa hè với họa tiết hoa nhã nhặn, chất liệu lụa mềm mại. Thiết kế tôn dáng, thích hợp cho các buổi dạo phố, tiệc tùng mùa hè.',
    sizes: ['S', 'M', 'L'],
    colors: ['Hồng', 'Xanh', 'Vàng'],
    rating: 4.8,
    reviews: 95,
  },
  '3': {
    id: '3',
    name: 'Váy xòe công chúa',
    price: 420000,
    originalPrice: 550000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop',
    category: 'Váy',
    sale: true,
    description: 'Váy xòe công chúa với tầng voan mềm mại, tạo vẻ đẹp dịu dàng và nữ tính. Phù hợp cho các buổi tiệc, dạo chơi.',
    sizes: ['S', 'M', 'L'],
    colors: ['Trắng', 'Đen', 'Đỏ'],
    rating: 4.6,
    reviews: 87,
  },
  '4': {
    id: '4',
    name: 'Áo khoác blazer',
    price: 680000,
    originalPrice: 850000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
    category: 'Áo khoác',
    sale: true,
    description: 'Áo khoác blazer cao cấp với thiết kế hiện đại, form dáng chuẩn. Phù hợp cho môi trường công sở và các buổi gặp gỡ trang trọng.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Đen', 'Xám', 'Be'],
    rating: 4.7,
    reviews: 156,
  },
  '5': {
    id: '5',
    name: 'Áo thun cotton basic',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
    category: 'Áo thun',
    description: 'Áo thun cotton basic với chất liệu 100% cotton thoáng mát. Thiết kế đơn giản, dễ phối đồ.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Trắng', 'Đen', 'Xanh dương'],
    rating: 4.3,
    reviews: 234,
  },
  '6': {
    id: '6',
    name: 'Quần jeans skinny',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=1000&fit=crop',
    category: 'Quần',
    description: 'Quần jeans skinny với chất liệu denim cao cấp, co giãn tốt. Form dáng tôn chân, thời trang.',
    sizes: ['26', '27', '28', '29', '30'],
    colors: ['Xanh đậm', 'Xanh nhạt', 'Đen'],
    rating: 4.4,
    reviews: 189,
  },
};

const relatedProducts = [
  {
    id: '2',
    name: 'Đầm maxi mùa hè',
    price: 550000,
    originalPrice: 700000,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop',
    category: 'Đầm',
    sale: true,
  },
  {
    id: '5',
    name: 'Áo thun cotton basic',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'Áo thun',
  },
  {
    id: '3',
    name: 'Váy xòe công chúa',
    price: 420000,
    originalPrice: 550000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
    category: 'Váy',
    sale: true,
  },
  {
    id: '6',
    name: 'Quần jeans skinny',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
    category: 'Quần',
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = productData[productId] || productData['1'];

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <a href="/" className="hover:text-orange-600">Trang chủ</a>
          <span className="mx-2">/</span>
          <a href="/san-pham" className="hover:text-orange-600">Sản phẩm</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="aspect-[4/5] bg-white rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white rounded overflow-hidden cursor-pointer hover:opacity-80">
                  <img
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews} đánh giá)</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-orange-600">
                {product.price.toLocaleString('vi-VN')}₫
              </span>
              {product.originalPrice && (
                <>
                  <span className="ml-3 text-xl text-gray-400 line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}₫
                  </span>
                  <span className="ml-3 bg-red-500 text-white text-sm px-2 py-1 rounded">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Kích thước</h3>
              <div className="flex gap-2">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? 'border-orange-600 bg-orange-600 text-white'
                        : 'border-gray-300 hover:border-orange-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Màu sắc</h3>
              <div className="flex gap-2">
                {product.colors.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded ${
                      selectedColor === color
                        ? 'border-orange-600 bg-orange-600 text-white'
                        : 'border-gray-300 hover:border-orange-600'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Số lượng</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Thêm vào giỏ
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">✓</span>
                <span>Miễn phí vận chuyển đơn hàng trên 500k</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">✓</span>
                <span>Đổi trả trong vòng 30 ngày</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">✓</span>
                <span>Thanh toán an toàn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
