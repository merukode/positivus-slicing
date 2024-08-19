"use client";

import React from 'react'
import { useState } from "react";

function Divider() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="border rounded-lg p-4 w-full max-w-md mx-auto">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Title</h2>
      <button 
        onClick={handleToggle} 
        className="text-xl font-bold focus:outline-none"
      >
        {isOpen ? '-' : '+'}
      </button>
    </div>
    <hr/>
    <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <p className="mt-4">
        This is the hidden text that will be shown when the button is clicked.
      </p>
    </div>
  </div>
  )
}

export default Divider