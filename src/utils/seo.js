export const SITE_NAME = 'GRAAB Kombucha'
export const SITE_URL = 'https://www.graab.in'
export const DEFAULT_DESCRIPTION =
  'GRAAB Kombucha by Krafery Beverages — small-batch, organic, naturally fermented kombucha brewed in Bengaluru.'

export function buildTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${SITE_NAME}` : `${SITE_NAME} | Handcrafted Live-Culture Kombucha`
}
