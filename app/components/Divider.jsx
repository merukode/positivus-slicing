"use client";

import React from 'react'
import { useState } from "react";

function Divider() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="border rounded-lg p-4 mt-14 bg-[#B9FF66] w-full mx-auto">
    <div className="flex justify-between items-center">
        <div className='flex items-center gap-5'>
        <h2 className="text-4xl font-bold">01</h2>
        <h2 className="text-2xl font-bold">Consultation</h2>
        </div>
      <button 
        onClick={handleToggle} 
        className="text-xl font-bold focus:outline-none bg-white p-5 rounded-full"
      >
        {isOpen ? '-' : '+'}
      </button>
    </div>
    <hr/>
    <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <p className="mt-10 text-lg">
      During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
      </p>
    </div>
  </div>
  )
}

export default Divider