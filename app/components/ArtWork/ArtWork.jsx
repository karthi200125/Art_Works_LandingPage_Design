import React from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import ArtCards from './ArtCards';
import fire from '../../assets/fire.png'

const ArtWork = () => {
    return (
        <section className='min-h-[600px] w-full flex flex-row items-start gap-10'>
            <div className='w-[20%] flex flex-col max-h-max space-y-3'>
                <h2 className='text-5xl font-semibold flexRow gap-3'>Top
                    <img src={fire.src} alt="" className='w-[60px] h-[60px] object-contain' />
                </h2>
                <h2 className='text-5xl font-semibold'>Art Work</h2>
                {/* <h2 className='text-5xl font-semibold'>.</h2> */}
                <div className='flex flex-row items-center gap-3 mt-[100px]'>
                    <div className='w-12 h-12 rounded-full bg-white/10 fullCenter cursor-pointer hover:bg-[var(--voilet)] trans'>
                        <HiArrowLongLeft size={20} />
                    </div>
                    <div className='w-12 h-12 rounded-full bg-white/10 fullCenter cursor-pointer hover:bg-[var(--voilet)] trans'>
                        <HiArrowLongRight size={20} />
                    </div>
                </div>
            </div>

            <div className='w-[80%]'>
                <ArtCards />
            </div>
        </section>
    )
}

export default ArtWork