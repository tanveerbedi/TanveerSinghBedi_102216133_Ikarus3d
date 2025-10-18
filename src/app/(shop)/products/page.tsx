
'use client';
import { CategoryTabs } from '@/components/CategoryTabs';
import { SectionGrid } from '@/components/SectionGrid';

export default function ProductsPage() {
  return (
    <main className="px-6 md:px-10 py-6">
      <h1 id="top" className="text-3xl md:text-4xl font-bold mb-4">All Products</h1>
      <CategoryTabs />
      <div className="space-y-12 mt-6">
        <SectionGrid categoryKey="tables" title="Tables" anchor="tables" />
        <SectionGrid categoryKey="sofas" title="Sofas" anchor="sofas" />
        <SectionGrid categoryKey="chairs" title="Chairs" anchor="chairs" />
      </div>
    </main>
  );
}
