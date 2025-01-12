import Link from "next/link";
import React from "react";
import { IoReturnDownBack } from "react-icons/io5";
import Logo from "../logo";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-800flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
        >
          <IoReturnDownBack className="text-2xl" />
          Go To Website
        </Link>
        <Logo
          className="text-2xl hidden md:inline-flex"
          title="Bloggres Studio"
        />
        <p className="text-sm">Studio for Blog contant</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
