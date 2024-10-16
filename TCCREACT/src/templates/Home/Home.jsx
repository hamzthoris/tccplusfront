import '../../assets/style/home.css'
import NavBar from '../../components/NavBar';
import AboutSection from '../../components/AboutSection';
import FeaturedSection from '../../components/FeaturedSection';
import OdsAplicadas from '../../components/OdsAplicadas';
import Footer from '../../components/Footer';
import TestimonialSection from '../../components/TestimonialSection';
import Waves from '../../components/Waves';
import OdsSection from '../../components/OdsSection';

  const Home = () => {
    return  (
      <div>
        <NavBar />
        <main className='wrapper'>
          <FeaturedSection />
          <Waves></Waves>
          <AboutSection />
          <TestimonialSection />
          <OdsSection />
          <OdsAplicadas />
        </main>
        <Footer />
      </div>
    );
  };
  

export default Home;
{/*  */}