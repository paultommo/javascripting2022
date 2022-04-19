import * as React from "react"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReactHtmlParser from "react-html-parser"

// define client-side query
// const APOLLO_QUERY = gql`
//   {

//    testimonials {
//     edges {
//       node {
//         id
//         title
//         featuredImage {
//           mediaItemUrl
//         }
//         content
//       }
//     }
//   }

//   }
// `

const APOLLO_QUERY = gql`
  {
  testimonials {
    edges {
      node {  
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        content
      }
    }
  }
}`


let info = <div className=""></div>

const Index = ({data}) => (

  <div className="testimonials-container">

    <Query query={APOLLO_QUERY}>

        {({data}) => {

          if(data){
          
             info = data.testimonials.edges.map((testimonial, index) => {

              // slug
              return (

                <div key={index} className="testimonial">
                  {testimonial.node.featuredImage &&
                    <div><img alt={testimonial.node.title} src={testimonial.node.featuredImage.node.mediaItemUrl} /></div>
                  }
                  <div className="content">{ReactHtmlParser(testimonial.node.content)}</div>
                  <div className="name">{testimonial.node.title}</div>

                </div>

              )
   
            })

          }

          return info

        }}

        </Query>
  </div>

)


export default Index
