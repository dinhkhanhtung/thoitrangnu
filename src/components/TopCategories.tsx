import Link from 'next/link';

const categories = [
  {
    id: '1',
    name: 'Đầm',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop',
    count: 45,
  },
  {
    id: '2',
    name: 'Áo sơ mi',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop',
    count: 32,
  },
  {
    id: '3',
    name: 'Váy',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&h=200&fit=crop',
    count: 28,
  },
  {
    id: '4',
    name: 'Áo khoác',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop',
    count: 19,
  },
  {
    id: '5',
    name: 'Quần',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=200&fit=crop',
    count: 36,
  },
  {
    id: '6',
    name: 'Phụ kiện',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200&h=200&fit=crop',
    count: 24,
  },
];

export default function TopCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Danh mục nổi bật</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/san-pham?category=${category.id}`}
              className="group"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
              <h3 className="text-center font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-center text-sm text-gray-500">{category.count} sản phẩm</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
