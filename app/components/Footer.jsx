import React from 'react';
import Logo from './Logo';
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-[92%] md:w-full mx-auto max-h-max md:h-[400px] bg-white/10 rounded-[30px] flex flex-wrap flex-row items-start justify-between p-5 md:p-10 gap-10 md:gap-0'>
            <div className='flex flex-col items-center md:items-start w-full md:w-[25%] text-center'>
                <Logo />
                <p>
                    Discover rare abstract items from around the world. Discover, create, & sell art.
                </p>
            </div>
            <div className=' space-y-3'>
                <h4 className='pb-[30px]'>Pages</h4>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>AI NFTs</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>How it Works</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>Create</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>Explore</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>Privacy & Terms</p>
            </div>
            <div className='space-y-3'>
                <h4 className='pb-[30px]'>Community</h4>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>Help Center</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>Partners</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>Suggestions</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>More</p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>Newsletter</p>
            </div>
            <div className='flex flex-col items-center md:items-start gap-5 w-full md:w-[20%]'>
                <h4 className='pb-1 md:pb-[30px]'>Contact Us</h4>
                <p className='text-center md:text-start'>83838, Yumanuna Bridge, Salem, Tamil Nadu</p>
                <div className='flexRow gap-5'>
                    <div className='cursor-pointer hover:bg-[var(--voilet)] trans w-[50px] h-[50px] rounded-full bg-white/10 fullCenter group'><FaInstagramSquare size={20} /></div>
                    <div className='cursor-pointer hover:bg-[var(--voilet)] trans w-[50px] h-[50px] rounded-full bg-white/10 fullCenter group'><FaTwitter size={20} /></div>
                    <div className='cursor-pointer hover:bg-[var(--voilet)] trans w-[50px] h-[50px] rounded-full bg-white/10 fullCenter group'><FaFacebook size={20} /></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
