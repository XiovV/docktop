"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Host", href: "/" },
  { name: "Containers", href: "/containers" },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <>
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        {...props}
      >
        {navLinks.map((link) => {
          return (
            <Link
              href={link.href}
              className={clsx("font-medium", {
                "text-muted-foreground": pathname !== link.href,
              })}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
