import {
  About,
  Header,
  Skills,
  Work,
  Testimonial,
  Footer,
} from "@components/container";

const Home = () => {
  return (
    <div>
      <div className="main">
          <div className="gradient" />
        </div>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
