import React from 'react'
import Layout from '../components/layout'
// import { Helmet } from "react-helmet"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { motion } from "framer-motion";
// import { getSearchParams } from "gatsby-query-params";
import { useLocation } from '@reach/router';
// import FadeIn from "react-lazyload-fadein";

// ********************************************
//
// This class is designed for linux as
// I couldn't get the dynamic page redirection to work 
//
// ******************************************** 

// define client-side query
const APOLLO_QUERY = gql`
  
query Project($id: String!) {
 
 portfolioBy(slug: $id) {
    content 
    title
    url {
      url
    }
    image1 {
      image1 {
        sourceUrl
      }
    }
    image2 {
      image2 {
        sourceUrl
      }
    }
    image3 {
      image3 {
        sourceUrl
      }
    }
     image4 {
      image4 {
        sourceUrl
      }
    }
    image5 {
      image5 {
        sourceUrl
      }
    }
  }
  }
`

function WorkItems(){

  // const searchParams = getSearchParams();
  //let header = '';
  let content = <div className="ui active centered inline loader"></div>
  const location = useLocation();

   return (

      <Layout>
      {/*<SEO title="Projects" />*/}
        <section>

        <div className="work-container">
         
         <div>


          <Query query={APOLLO_QUERY} variables={{ id: location.pathname.split('/')[2] }} fetchPolicy='network-only'>

            {({loading, error, data, refetch, networkStatus}) => {

                 if(loading===false && data){

                    //header = <Helmet><meta charSet="utf-8" /><title>Work: {data.portfolioBy.title}</title><meta name="description" content={data.portfolioBy.content} /></Helmet>

                    content = <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0 }}><div className='work' ><h1 className='h1WorkItem' >{data.portfolioBy.title}</h1>

                      <div className='copyLarge workCopy' dangerouslySetInnerHTML={{ __html: data.portfolioBy.content }}></div>

                      <p><a className='viewLink' target="_blank" rel="noopener noreferrer" href={data.portfolioBy.url.url}>VIEW &#62;&#62;</a></p>

                      {data.portfolioBy.image1.image1 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image1.image1.sourceUrl} /></div>}

                      {data.portfolioBy.image2.image2 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image2.image2.sourceUrl} /></div>}

                      {data.portfolioBy.image3.image3 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image3.image3.sourceUrl} /></div>}

                      {data.portfolioBy.image4.image4 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image4.image4.sourceUrl} /></div>}

                      {data.portfolioBy.image5.image5 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image5.image5.sourceUrl} /></div>}

                    </div></motion.div>

                  }

                  return content

              }}

            </Query>
        

         </div>

        </div>

        </section>

    </Layout>


    )


}

export default WorkItems

