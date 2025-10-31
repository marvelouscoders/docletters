import Banner from '@/components/Banner'
import Navbar from '@/components/navbar'
import Service from '@/components/Services'
import TopHeader from '@/components/TopHeader'
import FindUs from '@/components/FindUs'
import Medical from '@/components/Medical'
import OurDoctors from '@/components/OurDoctors'
import LatestNews from '@/components/LatestNews'
import Columns from '@/components/Columns'
import Footer from '@/components/Footer'
import InfoBar from '@/components/InfoBar'

const Home = () => {
    return (
        <div>
          <TopHeader/>

          <Navbar/>

          <Banner/>

          <InfoBar/>

          <Service/>

          <FindUs/>

          <Medical/>

          <OurDoctors/>

          <Columns/>

          <LatestNews/>

          <Footer/>


        </div>
    )
}
export default Home
