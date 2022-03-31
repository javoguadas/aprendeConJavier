import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () =>{
  return(
   <Layout pageTitle="Home page">
     <p>He publicado esta página con el paso 3 del tutorial</p>
     <StaticImage
     alt='Clifford, a reddish-brown pitbull, posing on  a couch and lookin stoically at the camera'
     src="../images/dmitry-grigoriev-yxXpjF-RrnA-unsplash.jpg"
     />
     </Layout>
  )
}

export default IndexPage;