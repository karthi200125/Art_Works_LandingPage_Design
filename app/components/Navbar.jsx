"use client";
import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import Logo from "./Logo";
import { SlideTabsExample } from "./SlideTabs";

export const Navbar = ({ className }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const previous = scrollYProgress.getPrevious();
            if (typeof previous === "number") {
                const direction = current - previous;

                if (scrollYProgress.get() < 0.05) {
                    setVisible(true);
                } else {
                    setVisible(direction < 0);
                }
            }
        }
    });

    const navItems = [
        {
            name: "Home",
            link: "home",
        },
        {
            name: "Work",
            link: "work",
            icon: '',
        },
        {
            name: "Create",
            link: "create",
            icon: '',
        },
        {
            name: "Auction",
            link: "auction",
            icon: '',
        },
        {
            name: "Contact",
            link: "contact",
            icon: '',
        },
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "w-full flex fixed top-5 inset-x-0 items-center justify-center space-x-4 z-[5000] px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8",
                    className
                )}
            >
                <div className={`flex flex-row items-center justify-between ${scrollYProgress.get() === 0 ? "bg-black" : "glass"} w-[1440px] mx-auto rounded-[20px] dark:bg-white/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-5 py-2`}>
                    {/* logo */}
                    <Logo />

                    {/* tabe */}
                    <SlideTabsExample navItems={navItems} />

                    {/* nav right */}
                    <div className="flex flex-row items-center gap-5">
                        <div className="hidden lg:flex cursor-pointer flex-row items-center gap-3 bg-black rounded-full px-1 py-1 pl-5 group">
                            Signin
                            <div className="group-hover:bg-white group-hover:text-black trans flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                                <IoPersonOutline />
                            </div>
                        </div>
                        <div className="cursor-pointer flex flex-row items-center gap-3 bg-black rounded-full px-1 py-1 pl-5 group">
                            Menu
                            <div className=" group-hover:bg-white group-hover:text-black trans flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                                <HiOutlineMenuAlt4 />
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </AnimatePresence>
    );
};
