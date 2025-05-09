"use client";
import { logout } from "@/lib/actions";
import clsx from "clsx";
import { HomeIcon, Locate, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useActionState } from "react";

const NavItems = () => {
  const pathname = usePathname();
  return [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />,
      active: pathname === "/",
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <User />,
      active: pathname === "/profile",
    },
    {
      name: "Destinations",
      href: "/destinations",
      icon: <Locate />,
      active: pathname === "/destinations",
    },
  ];
};

export const SideBar = () => {
  const navItems = NavItems();
  const [, action] = useActionState(logout, null);
  return (
    <div className="md:flex hidden flex-col bg-blue-100 border-r-2 border-r-blue-700 h-screen w-xs justify-between sticky left-0 top-0 bottom-0">
      <div className="flex flex-col">
        {navItems.map((ni) => {
          return (
            <Link
              key={ni.name}
              href={ni.href}
              className={`flex gap-4 px-8 py-6 hover:bg-blue-300 h-full w-full ${clsx(
                ni.active ? "text-blue-400" : ""
              )}`}
            >
              {ni.icon} {ni.name}
            </Link>
          );
        })}
      </div>
      <div>
        <form action={action}>
          <button
            className="flex gap-4 px-8 py-6 hover:bg-blue-300 h-full w-full"
            type="submit"
          >
            <LogOut /> Log out
          </button>
        </form>
      </div>
    </div>
  );
};

export const BottomBar = () => {
  const navItems = NavItems();
  const [, action] = useActionState(logout, null);
  return (
    <div className="md:hidden flex flex-row bg-blue-100 border-r-2 border-r-blue-700 w-screen justify-between fixed left-0 right-0 bottom-0">
      {navItems.map((ni) => {
        return (
          <Link
            key={ni.name}
            href={ni.href}
            className={`flex justify-center items-center p-4 hover:bg-blue-300 h-full w-full ${clsx(
              ni.active ? "text-blue-400" : ""
            )}`}
          >
            {ni.icon}
          </Link>
        );
      })}
      <form
        className="flex justify-center items-center p-4 hover:bg-blue-300 h-full w-full"
        action={action}
      >
        <button type="submit">
          <LogOut />
        </button>
      </form>
    </div>
  );
};
