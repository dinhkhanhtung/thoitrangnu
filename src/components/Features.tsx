import { Truck, Shield, RotateCcw, Gift } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Giao hàng toàn quốc',
    description: 'Miễn phí vận chuyển đơn hàng trên 500k',
  },
  {
    icon: Shield,
    title: 'Thanh toán an toàn',
    description: 'Bảo mật thông tin 100%',
  },
  {
    icon: RotateCcw,
    title: 'Đổi trả 30 ngày',
    description: 'Hoàn tiền nếu không hài lòng',
  },
  {
    icon: Gift,
    title: 'Quà tặng đặc biệt',
    description: 'Nhiều ưu đãi hấp dẫn',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
