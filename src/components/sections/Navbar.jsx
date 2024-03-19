import React from 'react'
import { AlignJustify } from 'lucide-react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"


const Navbar = () => {
    return (
        <section className='h-fit w-full flex_between p-2 border sticky top-0 backdrop-blur-sm z-10'>
            <img className='w-28 mx-4 lg:mx-20' src="assets/icons/logo.png" alt="" />
            <div className='hidden md:block'>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Home</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>About</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Why Choose Us</MenubarItem>
                            <MenubarItem>Our Journey</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Sections</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Courses</MenubarItem>
                            <MenubarItem>Why Choose Us</MenubarItem>
                            <MenubarItem>Our Journey</MenubarItem>
                            <MenubarItem>Previous Students</MenubarItem>
                            <MenubarItem>FAQs</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Courses</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>News Writing</MenubarItem>
                            <MenubarItem>Investigative Journalism</MenubarItem>
                            <MenubarItem>Digital Media Production</MenubarItem>
                            <MenubarItem>Photo Journalism Workshop</MenubarItem>
                            <MenubarItem>Data Journalism Workshop</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Contact</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className='hidden md:block mx-4 lg:mx-20'>
                <Button className=" dark border" >LOGIN</Button>
                <Button className="mx-1" >SIGN IN</Button>
            </div>
            <div className='md:hidden'>
                <DropdownMenu>
                    <DropdownMenuTrigger><AlignJustify /></DropdownMenuTrigger>
                    <DropdownMenuContent className='mr-6'>
                        <DropdownMenuLabel>Home</DropdownMenuLabel>
                        <DropdownMenuItem>About</DropdownMenuItem>
                        <DropdownMenuItem>Courses</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                        <DropdownMenuItem>Login</DropdownMenuItem>
                        <DropdownMenuItem>Sign In</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </section>

    )
}

export default Navbar