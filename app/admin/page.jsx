'use client'
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Inbox } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Page() {
  const form = [{
    label:"Enter Product Name",
    placeholder:"Enter Name"
  },{
    label:"Enter Product Description",
    placeholder:"Enter Description"
  },{
    label:"Enter Product Price",
    placeholder:"Enter Price"
  },{
    label:"Enter Product Image Url",
    placeholder:"Enter Url"
  },]
  return (
    <div className="p-[7rem]">
      <header className=''>
        <h2 className='text-4xl text-center  leading-tight text-blue-500 absolute top-2.5 font-bold'>
          Welcome to HalcyonAli
        </h2>
      </header>
      <section>
      {
        form.map((data)=>(
          <div className='mb-4'>
            <Label className="text-[1rem] text-gray-900">{data.label}</Label>
            <Input className="w-[50rem] text-8xl p-5 border-[1px] border-gray-400" placeholder={data.placeholder}></Input>
          </div>
        ))
      }
      <div className='flex gap-3.5'>
      <Button className="w-[50%] cursor-pointer"><Link href="/admin" className="flex items-center gap-1.5">Add Product <Inbox size={34} color="#ffff"/></Link></Button>
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Choose Area" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
      </div>
      
      </section>
    </div>
  );
}

export default Page;
