'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid'; // adjust as per your component

export const dynamic = 'force-dynamic'; // prevent static build errors

function ProductsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <section className="px-6 md:px-10 py-8">
      <h1 className="text-3xl font-semibold mb-4">All Products</h1>
      <ProductGrid query={query || ''} />
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
