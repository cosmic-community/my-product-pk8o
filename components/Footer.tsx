export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
              <span>🛍️</span> My Product
            </h3>
            <p className="text-sm text-gray-400">Your one-stop shop for quality products.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white transition">All Products</a></li>
              <li><a href="/categories" className="hover:text-white transition">Categories</a></li>
              <li><a href="/reviews" className="hover:text-white transition">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">About</h4>
            <p className="text-sm text-gray-400">Built with Next.js and Cosmic CMS.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My Product. All rights reserved.
        </div>
      </div>
    </footer>
  );
}