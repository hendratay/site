"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  return (
    <aside className="mb-12 tracking-tight">
      <div className="lg:sticky lg:top-12">
        <h1 className="font-bold text-2xl">laziest.dev</h1>
        <nav className="flex flex-row items-start px-0 pb-0" id="nav">
          <div className="flex flex-row space-x-4 py-1">
            <NavItem path="/" name="home" />
            <NavItem path="/about" name="about" />
            <NavItem path="/project" name="project" />
            <NavItem path="/blog" name="blog" />
          </div>
        </nav>
      </div>
    </aside>
  );
}

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  let isActive = path === pathname;

  return (
    <Link key={path} href={path}>
      <span
        className={
          isActive
            ? "font-semibold underline underline-offset-4 decoration-2"
            : "hover:font-semibold"
        }
      >
        {name}
      </span>
    </Link>
  );
}
