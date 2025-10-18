import { ChatRecommendations } from '@/components/chat-recommendations';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default async function Home() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.slice(0, 4);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <>
      <section className="relative">
        {heroImage && (
            <div className="absolute inset-0">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
            </div>
        )}
        <div className="relative container mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none font-headline">
                            Find Your Perfect Furniture, Instantly.
                        </h1>
                        <p className="max-w-[600px] text-gray-200 md:text-xl">
                            Describe what you're looking for, and our AI will find the best matches from our collection. Let's furnish your dream space together.
                        </p>
                    </div>
                    <div className="w-full max-w-lg space-y-2">
                        <p className="text-sm text-gray-300 italic">
                            e.g., "I need a comfy, three-seater sofa for a modern living room, preferably in a neutral color."
                        </p>
                    </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-card/80 backdrop-blur-sm text-card-foreground shadow-lg overflow-hidden h-[500px]">
                    <ChatRecommendations />
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight font-headline">Featured Products</h2>
            <Link href="/products">
                <Button variant="outline">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
      </section>
    </>
  );
}
