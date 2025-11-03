import Banner from '@/components/Banner'
import Navbar from '@/components/navbar'
import Service from '@/components/Services'
import Medical from '@/components/Medical'
import OurDoctors from '@/components/OurDoctors'
import LatestNews from '@/components/LatestNews'
import Columns from '@/components/Columns'
import Footer from '@/components/Footer'
import InfoBar from '@/components/InfoBar'
import TopAccountBar from '@/components/TopAccountBar'
import Newsletter from '@/components/Newsletter'
import TopCouponCodeBar from '@/components/TopCouponCodeBar'
import MedicalSection from '@/components/MedicalSection'
import WhyChooseUs from '@/components/WhyChooseUs'

const Home = () => {
    return (
        <div>
        <TopCouponCodeBar />

          <TopAccountBar />
          
          <Navbar/>

          <Banner/>

          <InfoBar/>

          <Service/>
          
          <WhyChooseUs />

          <MedicalSection/>

          <OurDoctors/>

          <Columns/>

          <LatestNews/>

          <Newsletter/>

          <Footer/>

        </div>
    )
}
export default Home
