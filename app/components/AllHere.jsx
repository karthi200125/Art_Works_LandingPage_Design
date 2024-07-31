import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { FaStackExchange } from "react-icons/fa6";

const AllHere = () => {
    return (
        <div className='h-[300px] w-full bg-white/10 rounded-[20px] text-white flex items-center justify-center gap-10'>
            <div className="w-[25%] flex justify-center items-start px-10 text-3xl font-semibold">
                All the amazing art here...
            </div>
            <div className="w-[25%] space-y-3">
                <MdOutlineSecurity size={40} />
                <h4>Encrypted Security</h4>
                <p className='text-white/50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum.</p>
            </div>
            <div className="w-[25%] space-y-3">
                <FaStackExchange size={40} />
                <h4>Encrypted Security</h4>
                <p className='text-white/50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum.</p>
            </div>
        </div>
    )
}

export default AllHere