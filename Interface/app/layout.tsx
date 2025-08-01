import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpeakPortrait - AI-Powered Speaking Portrait Generator',
  description: 'Transform your photos into speaking portraits with AI. Upload an image and text or audio to create amazing talking videos.',
  keywords: 'AI, speaking portrait, video generation, talking photos, artificial intelligence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}