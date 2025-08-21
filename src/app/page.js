import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <div className="mx-4 md:mx-8 my-20">
      {/* Banner at the top */}
      <Banner />
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}
