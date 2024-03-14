"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  className,
  ...params
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const isActive = href === path;

  return (
    <Link
      href={href}
      className={clsx(isActive && "underline", className)}
      {...params}
    />
  );
};

export default NavLink;
