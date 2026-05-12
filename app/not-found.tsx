import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}