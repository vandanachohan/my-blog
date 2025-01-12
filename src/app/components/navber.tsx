//     // components/Navbar.tsx
//  import React from 'react';
// import Logo from './logo';
// import Link from 'next/link';
// import { FiMenu } from 'react-icons/fi';


// function Navbar() {

//     const navigateion = [
//         { title: "Home", href: "/" },
//         { title: "Features", href: "/features" },
//         { title: "About me", href: "/about" },
//         { title: "Studio", href: "/studio" },
//     ];

//     return (
//         <div className='w-full bg-white/70 h-20 shodow-md'>
//             <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full '>
//                 <Logo title="AI FEATURES" className="text-black" />
//                 <div className='hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200 '>

//                     {navigateion.map((item) => (
//                         <Link key={item?.title} href={item?.href}
//                             className='text-sm uppercase font-semibold relative group overflow-hidden'
//                         >
//                             {item?.title}
//                             <span className='w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200' />
//                         </Link>
//                     ))}
//                 </div>
//                 <div className='md:hidden'>
//                     <FiMenu text-2xl />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;// components/Navbar.tsx
import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const navigation = [
    { title: 'Home', href: '/' },
    { title: 'Features', href: '/features' },
    { title: 'About Me', href: '/about' },
    { title: 'Studio', href: '/studio' },
  ];

  return (
    <div className="w-full bg-white/70 h-20 shadow-md fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-10 h-full">
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <Logo title="AI FEATURES" className="text-black text-4xl" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-7 text-gray-900">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item.title}
              <span className="w-full h-[2px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex-1 flex justify-end">
          <FiMenu className="text-3xl text-black" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
