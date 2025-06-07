'use client'
import React, { useState } from 'react';
import { Menu } from 'lucide-react'; // Replace Sidebar with proper icon

function Layout({ children }) {
  const [sidebar, setSidebar] = useState(true);

  function moveSideBar() {
    setSidebar(!sidebar);
    console.log(`sidebar = ${sidebar}`);
  }

  return (
    <div className="flex">
      <section
        className={`${
          sidebar ? 'animate-to-right' : 'animate-to-left'
        } set-animation w-[200px] md:w-[300px] sm:w-[250px] h-[100vh] md:relative sm:absolute absolute shadow-2xl p-1.5`}
      >
        <div
          onClick={moveSideBar}
          className="text-black text-5xl rounded-[25%] hover:text-white hover:bg-[rgba(0,0,255,0.5)] cursor-pointer absolute right-[-2rem]"
        >
          <Menu />
        </div>
        <h1 className="text-center leading-tight font-bold md:text-4xl sm:text-2xl text-blue-700 border-b-2 border-blue-700">
          HalcyonAli
        </h1>
        <div className="top-3.5 relative">
          {[
            'Admin',
            'Add Products',
            'Manage Products',
            'Edit Products',
            'Remove Products',
          ].map((item) => (
            <p
              key={item}
              className="leading-relaxed font-bold text-left py-2 text-gray-900 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
            >
              {item}
            </p>
          ))}
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
}

export default Layout;
