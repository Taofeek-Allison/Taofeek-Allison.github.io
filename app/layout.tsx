import type { Metadata } from 'next';
import { site } from '../src/content/site';
import './globals.css';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;
export const metadata: Metadata = {
  metadataBase: new URL(site.seo.origin),
  title: site.seo.title,
  description: site.seo.description,
  icons: {
    icon: [{ url: asset('/favicon.ico'), sizes: 'any' }, { url: asset('/icon-512.png'), type: 'image/png', sizes: '512x512' }],
    apple: [{ url: asset('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' }],
  },
  openGraph: { type: 'website', locale: 'en_GB', title: site.seo.title, description: site.seo.description, url: `${site.seo.origin}${basePath}/`, images: [{ url: asset(site.seo.image), width: 1200, height: 630, alt: `${site.name} — mobile engineering portfolio` }] },
  twitter: { card: 'summary_large_image', title: site.seo.title, description: site.seo.description, images: [asset(site.seo.image)] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body className="antialiased">{children}</body></html>;
}
