"use client";

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import Logo  from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/providers/spinner";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background fixed top-0 flex dark:bg-[#1F1F1F] justify-end md:justify-between items-center gap-3 w-full p-3",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo />
       <div className="md:ml-auto md:justify-end  justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <Spinner />
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Jotion free
              </Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter Jotion
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}