import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Button = ({
    className,
    children,
    iconbg = ''
}) => {
    return (
        <button
            className={`btn h-[45px] bg-white/10 text-white border-none relative text-md font-bold overflow-hidden z-[1] max-w-max px-10 flex items-center justify-center flex-row gap-3 hover:text-black group ${className}`}
            style={{ borderTopLeftRadius: "30px", borderBottomRightRadius: "30px" }}
        >
            {/* <div className={`rotate-[-45deg] group-hover:rotate-0 trans flex items-center justify-center h-[40px] w-[40px] rounded-full bg-black text-white ${iconbg}`}>
                <GoArrowRight size={20} />
            </div> */}
            {children}
        </button>
    )
}

export default Button