"use client";

import { useState } from "react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-6 right-6 z-[60]">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 relative rounded-full transition-colors border-none shadow-none bg-transparent hover:bg-transparent dark:hover:bg-white cursor-pointer ${
            isOpen ? "text-white" : "text-black"
          }`}
        >
          <div className="relative w-16 h-16">
            <span
              className={`absolute top-1/2 left-1/2 block w-12 h-[3px] transition-all duration-300 ease-out ${
                isOpen
                  ? "bg-white -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full"
                  : "bg-black -translate-x-1/2 -translate-y-[10px] rounded-full"
              }`}
            />
            <span
              className={`absolute top-1/2 left-1/2 block w-12 h-[3px] transition-all duration-300 ease-out ${
                isOpen
                  ? "bg-white opacity-0 -translate-x-1/2 -translate-y-1/2"
                  : "bg-black opacity-100 -translate-x-1/2 -translate-y-1/2 rounded-full"
              }`}
            />
            <span
              className={`absolute top-1/2 left-1/2 block w-12 h-[3px] transition-all duration-300 ease-out ${
                isOpen
                  ? "bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full"
                  : "bg-black -translate-x-1/2 translate-y-[7px] rounded-full"
              }`}
            />
          </div>
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              type: "tween",
              ease: [0.7, 0, 0.3, 1],
              duration: 0.85,
            }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-col items-center gap-8 text-white font-2 font-[font2]"
            >
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About" },
                { href: "/contact", text: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{
                    type: "tween",
                    ease: [0.25, 0.1, 0.25, 1],
                    duration: 0.7,
                    delay: 0.15 + index * 0.1,
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-7xl uppercase font-bold tracking-wider hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
