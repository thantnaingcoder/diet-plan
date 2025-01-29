"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";


const NavBar = () => {
    const pathname = usePathname();
   
  return (
    <Container className={"mx-auto"}>
    <nav className="flex  justify-between items-center py-4">
      <Link href="/">Diet Plan</Link>
      <div className="flex  space-x-4">
        <Link className={` ${pathname === "/" ? "text-blue-500" : ""}`} href={"/"}>Home</Link>
        <Link className={` ${pathname === "/products" ? "text-blue-500" : ""}`} href={"/products"}>Products</Link>
        <Link className={` ${pathname === "/about" ? "text-blue-500" : ""}`} href={"/about"}>About Us</Link>
        <Link className={` ${pathname === "/contact" ? "text-blue-500" : ""}`} href={"/contact"}>Contacts</Link>
      </div>
    </nav>
    </Container>
  );
};

export default NavBar;
