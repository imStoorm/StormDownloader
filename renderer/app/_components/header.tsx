"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MinimizeIcon, CloverIcon, XIcon, MinusIcon, MaximizeIcon } from 'lucide-react'; 
import { useState } from "react";

const Header = ({font}) => {
    const handleMinimize = () => {
        window.ipc.minimize();
    }
    const handleClose = () => {
        window.ipc.close();
    }
    return (
        <div className={`${font.className} w-full h-[8%] border-b border-[#0d0f0f]`}>
        <div className="items-center gap-2 my-2 mx-2 flex justify-between">
          {/* Logo e links alinhados à esquerda */}
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
            <Button asChild>
              <Link href="/">
                <p className="text-[#d9e9e9] hover:text-[#6ebab3]">Home</p>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                <p className="text-[#d9e9e9] hover:text-[#6ebab3]">Sobre Nós</p>
              </Link>
            </Button>
          </div>
      
          {/* Div alinhada à direita */}
          <div className="flex items-center">
            <Button className="hover:bg-[#141717]" onClick={handleMinimize}>
              <MinusIcon/>
            </Button>
            <Button className="hover:bg-[#141717]" onClick={handleClose}>
              <XIcon/>
            </Button>
          </div>
        </div>
      </div>
    );
}
 
export default Header