import { LoginForm } from '@/components/auth/login-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sofa } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Link href="/" className="flex items-center space-x-2 text-foreground">
          <Image src="/a8a5e093-6819-4645-9c0c-c22e69f55a0e.png" alt="FurniVerse logo" width={32} height={32} />
          <span className="text-2xl font-bold font-headline">FurniVerse</span>
        </Link>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
