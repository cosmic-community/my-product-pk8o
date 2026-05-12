import { getProducts } from '@/lib/cosmic';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'All Products | My Product',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">All Products</h1>
        <p className="text-gray-600 mt-2">{products.length} products available</p>
      </div>
      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">No products available yet.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}