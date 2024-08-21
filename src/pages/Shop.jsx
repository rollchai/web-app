import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offers from '../component/Offer/Offers'
import Newcollection from '../component/newcollection/Newcollection'
import Newslatter from '../component/newslatter/Newslatter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newslatter/>
    </div>
  )
}

export default Shop