import React from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import LiveAuctionCards from './LiveAuctionCards'

const LiveAction = () => {
    return (
        <section className='min-h-[600px] w-full space-y-[100px]'>
            <div className='flexRow justify-between'>
                <h2>Live Auction</h2>
                <div className='flex flex-row items-center gap-3'>
                    <div className='w-12 h-12 rounded-full bg-white/10 fullCenter cursor-pointer hover:bg-[var(--voilet)] trans'>
                        <HiArrowLongLeft size={20} />
                    </div>
                    <div className='w-12 h-12 rounded-full bg-white/10 fullCenter cursor-pointer hover:bg-[var(--voilet)] trans'>
                        <HiArrowLongRight size={20} />
                    </div>
                </div>
            </div>

            {/* live acuction cards */}
            <LiveAuctionCards />
        </section>
    )
}

export default LiveAction