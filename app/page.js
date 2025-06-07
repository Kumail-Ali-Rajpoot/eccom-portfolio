'use client'
import ProductCard from "@/components/productCard";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Scroller from "@/components/scroll"
import PromoCode from "@/components/promo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useEffect,useState } from "react";
import { Inbox } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [admin,setAdmin] = useState(false);
  function handleClick (value) {
    setAdmin(value);
    console.log("handle click function call")
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
          
          <div className='grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
            <ProductCard></ProductCard>
          </div>
          <div className="w-[100%] flex justify-center">
           {admin?<Button className="w-[50%] cursor-pointer"><Link href="/admin" className="flex items-center gap-1.5">Add Product <Inbox size={34} color="#ffff"/></Link></Button>:""}
          </div>
        </div>
      <Scroller></Scroller>
      <PromoCode adminConfirmation={handleClick}></PromoCode>
    </main>
      <Footer></Footer>
    </div>
  );
}