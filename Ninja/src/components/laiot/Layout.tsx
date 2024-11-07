import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './Main'

export default function Layout() {
  return (
    <div  className='app-container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
