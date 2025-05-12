import Link from "next/link";
import { Search, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-4 md:px-8 bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-serif font-bold">
        <Image
          src="/mini-logo-black.png"
          alt="Blue Born Logo"
          width={100}
          height={100}
          className="w-[100px] max-w-[70%]"
        />
      </Link>
      <div className="flex items-center space-x-4">
        <button className="p-1">
          <Search className="h-5 w-5" color="black"/>
        </button>
        <button className="p-1">
          <ShoppingCart className="h-5 w-5" color="black" />
        </button>
        <button className="p-">
          <Heart className="h-5 w-5" color="black" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;