import Banner from '@/components/Banner'
import ChooseUs from '@/components/ChooseUs'
import FindOut from '@/components/FindOut'
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

          <InfoSection/>

          <FindOut />

          <OurServices/>


        </div>
    )
}
export default Home
