import { Variant } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function VariantList({ variants }: { variants: Variant[] }) {
  if (!variants || variants.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">Available Variants</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {variants.map((variant) => {
          const name = getMetafieldValue(variant.metadata?.name) || variant.title;
          const size = getMetafieldValue(variant.metadata?.size);
          const color = getMetafieldValue(variant.metadata?.color);
          const priceAdj = variant.metadata?.price_adjustment;
          const stock = variant.metadata?.stock_quantity;

          return (
            <div key={variant.id} className="border border-gray-200 rounded-lg p-4 hover:border-brand-500 transition">
              <p className="font-medium text-gray-900">{name}</p>
              <div className="flex gap-3 text-sm text-gray-600 mt-1">
                {size && <span>Size: {size}</span>}
                {color && <span>Color: {color}</span>}
              </div>
              <div className="flex items-center justify-between mt-2 text-sm">
                {typeof priceAdj === 'number' && priceAdj !== 0 && (
                  <span className="text-gray-700">
                    {priceAdj > 0 ? '+' : ''}${priceAdj.toFixed(2)}
                  </span>
                )}
                {typeof stock === 'number' && (
                  <span className={stock > 0 ? 'text-green-600' : 'text-red-600'}>
                    {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}