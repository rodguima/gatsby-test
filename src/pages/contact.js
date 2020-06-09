import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="contact" />
      <h1>Contact Detail</h1>
      <p>rodrigoguima15@gmail.com</p>
      <p>Follow me on <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></p>
    </Layout>
  )
}

export default ContactPage