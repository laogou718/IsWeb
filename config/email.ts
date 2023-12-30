export const emailConfig = {
  from: 'hi@laogou717.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://laogou717.com`
      : 'http://localhost:3000',
}
