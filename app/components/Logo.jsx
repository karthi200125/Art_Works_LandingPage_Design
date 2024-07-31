import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'

const Logo = () => {
    return (
        <div className="flex items-center justify-center trans cursor-pointer w-[60px] h-[60px] bg-black rounded-[10px] hover:bg-[var(--voilet)] group">
            <Image src={logo.src} alt='logo' width={30} height={30} className='object-contain filter group-hover:invert trans' />
        </div>
    )
}

export default Logo