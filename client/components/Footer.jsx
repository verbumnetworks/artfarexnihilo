import Link from "next/link";
import { Button } from "./ui/button";
import { inknutAntiqua } from "@/app/font";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center px-[30px] py-[20px] mt-20">
      {/* Top */}
      <div className="w-[200px] h-[80px] overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src="/imgs/logo2.png"
          alt="logo"
        />
      </div>

      {/* Mid */}
      <div className="w-full flex flex-col md:flex-row gap-16 justify-between mt-10">
        {/* Large Text */}
        <div className="w-full md:w-1/3">
          <span
            className={`${inknutAntiqua.className} block text-center md:text-left md:max-w-[20px] text-5xl md:text-7xl leading-relaxed font-semibold`}
          >
            Art That Inspires
          </span>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 flex justify-between gap-[20px]">
          {/* Left */}
          <div className="w-full flex flex-col gap-[20px] md:gap-[40px]">
            <Link href="/">
              <span className="text-lg font-bold">Home</span>
            </Link>
            <Link href="#about">
              <span className="text-lg font-bold">About Us</span>
            </Link>
            <Link href="#gallery">
              <span className="text-lg font-bold">Gallery</span>
            </Link>
            {/* <Link href="/blog">
              <span className="text-lg font-bold">Blog</span>
            </Link> */}
          </div>

          {/* Right */}
          <div className="w-full flex flex-col gap-[20px] md:gap-[40px]">
            <Link href="#contact">
              <span className="text-lg font-bold">Contact Us</span>
            </Link>
            <Link href="/">
              <span className="text-lg font-bold">Terms and Conditions</span>
            </Link>
            <Link href="/">
              <span className="text-lg font-bold">Privacy Policy</span>
            </Link>
            <Link href="/">
              <span className="text-lg font-bold">Pricing</span>
            </Link>
          </div>
        </div>

        {/* Others */}
        <div className="w-full md:w-1/3 flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center gap-[50px]">
          {/* Social Links */}
          <div className="w-full flex flex-col items-center sm:items-start md:items-center gap-[20px]">
            {/* Caption */}
            <span className="text-lg font-bold">Follow us on socials</span>

            {/* Icons */}
            <div className="w-full flex items-center justify-center sm:justify-start md:justify-center gap-[16px]">
              <a
                className="block w-[32px] h-[32px]"
                href="https://facebook.com"
              >
                <img
                  className="w-full h-full"
                  src="/imgs/Facebook.png"
                  alt="facebook logo"
                />
              </a>
              <a
                className="block w-[32px] h-[32px]"
                href="https://instagram.com"
              >
                <img
                  className="w-full h-full"
                  src="/imgs/instagram.png"
                  alt="instagram logo"
                />
              </a>
              <a className="block w-[32px] h-[32px]" href="https://twitter.com">
                <img
                  className="w-full h-full"
                  src="/imgs/twitter.png"
                  alt="twitter logo"
                />
              </a>
              <a
                className="block w-[32px] h-[32px]"
                href="https://linkedin.com"
              >
                <img
                  className="w-full h-full"
                  src="/imgs/linkedin.png"
                  alt="linkedIn logo"
                />
              </a>
            </div>
          </div>

          {/* DOnate */}
          <div className="w-full md:w-max bg-white py-[20px] px-[16px] flex flex-col gap-[20px]">
            <span className="text-black text-lg font-bold">
              Want to support our work?
            </span>
            <Link className="w-full" href="/donate">
              <Button className="rounded-full w-full p-8 bg-black">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex flex-col gap-[10px] justify-center items-center text-center text-sm font-bold p-[17px] mt-4 border-t border-solid border-t-[#555555]">
        <span>&copy; Copyright Gerald&apos;s Art Exnihilo.</span>
        <span className="text-xs font-normal">
          Developed by Verbum Networks Limited, Enugu.
        </span>
      </div>
    </div>
  );
};

export default Footer;
