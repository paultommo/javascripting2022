import React from 'react'
import { Helmet } from 'react-helmet'

const DEFAULT_TITLE = 'Shopify Studio for Craft Food & Drink Brands'
const DEFAULT_DESCRIPTION = 'I build Shopify stores for craft food & drink founders. Custom development, design, and copy — under one roof. Based in London.'
const DEFAULT_IMAGE = 'https://paultommo.com/images/static-pt.png'
const SITE_URL = 'https://paultommo.com'
const SITE_NAME = 'Paul Tomlinson Studio'
const TWITTER_HANDLE = '@paultommmo'

const SeoBasic = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = SITE_URL,
}) => {
  const pageTitle = title ? `${title} | Paul Tomlinson` : `${DEFAULT_TITLE} | Paul Tomlinson`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SeoBasic
