"use client";

import React from "react";
import Link from "next/Link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div
      className={`h-20 container mx-auto flex items-center justify-around w-full`}
    >
      <Image src="/logo.png" alt="" width={100} height={90} />
      <ul className="flex items-center justify-around gap-6">
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/foods">Foods</Link>
        </li>
        <li>
          <Link href="/drinks">Drinks</Link>
        </li>
      </ul>
      <Link href="/cart" className="cursor-pointer text-2xl"><FaCartShopping/></Link>
    </div>
  );
};

export default Header;
