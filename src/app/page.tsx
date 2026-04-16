import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import BrandShowcase from '@/components/BrandShowcase';
import TrendingProducts from '@/components/TrendingProducts';
import PromotionalBanners from '@/components/PromotionalBanners';
import TopCategories from '@/components/TopCategories';
import ValuePropositions from '@/components/ValuePropositions';
import Features from '@/components/Features';
import BestSellingProducts from '@/components/BestSellingProducts';

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandShowcase />
      <FeaturedCollections />
      <ValuePropositions />
      <TrendingProducts />
      <PromotionalBanners />
      <TopCategories />
      <Features />
      <BestSellingProducts />
    </div>
  );
}
