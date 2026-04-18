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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-tight">
            Fashion<span className="text-amber-700 font-normal">Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
              Trang chủ
            </Link>

            {/* Nam Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen('nam')}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Nam
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen === 'nam' && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3">
                  {categories.nam.map((item) => (
                    <Link
                      key={item}
                      href={`/san-pham?category=${encodeURIComponent(item)}`}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-light"
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
              <button className="flex items-center gap-1 text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Nữ
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen === 'nu' && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3">
                  {categories.nu.map((item) => (
                    <Link
                      key={item}
                      href={`/san-pham?category=${encodeURIComponent(item)}`}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-light"
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
              <button className="flex items-center gap-1 text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Trẻ em
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen === 'treem' && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3">
                  {categories.treem.map((item) => (
                    <Link
                      key={item}
                      href={`/san-pham?category=${encodeURIComponent(item)}`}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-light"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/san-pham" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
              Sản phẩm
            </Link>
            <Link href="/ve-chung-toi" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
              Về chúng tôi
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </Button>
            <Link href="/gio-hang">
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Trang chủ
              </Link>
              <Link href="/san-pham?gender=nam" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Nam
              </Link>
              <Link href="/san-pham?gender=nu" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Nữ
              </Link>
              <Link href="/san-pham?gender=treem" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Trẻ em
              </Link>
              <Link href="/san-pham" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Sản phẩm
              </Link>
              <Link href="/ve-chung-toi" className="text-gray-700 hover:text-amber-700 transition-colors font-light tracking-wide">
                Về chúng tôi
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
