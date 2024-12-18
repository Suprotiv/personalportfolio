'use client';

import React, { useRef, useEffect, useState } from 'react';

const Botton = ({ value, size , color}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden  cursor-pointer ${
        size === 'md' ? 'text-md h-[2vh] w-[8vh]' : ` text-3xl md:text-${size} h-[7vh] w-[30vh]  rounded-full border border-spacing-1`
      } font-bold inline-block`} // Adjust to fit the text size
    >
      {/* Original Text */}
     {  
      size==='md' ?
      <>
      <span
        className={`absolute left-0 h-full text-white w-full transition-transform text-center justify-center 
        ${hovered ? `-translate-y-full ` : 'translate-y-0 '} duration-300` }
      >
        {value}
      </span>

      {/* Copy of Text Entering from Bottom */}
      <span
        className={`absolute left-0  w-full transition-transform text-center justify-center text-white duration-300 ${
          hovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {value}
      </span>
    </>
      :
      <>
      <div className='relative h-full w-full'>
  {/* First Span */}
  <span
    className={`absolute top-0 left-0 z-10 h-full w-full items-center flex  justify-center transition-transform duration-300 ${
      hovered ? 'text-white' : 'text-black '
    }`}
  >
    {value}
  </span>

  {/* Second Span */}
  <span
    className={`absolute top-0 left-0 z-0 h-full w-full bg-white flex items-center justify-center transition-transform duration-300 ${
      hovered ? 'text-white  -translate-y-full' : 'translate-y-0 text-black '
    }`}
  >
  </span>
</div>


    {/* Copy of Text Entering from Bottom */}
    <span
      className={`absolute left-0 z-0 bg-black h-full w-full transition-transform text-center justify-center duration-300 ${
        hovered ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
    </span>
    </>
      }
    </div>
  );
};

export default Botton;
