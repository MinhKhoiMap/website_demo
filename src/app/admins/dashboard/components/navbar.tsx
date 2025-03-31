"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlignJustify, LogOut, User, View } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex py-2 px-6 gap-5 border-b border-gray-800">
      <div className="flex flex-1 items-center gap-4">
        <Image
          className="img-fluid w-auto h-6"
          src="/images/logo_notext.png"
          alt="logo"
          width={150}
          height={48}
        />
        <p className="text-xl font-bold">Admin Page</p>
      </div>
      <Link
        href="/"
        className="leading-10 flex items-center gap-1 hover:underline"
      >
        Go to Website
        <View />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignJustify />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <User />
              <span>Profile</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:!bg-red-300 cursor-pointer">
            <LogOut />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
