'use client'
import React from 'react'
import StackyCartIcon from "@/svgIcon/stackyCartIcon";
import Link from "next/link";

const CartIFixedIcon = () => {
  return (
    <>
    <div>
    <Link href='/cart' style={{ position:'fixed', bottom:'30px', right:'130px' }}>
      <StackyCartIcon width={48} height={48} color="#007bff" />
      {/* {<span style={{width:"15px",height:'15px',borderRadius:'50%', backgroundColor:"#007bff",color:'#FFF', display:'flex', justifyContent:'center', alignItems:'center',fontSize:"12px",marginTop:'-33px',marginLeft:'21px'}}>{localStorage.getItem("cartlength")}</span>} */}
    </Link>
    </div>
     
    </>
  )
}

export default CartIFixedIcon