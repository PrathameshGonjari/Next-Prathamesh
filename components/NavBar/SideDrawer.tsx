"use client"
import { useState } from "react";

function SideDrawer(): React.JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false);

  function handlOpenDrawer(): void {
    setOpenDrawer((pre) => !pre);
  }
  return (
    <>
      <label
        onClick={handlOpenDrawer}
        className="cursor-pointer lg:hidden block"
      >
        <svg
          className="fill-current text-gray-900 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <div
        className={`${openDrawer ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full`}
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="#"
              >
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideDrawer;
