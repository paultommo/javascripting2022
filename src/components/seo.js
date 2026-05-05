import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
 
    const title = `Paul Tomlinson: Impactful websites for small businesses`
    const titleTemplate= `%s`
    const description= `Paul Tomlinson: Impactful websites for small businesses`
    const url= `https://paultommo.com` // No trailing slash!
    // const siteUrl= `https://javascripting.uk` //change this when changing URL
    const image= 'https://paultommo.com/images/static-pt.png' // Path to your image you placed in the 'static' folder
    //const author= `@paultommmo`
    const twitterUsername= '@paultommmo'

    console.log('img: '+image)
  
  return (

    console.log('img: '+image),

    <Helmet title={title} titleTemplate={titleTemplate +' : '+title}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      
      {url && <meta property="og:url" content={url} />}

      {title && <meta property="og:title" content={title} />}

      {description && (
        <meta property="og:description" content={description} />
      )}

      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {title && <meta name="twitter:title" content={title} />}

      {description && (
        <meta name="twitter:description" content={description} />
      )}

      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
 
  )
}

export default SEO
