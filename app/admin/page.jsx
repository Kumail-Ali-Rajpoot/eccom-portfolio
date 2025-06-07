'use client'
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
      <section>
      {
        form.map((data)=>(
          <div className='mb-4'>
            <Label className="text-2xl text-gray-900">{data.label}</Label>
            <Input className="w-[50rem] text-8xl p-5 border-[1px] border-gray-400" placeholder={data.placeholder}></Input>
          </div>
        ))
      }
      </section>
    </div>
  );
}

export default Page;
