import Navs from "../components/header/Navbar";
import Events from "../components/main/mainevents/dashboard/Events";
import Upcoming from "../components/main/mainevents/upcoming/Upcoming";
import Previous from "../components/main/mainevents/previous/Previous";
import Footer from "../components/footer/Footer";
function Event() {
  return (
    <section>
      <Navs />
      <Events />
      <Upcoming />
      <Previous />
      <Footer />
    </section>
  );
}

export default Event;
