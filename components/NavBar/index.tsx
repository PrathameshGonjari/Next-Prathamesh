import Image from "next/image";
import React from "react";
import SideDrawer from "./SideDrawer";
import SvgLogo from "@/public/logo.svg"
import Link from "next/link";
import "./style.css";

const NavBar = (): React.JSX.Element => {
  return (
    <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 fixed-nav">
      <div className="flex-1 flex my-2">
        <div className="flex justify-center items-center">
          <Link href="#">
            <Image width={50} height={50} src={SvgLogo} alt="" />
          </Link>
          <h6 className="font-bold ml-1 text-2xl md:text-4xl text-black">
            Prathamesh
          </h6>
        </div>
      </div>
      <SideDrawer />
    </header>
  );
};

export default NavBar;
