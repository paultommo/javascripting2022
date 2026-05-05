import React from 'react'
import Layout from '../components/layout'
import { useQuery, gql } from '@apollo/client';
import { motion } from "framer-motion";
import { useLocation } from '@reach/router';

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
  const location = useLocation();
  const { loading, data } = useQuery(APOLLO_QUERY, {
    variables: { id: location.pathname.split('/')[2] },
    fetchPolicy: 'network-only',
  });

  let content = <div className="ui active centered inline loader"></div>

  if (!loading && data) {
    content = (
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0 }}>
        <div className='work'>
          <h1 className='h1WorkItem'>{data.portfolioBy.title}</h1>
          <div className='copyLarge workCopy' dangerouslySetInnerHTML={{ __html: data.portfolioBy.content }}></div>
          <p><a className='viewLink' target="_blank" rel="noopener noreferrer" href={data.portfolioBy.url.url}>VIEW &#62;&#62;</a></p>
          {data.portfolioBy.image1.image1 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image1.image1.sourceUrl} /></div>}
          {data.portfolioBy.image2.image2 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image2.image2.sourceUrl} /></div>}
          {data.portfolioBy.image3.image3 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image3.image3.sourceUrl} /></div>}
          {data.portfolioBy.image4.image4 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image4.image4.sourceUrl} /></div>}
          {data.portfolioBy.image5.image5 && <div className='workImage'><img className='imageWork' alt={data.portfolioBy.title} src={data.portfolioBy.image5.image5.sourceUrl} /></div>}
        </div>
      </motion.div>
    )
  }

  return (
    <Layout>
      <section>
        <div className="work-container">
          <div>
            {content}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WorkItems
