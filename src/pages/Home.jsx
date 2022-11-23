import Navs from "../components/header/Navbar";
import AboutUs from "../components/main/about/AboutUs";
import Offer from "../components/main/offer/Offer";
import Pricing from "../components/main/pricing/Pricing";
import Testimonial from "../components/main/testimonial/Testimonial";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <section>
      <Navs />
      <AboutUs />
      <Offer />
      <Pricing />
      <Testimonial />
      <Footer />
    </section>
  );
};

export default Home;
