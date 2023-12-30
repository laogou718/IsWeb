import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import WXQR from './WXpay.jpg'

const title = '捐赠页面'
const description =
  '如果你愿意支持本频道，可以在此进行捐赠。无论大小，都极其宝贵，都将直接用于支持我的创作活动。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          请博主喝杯饮料🥤
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>捐赠方式</h2>
        <p>可以选择<b>支付宝</b>或者<b>微信</b>：</p>
        <ul>
          <li>
            <p className="flex justify-center md:block md:justify-start">
              <span className="inline-flex flex-col items-center">
                <Image src={AlipayQR} alt="支付宝二维码" className="w-44 dark:brightness-90" />
                <span className="mt-1 text-sm font-medium">支付宝二维码</span>
              </span>
            </p>
          </li>
          <li>
            <p className="flex justify-center md:block md:justify-start">
              <span className="inline-flex flex-col items-center">
                <Image src={WXQR} alt="微信二维码" className="w-44 dark:brightness-90" />
                <span className="mt-1 text-sm font-medium">微信二维码</span>
              </span>
            </p>
          </li>
        </ul>
        <h2>感谢信</h2>
        <p>
          感谢曾经支持本频道的{' '}
          <RichLink href="https://hero.laogou717.com" target="_blank">
            英雄们
          </RichLink>
          ，十分感谢各位的支持。
        </p>
      </article>
    </Container>
  )
}
