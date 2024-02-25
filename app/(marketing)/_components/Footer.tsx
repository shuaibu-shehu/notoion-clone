'use client'

import { Button } from "@/components/ui/button"
import  Logo from "./Logo"

export const Footer = () => {
  return (
    <div className="flex items-center dark:bg-[#1F1F1F] w-full p-2 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  )
}

export default Footer