import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[150vh] relative bottom-0">
      {/* Sticky Background Image */}
      <div className="mt-[-100vh] h-[150vh] sticky bottom-0 bg-gray-700">
        <Image
          src="/asBG.jpg"
          alt="Background Image"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Footer;
