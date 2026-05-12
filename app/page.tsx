import Link from 'next/link';
import { getProducts, getCategories, getReviews } from '@/lib/cosmic';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import ReviewCard from '@/components/ReviewCard';

export default async function HomePage() {
  const [products, categories, reviews] = await Promise.all([
    getProducts(),
    getCategories(),
    getReviews(),
  ]);

  const featuredProducts = products.slice(0, 4);
  const featuredCategories = categories.slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            Discover Quality<br />
            <span className="text-brand-600">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our curated collection of premium products designed to elevate your everyday experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Shop Products
            </Link>
            <Link href="/categories" className="bg-white border-2 border-gray-200 hover:border-brand-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      {featuredCategories.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Shop by Category</h2>
                <p className="text-gray-600 mt-2">Find exactly what you're looking for</p>
              </div>
              <Link href="/categories" className="text-brand-600 hover:text-brand-700 font-medium hidden sm:block">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Products</h2>
                <p className="text-gray-600 mt-2">Our most popular picks</p>
              </div>
              <Link href="/products" className="text-brand-600 hover:text-brand-700 font-medium hidden sm:block">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      {featuredReviews.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Customers Say</h2>
              <p className="text-gray-600 mt-2">Real reviews from real customers</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/reviews" className="text-brand-600 hover:text-brand-700 font-medium">
                Read all reviews →
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}