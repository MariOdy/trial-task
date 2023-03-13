import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/inc-icon.png";
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_wrapper}>
      <Link href="#">
        <Image src={logo} alt="logo of half of the moon" />
      </Link>
      <span />
      <Link href="#">
        <BiUser />
      </Link>
      <Link href="#">
        <IoSettingsOutline opacity={0.5} />
      </Link>
    </div>
  );
};

export default Sidebar;
