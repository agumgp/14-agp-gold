import Navbar from "../../components/Navbar"
import OurServices from "../../components/Our Services";
import WhyUs from "../../components/Why Us";
import Testimony from "../../components/Testimony";
import Banner from "../../components/Banner";
import Faq from "../../components/FAQ";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero Section";


function LandingPages () {
    return (
        <div>
            <Navbar />
            <Hero />
            <OurServices />
            <WhyUs />
            <Testimony />
            <Banner />
            <Faq />
            <Footer />
        </div>
    )
}

export default LandingPages;