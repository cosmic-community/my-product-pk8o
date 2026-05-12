import Link from 'next/link';
import { Category } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function CategoryCard({ category }: { category: Category }) {
  const name = getMetafieldValue(category.metadata?.name) || category.title;
  const description = getMetafieldValue(category.metadata?.description);
  const image = category.metadata?.image;

  return (
    <Link href={`/categories/${category.slug}`} className="group relative block overflow-hidden rounded-2xl aspect-[4/3]">
      {image ? (
        <img
          src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-brand-500 to-brand-700" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        {description && <p className="text-sm text-white/90 line-clamp-2">{description}</p>}
      </div>
    </Link>
  );
}