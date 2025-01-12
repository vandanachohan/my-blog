
import React from 'react';
import Image from 'next/image';
import banner from '@/images/banner.webp';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={banner}
        alt="Tailor Smith banner image"
        className="w-full h-screen object-cover"
        priority
      />
        <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center text-center">
        <h2 className="text-7xl lg:text-[150px] font-bold mb-4 lg:mb-8">
          AI Insights
        </h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Exploring the Future of Artificial Intelligence
        </p>
      </div>
    </div>
  );
};

export default Hero;
