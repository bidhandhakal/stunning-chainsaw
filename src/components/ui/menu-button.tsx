"use client";

import { useState } from "react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50 ">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="w-32 h-32 relative rounded-full transition-colors border-none shadow-none bg-transparent hover:bg-transparent dark:hover:bg-transparent cursor-pointer"
      >
        <div className="relative w-16 h-16">
          <span
            className={`absolute top-1/2 left-1/2 block w-14 h-[3px] bg-current rounded-full transition-all duration-300 ease-out ${
              isOpen
                ? "-translate-x-1/2 -translate-y-1/2 rotate-45"
                : "-translate-x-1/2 -translate-y-[10px]"
            }`}
          />
          <span
            className={`absolute top-1/2 left-1/2 block w-14 h-[3px] bg-current rounded-full transition-all duration-300 ease-out ${
              isOpen
                ? "opacity-0 -translate-x-1/2 -translate-y-1/2"
                : "opacity-100 -translate-x-1/2 -translate-y-1/2"
            }`}
          />
          <span
            className={`absolute top-1/2 left-1/2 block w-14 h-[3px] bg-current rounded-full transition-all duration-300 ease-out ${
              isOpen
                ? "-translate-x-1/2 -translate-y-1/2 -rotate-45"
                : "-translate-x-1/2 translate-y-[7px]"
            }`}
          />
        </div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 backdrop-blur-sm"
          >
            <div className="py-1">
              <Link
                href="/"
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              >
                About
              </Link>
              {/* Add more menu items as needed */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
