"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { ModeToggle } from "./Darkmode";
export function Nav() {
  return (
    <>
      <Navbar fluid rounded className="sticky top-0">
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/logo.png"
            className="mr-3  sm:h-9 w-auto h-auto"
            alt="Waniatex Logo"
            width={26}
            height={12}
            priority
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex items-center justify-end gap-x-2">
          <Navbar.Toggle />
          <div className="lg:hidden md:hidden">
            <ModeToggle />
          </div>
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} className="item" href="/" active>
            Home
          </Navbar.Link>

          <Navbar.Link as={Link} className="item" href="/about">
            About
          </Navbar.Link>

          <Navbar.Link as={Link} className="item" href="/services">
            Services
          </Navbar.Link>

          <Navbar.Link as={Link} className="item" href="/contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
        <div className="lg:block sm-hidden md:hidden ML:hidden MM:hidden MS:hidden">
          <ModeToggle />
        </div>
      </Navbar>
    </>
  );
}
