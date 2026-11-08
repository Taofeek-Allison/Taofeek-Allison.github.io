import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taofeek Allison | Senior Mobile Engineer | Native iOS & Cross-Platform',
  description: 'Senior Mobile Engineer specialising in native iOS with Swift, SwiftUI and UIKit, and cross-platform development with C# and .NET MAUI.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
