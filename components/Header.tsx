"use client";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center space-x-4 mx-8">
        <div className="items-center space-x-6 text-gray-900 text-[10px] uppercase hidden md:flex md:flex-none">
          <h4>Store Locator</h4>
          <h4>Help Center</h4>
          <h4>Wishlist</h4>
        </div>

        <h1 className="text-2xl uppercase tracking-widest text-center flex-grow">
          Stellar
        </h1>
        <div className="flex items-center space-x-4 text-xs uppercase md:flex md:flex-none">
          <SearchIcon className="h-8" />

          <ClerkLoaded>
            <SignedIn>
              <Link href="/orders">
                <ShoppingCartIcon className="h-8" />
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                {/* <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div> */}
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};
export default Header;
