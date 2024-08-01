import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { FaStackExchange } from "react-icons/fa6";
import TextAnimation from './TextAnimation';

const AllHere = () => {
    return (
        <section className='max-h-max md:h-[300px] mx-auto w-[92%] md:w-full bg-white/10 rounded-[20px] text-white flex items-center justify-center gap-10 md:flex-row flex-col'>
            <div className="w-full md:w-[25%] flex justify-center items-start md:px-10">
                <TextAnimation className='text-3xl font-semibold text-white'>
                    All the amazing art here...
                </TextAnimation>
            </div>
            <div className="w-full md:w-[25%] space-y-3">
                <MdOutlineSecurity size={40} />
                <TextAnimation className='text-xl font-semibold text-white'>Encrypted Security</TextAnimation>
                <p className='text-white/50'>
                    <TextAnimation>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum.</TextAnimation>
                </p>
            </div>
            <div className="w-full md:w-[25%] space-y-3">
                <FaStackExchange size={40} />
                <h4>
                    <TextAnimation className='text-white'>Encrypted Security</TextAnimation>
                </h4>
                <p className='text-white/50'>
                    <TextAnimation>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum.</TextAnimation>
                </p>
            </div>
        </section>
    )
}

export default AllHere