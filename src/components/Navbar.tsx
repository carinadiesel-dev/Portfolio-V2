import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="flex flex-col gap-2 my-2 text-2xl lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-50">
      <Typography
        as="li"
        variant="small"
        className="p-1 text-xl font-bold text-ivory font-brand"
      >
        <a
          href="#home"
          className="flex items-center transition-colors hover:text-trueBlue"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-xl font-bold text-ivory font-brand"
      >
        <a
          href="#skills"
          className="flex items-center transition-colors hover:text-trueBlue"
        >
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-xl font-bold font-brand text-ivory"
      >
        <a
          href="#about"
          className="flex items-center transition-colors hover:text-trueBlue"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-xl font-bold font-brand text-ivory"
      >
        <a
          href="#work"
          className="flex items-center transition-colors hover:text-trueBlue"
        >
          Work
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-xl font-bold font-brand text-ivory"
      >
        <a
          href="#contact"
          className="flex items-center transition-colors hover:text-trueBlue"
        >
          Contact
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        className="py-1 text-xl font-bold font-brand text-ivory"
      >
        <a
          href="/public/assets/CV-CarinaDiesel.pdf"
          className="flex items-center gap-2 transition-colors hover:text-trueBlue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffff"
            viewBox="0 0 256 256"
            className="hover:fill-trueBlue"
          >
            <path d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm100.49-60.49a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L116,155V124a12,12,0,0,1,24,0v31l3.51-3.52A12,12,0,0,1,160.49,151.51Z"></path>
          </svg>
          CV
        </a>
      </Typography> */}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="top-5 border-none shadow-md w-[90vw] md:w-[95vw] bg-purple-dark">
      <div className="flex items-center justify-between text-gray-50">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-xl font-bold font-brand text-ivory active:text-gray-300"
        >
          Carina Diesel
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
