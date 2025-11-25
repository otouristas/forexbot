import type { Metadata } from 'next'

const BASE_URL = 'https://forexbot.gr'

interface BuildPageMetadataParams {
  readonly locale: string
  readonly title: string
  readonly description: string
  readonly path?: string
}

const removeEdgeSlashes = (value: string): string => value.replace(/^\/+|\/+$/g, '')

export function buildPageMetadata({
  locale,
  title,
  description,
  path = '',
}: BuildPageMetadataParams): Metadata {
  const safeLocale = locale || 'el'
  const normalizedPath = removeEdgeSlashes(path)
  const canonicalPath = normalizedPath ? `${safeLocale}/${normalizedPath}` : safeLocale
  const canonicalUrl = `${BASE_URL}/${removeEdgeSlashes(canonicalPath)}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: safeLocale,
      siteName: 'ForexBot.gr',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

