'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Fashion<span className="text-orange-600">Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Trang chủ
            </Link>
            <Link href="/san-pham" className="text-gray-700 hover:text-orange-600 transition-colors">
              Sản phẩm
            </Link>
            <Link href="/ve-chung-toi" className="text-gray-700 hover:text-orange-600 transition-colors">
              Về chúng tôi
            </Link>
            <Link href="/lien-he" className="text-gray-700 hover:text-orange-600 transition-colors">
              Liên hệ
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Link href="/gio-hang">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Trang chủ
              </Link>
              <Link href="/san-pham" className="text-gray-700 hover:text-orange-600 transition-colors">
                Sản phẩm
              </Link>
              <Link href="/ve-chung-toi" className="text-gray-700 hover:text-orange-600 transition-colors">
                Về chúng tôi
              </Link>
              <Link href="/lien-he" className="text-gray-700 hover:text-orange-600 transition-colors">
                Liên hệ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
