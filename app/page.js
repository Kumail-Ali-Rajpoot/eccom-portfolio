'use client'
import ProductCard from "@/components/productCard";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Scroller from "@/components/scroll"
import PromoCode from "@/components/promo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useEffect,useState } from "react";

export default function Home() {
  const [admin,setAdmin] = useState(false);
  function handleClick (value) {
    if(value === "success") {
      setAdmin(true);
      console.log("Welcome kumail ali rajpoot");
    }else {
      console.log("you are no admin");
      setAdmin(false)
    }
  }

  return (
    <div className="">
      <Navbar></Navbar>
      <main className="w-[100%] flex flex-col items-center">
          <div className="max-w-[1040px]">
              <Header></Header>
          <h3 className="font-bold text-2xl text-gray-800 capitalize leading-tight">
            Recent Products
          </h3>
           {admin?<Button>Add Product</Button>:""}
          
          <div className='grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
            <ProductCard></ProductCard>
          </div>
        </div>
      <Scroller></Scroller>
      <PromoCode adminConfirmation={handleClick}></PromoCode>
    </main>
      <Footer></Footer>
    </div>
  );
}