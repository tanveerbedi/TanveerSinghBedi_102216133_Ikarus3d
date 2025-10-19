'use client';

import SectionGrid from '@/components/SectionGrid'; // <-- if it's a named export, change to: import { SectionGrid } from '@/components/SectionGrid';
import { CATEGORY_MAP, CategoryKey } from '@/lib/categories';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams<{ slug: string | string[] }>();
  const raw = params.slug;
  const slug = (Array.isArray(raw) ? raw[0] : raw) as CategoryKey;

  if (!slug || !(slug in CATEGORY_MAP)) {
    return notFound();
  }

  const { label, anchor } = CATEGORY_MAP[slug];

  return (
    <main className="px-6 md:px-10 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{label}</h1>
        <Link href="/products" className="text-sm text-accent hover:underline">
          View All
        </Link>
      </div>

      <div className="space-y-12 mt-6">
        <SectionGrid categoryKey={slug} title={label} anchor={anchor} />
      </div>
    </main>
  );
}
