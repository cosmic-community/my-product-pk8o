// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategory, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic';
import ProductCard from '@/components/ProductCard';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id);
  const name = getMetafieldValue(category.metadata?.name) || category.title;
  const description = getMetafieldValue(category.metadata?.description);
  const image = category.metadata?.image;

  return (
    <div>
      <div className="relative h-64 lg:h-80 overflow-hidden bg-gray-900">
        {image && (
          <img
            src={`${image.imgix_url}?w=2000&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <nav className="text-sm mb-3 text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/categories" className="hover:text-white">Categories</Link>
            </nav>
            <h1 className="text-4xl lg:text-6xl font-bold">{name}</h1>
            {description && <p className="text-lg mt-3 max-w-2xl text-white/90">{description}</p>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-600 mb-8">{products.length} products in this category</p>
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">No products in this category yet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}