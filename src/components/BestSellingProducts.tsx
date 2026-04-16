import ProductCard from './ProductCard';

const bestSellingProducts = [
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

export default function BestSellingProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Sản phẩm bán chạy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
