// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProduct, getVariantsByProduct, getReviewsByProduct, getMetafieldValue } from '@/lib/cosmic';
import VariantList from '@/components/VariantList';
import ReviewCard from '@/components/ReviewCard';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const [variants, reviews] = await Promise.all([
    getVariantsByProduct(product.id),
    getReviewsByProduct(product.id),
  ]);

  const name = getMetafieldValue(product.metadata?.name) || product.title;
  const description = getMetafieldValue(product.metadata?.description);
  const price = product.metadata?.price;
  const sku = getMetafieldValue(product.metadata?.sku);
  const image = product.metadata?.featured_image;
  const gallery = product.metadata?.gallery || [];
  const inStock = product.metadata?.in_stock;
  const category = product.metadata?.category;

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + (r.metadata?.rating || 0), 0) / reviews.length
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-brand-600">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
            {image ? (
              <img
                src={`${image.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-9xl">🛍️</div>
            )}
          </div>
          {gallery.length > 0 && (
            <div className="grid grid-cols-4 gap-3">
              {gallery.slice(0, 4).map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={`${img.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                    alt={`${name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {category && (
            <Link href={`/categories/${category.slug}`} className="text-sm font-medium text-brand-600 uppercase tracking-wider">
              {category.title}
            </Link>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{name}</h1>

          {reviews.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">{avgRating.toFixed(1)} ({reviews.length} reviews)</span>
            </div>
          )}

          {typeof price === 'number' && (
            <p className="text-4xl font-bold text-gray-900 mb-6">${price.toFixed(2)}</p>
          )}

          <div className="mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${inStock !== false ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {inStock !== false ? '✓ In Stock' : 'Out of Stock'}
            </span>
            {sku && <span className="ml-3 text-sm text-gray-500">SKU: {sku}</span>}
          </div>

          {description && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          )}

          <button className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-lg font-semibold text-lg transition mb-8" disabled={inStock === false}>
            {inStock !== false ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {variants.length > 0 && <VariantList variants={variants} />}
        </div>
      </div>

      {reviews.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}