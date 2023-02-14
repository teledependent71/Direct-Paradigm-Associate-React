import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Paradigm Associate</title>
        <meta property="og:title" content="Direct Paradigm Associate" />
      </Helmet>
    </div>
  )
}

export default Home
