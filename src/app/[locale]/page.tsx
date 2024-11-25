

import Hero from "../(components)/Hero";
import About from "../(components)/Aboutus";
import Footer from "../(components)/Footer";
import Nav from "../(components)/Navigation";
import Services from "../(components)/Services";

export default function RootPage() {
  return (
    <div>
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="service">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}
