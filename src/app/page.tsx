import Hero from '@/components/Hero';
import TrendingProducts from '@/components/TrendingProducts';
import PromotionalBanners from '@/components/PromotionalBanners';
import TopCategories from '@/components/TopCategories';
import Features from '@/components/Features';
import BestSellingProducts from '@/components/BestSellingProducts';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrendingProducts />
      <PromotionalBanners />
      <TopCategories />
      <Features />
      <BestSellingProducts />
    </div>
  );
}
