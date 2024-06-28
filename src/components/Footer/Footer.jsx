import React from "react";
import Image from "next/image";
import Link from "next/Link"; 
import styles from './footer.module.css'


const Footer = () => {
  return (
    <div className={`${styles.footer} w-full bg-thirdColor flex items-center justify-around text-white py-1`}>
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      {/* <ul className='flex items-center justify-around gap-20'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul> */}
      <p>Copyrighted By @Riadosman</p>
    </div>
  );
};

export default Footer;
