import './globals.css'
import './clerk.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import { type Metadata } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { zhCN } from '~/lib/clerkLocalizations'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | LAOGOU717',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'AI Video Editing,Premiere Pro Tutorials,After Effects Effects,Video Editing Resources,Content Creation AI,ChatGPT Tips,AI Services,Generative AI,No-code AI,剪辑, PR剪辑, PR教程, 综艺花字, 剪辑素材, 转场预设, 视频制作, 影视后期, AE教程, 视频剪辑软件,AI, ChatGPT, GPT-4, GPTs, GPT-4升级, 人工智能应用, AI编程, 机器学习, 深度学习, AI教程,生活杂谈,动漫,emo,哆啦A梦,AI Trends 2023',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | LAOGOU717',
    },
    description: seo.description,
    siteName: 'LAOGOU717',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://laogou717.com',
  },
  twitter: {
    site: '@thecalicastle',
    creator: '@thecalicastle',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html
        lang="zh-CN"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
