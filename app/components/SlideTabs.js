'use client'

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

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
    const [activeIndex, setActiveIndex] = useState(null);

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
                <Tab
                    key={i}
                    link={item?.link}
                    setPosition={setPosition}
                    setActiveIndex={setActiveIndex}
                    index={i}
                    isActive={activeIndex === i}
                >
                    {item?.name}
                </Tab>
            ))}

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition, setActiveIndex, link, index, isActive }) => {
    const ref = useRef(null);

    return (
        <Link
            activeClass="active"
            to={`${link}`}
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
                setActiveIndex(index);
                if (ref.current) {
                    const { width } = ref.current.getBoundingClientRect();
                    setPosition({
                        left: ref.current.offsetLeft,
                        width,
                        opacity: 1,
                    });
                }
            }}
        >
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
                className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base ${isActive ? 'active' : ''}`}
            >
                {children}
            </li>
        </Link>
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
