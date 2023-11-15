"use client";

import Link from "next/link";
import { Paragraph } from "../../typography/Typography";
import { FaCirclePlus, FaHouse, FaCompass } from "react-icons/fa6";
import { usePathname } from "next/navigation";

type ActiveNavItem = "home" | "create" | "discover";

export default function NavigationBar() {
  const pathname = usePathname();

  const navItemStyle = "text-center flex flex-col items-center";

  return (
    <div className="grid grid-cols-3 w-fit text-medium-heading text-background-50 gap-5 p-5 bg-primary-120 rounded-xl shadow-xl">
      <Link href={"/"} className={pathname === '/' ? 'text-primary-80' : 'text-background-50'}>
        <div id="home" className={navItemStyle}>
          <FaHouse />
          <Paragraph>Home</Paragraph>
        </div>
      </Link>
      <Link href={"/harvest/create"} className={pathname === '/harvest/create' ? 'text-primary-80' : 'text-background-50'}>
        <div className={navItemStyle}>
          <FaCirclePlus />
          <Paragraph>Create harvest</Paragraph>
        </div>
      </Link>
      <Link href={"/discover"} className={pathname === '/discover' ? 'text-primary-80' : 'text-background-50'}>
        <div className={navItemStyle}>
          <FaCompass />
          <Paragraph>Discover</Paragraph>
        </div>
      </Link>
    </div>
  );
}
