import ProCard from "@/components/proCard";
import Slider from "@/components/slider";


import Product from "@/components/product";
import ServiceOptions from '../components/serviceOptions';

import CartIFixedIcon from "@/components/cartIFixedIcon";
import Notice from "@/components/notice";
import FeaturedCategory from "@/components/featuredCategory";




export default function Home() {
  return (
    <>
      <Slider />

      <div>
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', backgroundColor: '#f5f5f5' }}>
          <ServiceOptions />
        </main>
      </div>
      <div>
        <Notice />
      </div>
      <FeaturedCategory />

      <CartIFixedIcon />


      <Product />

    </>
  );
}
