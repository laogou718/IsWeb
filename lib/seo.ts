export const seo = {
  title: 'LAOGOU | 一切开始的地方',
  description:
    '欢迎来到LAOGOU717.COM ！一起见证宇宙最后的余晖。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://laogou717.com'
      : 'http://localhost:3000'
  ),
} as const
