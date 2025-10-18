'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Sofa } from 'lucide-react';
import { useAuth } from '@/lib/auth';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const { user } = useAuth();

  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`,
    },
    {
      href: `/products`,
      label: 'All Products',
      active: pathname.startsWith(`/products`),
    },
  ];
  
  if (user?.isAdmin) {
    routes.push({
      href: '/admin/dashboard',
      label: 'Admin',
      active: pathname.startsWith('/admin'),
    });
  }


  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link href="/" className="flex items-center space-x-2 mr-6">
        <Sofa className="h-6 w-6" />
        <span className="font-bold inline-block font-headline">Furniture Co.</span>
      </Link>
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              route.active
                ? 'text-foreground'
                : 'text-muted-foreground'
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
