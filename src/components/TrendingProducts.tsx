import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const trendingProducts = [
  {
    id: '1',
    name: 'Áo sơ mi nữ công sở',
    price: 350000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    category: 'Áo sơ mi',
    sale: true,
  },
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
    id: '3',
    name: 'Váy xòe công chúa',
    price: 420000,
    originalPrice: 550000,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
    category: 'Váy',
    sale: true,
  },
  {
    id: '4',
    name: 'Áo khoác blazer',
    price: 680000,
    originalPrice: 850000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
    category: 'Áo khoác',
    sale: true,
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Sản phẩm xu hướng</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
