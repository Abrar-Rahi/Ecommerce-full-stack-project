import ProCard from "@/components/proCard";
import Slider from "@/components/slider";


import Product from "@/components/product";
import ServiceOptions from '../components/serviceOptions';
import StackyCartIcon from "@/svgIcon/stackyCartIcon";
import Link from "next/link";




export default function Home() {
  return (
   <>
    <Slider/>

    <div>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', backgroundColor: '#f5f5f5' }}>
        <ServiceOptions />
      </main>

    </div>
    <Link href='/cart' style={{ position:'fixed', bottom:'30px', right:'200px' }}>
      <StackyCartIcon width={48} height={48} color="#007bff" />
    </Link>

   <Product/>
    
    </>
  );
}
