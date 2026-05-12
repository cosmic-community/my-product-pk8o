export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    sku?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: Category;
    in_stock?: boolean;
  };
}

export interface Variant extends CosmicObject {
  type: 'variants';
  metadata: {
    name?: string;
    product?: Product;
    sku?: string;
    size?: string;
    color?: string;
    price_adjustment?: number;
    stock_quantity?: number;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    product?: Product;
    rating?: number;
    review_title?: string;
    comment?: string;
    verified_purchase?: boolean;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}