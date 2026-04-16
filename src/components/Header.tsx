'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  const categories = {
    nam: ['Áo Polo', 'Áo Phông', 'Áo Sơmi', 'Áo Hoodie', 'Áo Suit', 'Áo Măng tô'],
    nu: ['Đầm', 'Váy', 'Áo Sơmi', 'Áo Thun', 'Áo Khoác'],
    treem: ['Áo', 'Quần', 'Váy', 'Giày'],
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Fashion<span className="text-orange-600">Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Trang chủ
            </Link>

            {/* Nam Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen('nam')}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Nam
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen === 'nam' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  {categories.nam.map((item) => (
                    <Link
                      key={item}
                      href={`/san-pham?category=${encodeURIComponent(item)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Nữ Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen('nu')}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Nữ
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen === 'nu' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  {categories.nu.map((item) => (
                    <Link
                      key={item}
                      href={`/san-pham?category=${encodeURIComponent(item)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Trẻ em Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen('treem')}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Trẻ em
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen === 'treem' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  {categories.treem.map((item) => (
                    <Link
                      key={item}
                      href={`/san-pham?category=${encodeURIComponent(item)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/san-pham" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Sản phẩm
            </Link>
            <Link href="/ve-chung-toi" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Về chúng tôi
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
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Trang chủ
              </Link>
              <Link href="/san-pham?gender=nam" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Nam
              </Link>
              <Link href="/san-pham?gender=nu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Nữ
              </Link>
              <Link href="/san-pham?gender=treem" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Trẻ em
              </Link>
              <Link href="/san-pham" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Sản phẩm
              </Link>
              <Link href="/ve-chung-toi" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Về chúng tôi
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
