'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

const allProducts = [
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
  {
    id: '5',
    name: 'Áo thun cotton basic',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'Áo thun',
  },
  {
    id: '6',
    name: 'Quần jeans skinny',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
    category: 'Quần',
  },
  {
    id: '7',
    name: 'Đầm body nhung',
    price: 650000,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop',
    category: 'Đầm',
  },
  {
    id: '8',
    name: 'Áo khoác denim',
    price: 580000,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=500&fit=crop',
    category: 'Áo khoác',
  },
  {
    id: '9',
    name: 'Váy midi hoa nhí',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    category: 'Váy',
  },
  {
    id: '10',
    name: 'Áo sơ mi lụa',
    price: 520000,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=500&fit=crop',
    category: 'Áo sơ mi',
  },
  {
    id: '11',
    name: 'Quần short jean',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop',
    category: 'Quần',
  },
  {
    id: '12',
    name: 'Đầm suông công sở',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&h=500&fit=crop',
    category: 'Đầm',
  },
];

const categories = ['Tất cả', 'Áo sơ mi', 'Đầm', 'Váy', 'Áo khoác', 'Quần', 'Áo thun'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = selectedCategory === 'Tất cả'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sản phẩm</h1>
          <p className="text-gray-600">Khám phá bộ sưu tập thời trang mới nhất</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="w-5 h-5" />
                <h3 className="font-bold">Bộ lọc</h3>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Danh mục</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === category
                          ? 'bg-orange-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3">Khoảng giá</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Dưới 200k</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>200k - 500k</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>500k - 1tr</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Trên 1tr</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                Hiển thị {currentProducts.length} / {filteredProducts.length} sản phẩm
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Trước
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'bg-orange-600 hover:bg-orange-700' : ''}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Sau
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
