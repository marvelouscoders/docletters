import Banner from '@/components/Banner'
import InfoSection from '@/components/InfoSection'
import Navbar from '@/components/navbar'
import OurServices from '@/components/OurServices'
import Service from '@/components/Services'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const Home = () => {
    return (
        <div>
          <TopHeader/>

          <Navbar/>

          <Banner/>

          <Service/>

          <InfoSection/>

          <OurServices/>


        </div>
    )
}
export default Home
