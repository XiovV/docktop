import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="font-medium transition-colors hover:text-primary"
      >
        Host
      </Link>
      <Link
        href="/containers"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Containers
      </Link>
    </nav>
  );
}
