import { Helmet } from 'react-helmet-async'
import { buildTitle, DEFAULT_DESCRIPTION, SITE_URL } from '../../utils/seo'

export default function SEO({ title, description = DEFAULT_DESCRIPTION, path = '/', image = '/og-image.jpg' }) {
  const fullTitle = buildTitle(title)
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
