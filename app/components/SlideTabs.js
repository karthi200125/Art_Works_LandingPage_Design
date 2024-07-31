import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";

export const SlideTabsExample = ({ navItems }) => {
    return (
        <SlideTabs navItems={navItems} />
    );
};

const SlideTabs = ({ navItems }) => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="hidden sm:flex relative mx-auto w-fit rounded-full border-2 border-black bg-black p-1"
        >
            {navItems?.map((item, i) => (
                <Tab key={i} setPosition={setPosition}>{item?.name}</Tab>
            ))}
            {/* <Tab setPosition={setPosition}>Pricing</Tab>
            <Tab setPosition={setPosition}>Features</Tab>
            <Tab setPosition={setPosition}>Docs</Tab>
            <Tab setPosition={setPosition}>Blog</Tab> */}

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-white md:h-12"
        />
    );
};