'use client';

import { motion } from 'framer-motion';
import { Sparkles, Compass, Users } from 'lucide-react';

const propositions = [
  {
    icon: Sparkles,
    title: 'Hãy Biến Nó Của Riêng Bạn',
    description: 'Dù nhu cầu hoặc ngân sách của bạn là gì, chúng tôi có một sản phẩm thời trang hoàn hảo cho bạn',
    link: '/san-pham',
  },
  {
    icon: Compass,
    title: 'Sẵn Sàng Cho Mọi Dịp',
    description: 'Từ công sở đến dã ngoại, bộ sưu tập của chúng tôi luôn sẵn sàng cho mọi hoàn cảnh',
    link: '/san-pham',
  },
  {
    icon: Users,
    title: 'Phù Hợp Với Nhiều Lứa Tuổi',
    description: 'Thiết kế đa dạng, phù hợp với mọi lứa tuổi và phong cách cá nhân',
    link: '/san-pham',
  },
];

export default function ValuePropositions() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {propositions.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
                <prop.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-tight">{prop.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">{prop.description}</p>
              <a
                href={prop.link}
                className="text-amber-700 font-medium hover:text-amber-800 transition-colors text-sm tracking-wide"
              >
                Khám phá ngay →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
