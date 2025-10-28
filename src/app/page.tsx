import Banner from '@/components/Banner'
import InfoSection from '@/components/InfoSection'
import Navbar from '@/components/navbar'
import OurServices from '@/components/OurServices'
import Search from '@/components/Search'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const Home = () => {
    return (
        <div>
          <TopHeader/>

          <Navbar/>

          <Banner/>

          <Search/>

          <InfoSection/>

          <OurServices/>


        </div>
    )
}
export default Home
