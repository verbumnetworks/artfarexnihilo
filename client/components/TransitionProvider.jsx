"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Header from "./Header";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-full h-full overflow-x-hidden">
        <motion.div
          className="h-screen w-full fixed left-0 bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white capitalize text-8xl cursor-default z-40 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-full fixed left-0 bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-[72px]">
          <Header />
        </div>
        <div className="w-full overflow-x-auto flex justify-center items-center text-4xl">
          {children}
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
