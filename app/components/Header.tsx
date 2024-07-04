"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import LogoIcon from "./svg/Logo";
import useActiveLink from "../hooks/useActiveLink";
import { commonProps } from "@/types/common";
import AppButton from "./ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About Us" },
  { href: "/Services", label: "Our Services" },
  { href: "/CaseStudies", label: "Case Studies" },
];

function NavList() {
  const currentPath = useActiveLink();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography
          as="li"
          variant="small"
          className={`p-1 font-medium text-[#201E1EE5] ${
            currentPath === item.href ? "text-[#0A52F6] font-bold" : ""
          }`}
          key={item.label}
          {...commonProps}
        >
          <Link
            href={item.href}
            className="flex items-center hover:text-[#0A52F6] transition-colors"
          >
            {item.label}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className={`container mx-auto max-w-full px-12 py-3 rounded-none bg-[#FBFAFA] shadow-none ${
        isSticky ? "fixed top-0 z-[10000]" : ""
      }`}
      {...commonProps}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          {...commonProps}
        >
          <LogoIcon />
        </Typography>
        <div className="hidden gap-8 lg:flex">
          <NavList />
          <div className="flex items-center gap-x-1">
            <AppButton variant="primary">
              <span>Lets Chat</span>
            </AppButton>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          {...commonProps}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
