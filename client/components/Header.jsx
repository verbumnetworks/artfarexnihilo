"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", text: "Home" },
  { url: "#about", text: "About us" },
  { url: "#gallery", text: "Gallery" },
  // { url: "/blog", text: "Blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <header className="h-full flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-18 xl:px-24 pt-10 relative">
      {/* Links */}
      <div className="hidden lg:flex gap-[6px] lg:gap-4 w-1/3 capitalize">
        {links.map((link) => (
          <NavLink link={link} key={link.text} />
        ))}
      </div>

      {/* Logo */}
      <div className="lg:flex w-1/3 justify-center mt-4 lg:mt-0 lg:absolute lg:top-3 lg:bottom-0 lg:left-0 lg:right-0 lg:m-auto">
        <Link href="/">
          <Image src="/imgs/logo.png" width={180} height={100} alt="logo" />
        </Link>
      </div>

      {/* Utils */}
      <div className="hidden lg:flex w-1/3 min-w-max gap-3 justify-center md:justify-end items-center capitalize">
        <Link href="#contact">
          <span className="text-2xl md:text-base">Contact us</span>
        </Link>
        <div className="bg-black w-[2px] h-[38px]"></div>
        <Link href="/donate">
          <Button className="rounded-full">Make Donation</Button>
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="lg:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-[24px] flex flex-col justify-between z-60 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-[2px] bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-[2px] bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-[2px] bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white capitalize flex flex-col items-center justify-center gap-8 text-2xl sm:text-3xl z-50"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.text}
                onClick={() => setOpen((prev) => !prev)}
              >
                <Link href={link.url}>{link.text}</Link>
              </motion.div>
            ))}
            <motion.div variants={listItemVariants} className="" onClick={() => setOpen((prev) => !prev)}>
              <Link href="#contact">Contact us</Link>
            </motion.div>
            <motion.div variants={listItemVariants} className="" onClick={() => setOpen((prev) => !prev)}>
              <Link href="/donate">
                <Button className="rounded-full sm:text-2xl">Make Donation</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
