import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections/index";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="realtive">
      <Nav />
      {/* Hero Section */}
      <section className="xl:padding-l wide:padding-r padding-b<">
        <Hero />
      </section>
      {/* Popular Products Section */}
      <section className="padding">
        <PopularProducts />
      </section>
      {/* Super quality Section */}
      <section className="padding">
        <SuperQuality />
      </section>
      {/* Services Section */}
      <section className="padding-x py-10">
        <Services />
      </section>
      {/* Special offers Section */}
      <section className="padding">
        <SpecialOffers />
      </section>
      {/* Customer Reviews Section */}
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      {/* Subscribe Section */}
      <section className="padding-x sm:py-32 py:16 w-full">
        <Subscribe />
      </section>
      {/* Footer Section */}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
