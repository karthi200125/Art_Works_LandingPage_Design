import React from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import fire from '../../assets/fire.png'
import ArtCards from './ArtCards';

const ArtWork = () => {
    return (
        <section id='work' className='min-h-[600px] w-full flex flex-col md:flex-row items-start gap-10'>
            <div className='w-full md:w-[20%] flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start max-h-max space-y-3'>
                <h2 className='hidden font-semibold md:flexRow gap-3'>Top
                    <img src={fire.src} alt="" className='w-[60px] h-[60px] object-contain' />
                </h2>
                <h2 className='hidden md:block'>Art Work</h2>
                <h2 className='md:hidden'>Art Work</h2>
                
                <div className='flex flex-row items-center gap-3 mt-[100px]'>
                    <div className='w-12 h-12 rounded-full bg-white/10 fullCenter cursor-pointer hover:bg-[var(--voilet)] trans'>
                        <HiArrowLongLeft size={20} />
                    </div>
                    <div className='w-12 h-12 rounded-full bg-white/10 fullCenter cursor-pointer hover:bg-[var(--voilet)] trans'>
                        <HiArrowLongRight size={20} />
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[80%]'>
                <ArtCards />
            </div>
        </section>
    )
}

export default ArtWork