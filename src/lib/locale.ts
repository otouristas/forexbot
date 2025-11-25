import type { Locale } from '@/lib/translations'

export async function resolveLocale(params: Promise<{ locale: string }>, fallback: Locale = 'el'): Promise<Locale> {
  const { locale } = await params
  return (locale as Locale) || fallback
}

