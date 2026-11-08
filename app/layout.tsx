import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taofeek | Senior iOS & Mobile Engineer',
  description: 'Senior iOS and mobile engineer. Selected work across NEXT, Reiss, Victoria’s Secret and ChartBuilder.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
