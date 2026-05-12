import { Review } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ReviewCard({ review }: { review: Review }) {
  const reviewerName = getMetafieldValue(review.metadata?.reviewer_name) || 'Anonymous';
  const rating = review.metadata?.rating || 0;
  const reviewTitle = getMetafieldValue(review.metadata?.review_title);
  const comment = getMetafieldValue(review.metadata?.comment);
  const verified = review.metadata?.verified_purchase;
  const product = review.metadata?.product;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-3">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {verified && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
            ✓ Verified
          </span>
        )}
      </div>
      {reviewTitle && <h4 className="font-semibold text-gray-900 mb-2">{reviewTitle}</h4>}
      {comment && <p className="text-gray-600 text-sm mb-4 line-clamp-4">{comment}</p>}
      <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-900">{reviewerName}</span>
        {product && (
          <span className="text-brand-600 text-xs">{product.title}</span>
        )}
      </div>
    </div>
  );
}