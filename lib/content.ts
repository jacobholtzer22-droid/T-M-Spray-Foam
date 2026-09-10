import fs from 'node:fs'
import path from 'node:path'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { ReactElement } from 'react'
import { mdxComponents } from '@/components/mdx-components'
import { config } from './config'
import type { Service, ServiceArea } from './config-schema'

export const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface Frontmatter {
  /** Meta description override, 140 to 160 characters. */
  description?: string
  /** Manifest filename for this page's lead image (also used for og:image). */
  image?: string
}

export interface LoadedContent {
  content: ReactElement
  frontmatter: Frontmatter
}

export function contentExists(relPath: string): boolean {
  return fs.existsSync(path.join(CONTENT_DIR, relPath))
}

export function readFrontmatter(relPath: string): Frontmatter {
  const file = path.join(CONTENT_DIR, relPath)
  if (!fs.existsSync(file)) return {}
  const raw = fs.readFileSync(file, 'utf8')
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match?.[1]) return {}
  const fm: Frontmatter = {}
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.*)$/)
    if (!m) continue
    const key = m[1] as keyof Frontmatter
    const value = (m[2] ?? '').trim().replace(/^["']|["']$/g, '')
    if (key === 'description' || key === 'image') fm[key] = value
  }
  return fm
}

/**
 * Compile one MDX file from content/ with the fixed component library and the
 * config in scope, so prose can write {config.displayName} and <Phone /> but
 * never a bare fact.
 */
export async function loadContent(
  relPath: string,
  scope: { service?: Service; area?: ServiceArea } = {},
): Promise<LoadedContent> {
  const file = path.join(CONTENT_DIR, relPath)
  if (!fs.existsSync(file)) {
    throw new Error(`Missing content file: content/${relPath}. Every route in config needs a matching MDX file.`)
  }
  const source = fs.readFileSync(file, 'utf8')
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      scope: { config, ...scope },
      /**
       * next-mdx-remote 6 defaults blockJS to true, which strips every
       * `{expression}` from MDX while leaving components and Markdown intact.
       * That is silent: the build succeeds and pages render "Insulation work in "
       * with the town missing. This template's entire fact discipline depends on
       * prose writing {config.displayName} and {area.name} instead of typing
       * facts, so the expressions have to run.
       *
       * The MDX here is authored in this repo and is never user input, which is
       * the threat the default guards against. blockDangerousJS stays on, so
       * eval, Function, process and friends are still refused.
       *
       * verify.ts check 19 fails the build if an interpolation ever comes back
       * empty, so this cannot regress quietly again.
       */
      blockJS: false,
      blockDangerousJS: true,
    },
  })
  return { content, frontmatter: frontmatter ?? {} }
}
