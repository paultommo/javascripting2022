import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
 
    const title = `Paul Tomlinson: A freelance web developer with 20 years experience`
    const titleTemplate= `%s`
    const description= `Hello! I'm Paul Tomlinson. A freelance web developer with 20 years experience`
    const url= `https://javascripting.uk` // No trailing slash!
    // const siteUrl= `https://javascripting.uk` //change this when changing URL
    const image= 'https://javascripting.uk/images/static-pt.png' // Path to your image you placed in the 'static' folder
    //const author= `@paultommmo`
    const twitterUsername= '@paultommmo'
  
  return (

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
