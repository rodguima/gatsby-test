import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="about" />
      <h1>My name is Rodrigo</h1>
      <p>I am a Front-End Web Developer self tought student.</p>
      <p><Link to="/contact">Contact page</Link></p>
    </Layout>
  )
}

export default AboutPage