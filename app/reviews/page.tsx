import { getReviews } from '@/lib/cosmic';
import ReviewCard from '@/components/ReviewCard';

export const metadata = {
  title: 'Customer Reviews | My Product',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + (r.metadata?.rating || 0), 0) / reviews.length
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Customer Reviews</h1>
        {reviews.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-6 h-6 ${i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg text-gray-700 font-medium">
              {avgRating.toFixed(1)} from {reviews.length} reviews
            </span>
          </div>
        )}
      </div>
      {reviews.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">No reviews yet.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}