import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-3xl">🛍️</span>
            <span>My Product</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition">Home</Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition">Products</Link>
            <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition">Categories</Link>
            <Link href="/reviews" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition">Reviews</Link>
          </nav>
          <Link href="/products" className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}