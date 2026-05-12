import Link from 'next/link';
import { Product } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ProductCard({ product }: { product: Product }) {
  const name = getMetafieldValue(product.metadata?.name) || product.title;
  const description = getMetafieldValue(product.metadata?.description);
  const price = product.metadata?.price;
  const image = product.metadata?.featured_image;
  const inStock = product.metadata?.in_stock;
  const category = product.metadata?.category;

  return (
    <Link href={`/products/${product.slug}`} className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-500 hover:shadow-xl transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">🛍️</div>
        )}
        {inStock === false && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-5">
        {category && (
          <p className="text-xs font-medium text-brand-600 uppercase tracking-wider mb-2">
            {category.title}
          </p>
        )}
        <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-brand-600 transition">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>
        )}
        {typeof price === 'number' && (
          <p className="text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
        )}
      </div>
    </Link>
  );
}