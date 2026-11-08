import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  title: 'Taofeek Allison | Senior Mobile Engineer | Native iOS & Cross-Platform',
  description: 'Senior Mobile Engineer specialising in native iOS with Swift, SwiftUI and UIKit, and cross-platform development with C# and .NET MAUI.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
