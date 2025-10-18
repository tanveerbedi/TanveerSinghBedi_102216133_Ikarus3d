import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl rounded-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={450}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <h3 className="font-semibold text-lg leading-tight truncate font-headline">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
