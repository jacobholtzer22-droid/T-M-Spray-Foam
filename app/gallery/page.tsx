import type { Metadata } from 'next'
import CtaBand from '@/components/CtaBand'
import Img from '@/components/Img'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { listImages } from '@/lib/images'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'gallery.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({
    kind: 'other',
    title: 'Our Work in Photos',
    path: '/gallery',
    description: fm.description,
    image: fm.image ?? config.images.hero,
  }).metadata
}

/**
 * Every photograph the client supplied, on one page.
 *
 * Ordered best first: the curated pool in its config order, then everything
 * else in the manifest. Nothing is excluded, so frames that were kept out of
 * the on-page work bands for being blurred or dark still live here.
 */
export default async function GalleryPage() {
  const { content } = await loadContent(CONTENT)
  const curated = config.images.gallery
  const rest = listImages().filter((n) => !curated.includes(n) && n !== config.images.hero && n !== config.images.about)
  const ordered = [
    ...(config.images.hero ? [config.images.hero] : []),
    ...curated,
    ...(config.images.about ? [config.images.about] : []),
    ...rest,
  ]

  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader title="Our Work in Photos" intro={`Every job photograph ${config.displayName} has shared.`} crumbs={CRUMBS} />
      <article className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">{content}</article>

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((name) => (
            <li key={name} className="overflow-hidden rounded-site">
              <Img name={name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover" />
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  )
}
