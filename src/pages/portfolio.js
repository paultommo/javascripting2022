import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FadeIn from "react-lazyload-fadein";

// define client-side query
const APOLLO_QUERY = gql`
  {

   portfolios  (first:50 where:{orderby:{field:DATE order:DESC}}) {
    nodes {
      databaseId
      title
      thumb {
        thumb {
          sourceUrl
        }
      }
      title
      slug
    }
  }


  }
`

let content = <div className=""></div>

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Portfolio" />

    <div className="portfolio">

    <Query query={APOLLO_QUERY}>

        {({data}) => {

         if(data){
          
           content = data.portfolios.nodes.map((project, index) => {

             
              return   <Link rel="prefetch" key={index} to={`/workItem?id=${project.slug}`} ><div className="work">  <FadeIn height={300}>{onload => (<img alt={project.title} onLoad={onload} src={project.thumb.thumb.sourceUrl} />)}</FadeIn></div></Link>


            })
        }

          return content

        }}

        </Query>

      

    </div>
    
    
  </Layout>
)

export default IndexPage
