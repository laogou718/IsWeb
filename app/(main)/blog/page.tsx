import Balancer from 'react-wrap-balancer'

import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  '在这里是一个新的开始,我会经常撰写一些有趣的文章。包括但不限于AI、剪辑、日常琐事。与人分享知识、交流经验并不总是快乐的,但却是有意义的,我希望我能认真写下每一篇文章。'
export const metadata = {
  title: '我的博客',
  description,
  openGraph: {
    title: '我的博客',
    description,
  },
  twitter: {
    title: '我的博客',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          感谢您的关注
        </h1>
        <p className="my-4 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <p className="my-4">
          <Balancer>
              💬 
            <strong> 你或许会怀念</strong>
            <PeekabooLink href="https://laogou711.com">
              Notion博客
            </PeekabooLink>
            或者是
            <PeekabooLink href="https://laogou666.com">
             远古博客
            </PeekabooLink>
            ，你可以继续之前的操作！👏
          </Balancer>
        </p>
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60
