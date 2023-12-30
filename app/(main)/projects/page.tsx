import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { StoreIcon } from '~/assets'
import { Container } from '~/components/ui/Container'

const title = '我的一些项目'
const description =
  '个人做了各种各样的小项目，这里是我能翻找到的，后面会持续更新。'
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
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-12 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-justify">
          <StoreIcon className="mb-2 mr-2 text-4xl sm:text-6xl inline-flex transform-gpu transition-transform duration-500 hover:rotate-180"/>
          <span>
            我的项目库
          </span>
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          🤯 鄙人不才,没有做过什么大项目，但也想着有一天能<b>开源</b>点东西,
          也许以后有<b>机会</b>去做开源项目,<b>也许这一天</b>马上会来!
        <br/>
          下面是一些
          <strong className="underline decoration-2 underline-offset-4 decoration-wavy decoration-lime-500">曾经做过的项目</strong>,如果你有兴趣的话,可以看看。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
