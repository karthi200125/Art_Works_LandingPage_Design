import React from 'react';
import Logo from './Logo';
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import TextAnimation from './TextAnimation';

const Footer = () => {
    return (
        <div id='contact' className='w-[92%] md:w-full mx-auto max-h-max md:h-[400px] bg-white/10 rounded-[30px] flex flex-wrap flex-row items-start justify-between p-5 md:p-10 gap-10 md:gap-0'>
            <div className='flex flex-col gap-5 items-center md:items-start w-full md:w-[25%]'>
                <Logo />
                <p>
                    <TextAnimation>Discover rare abstract items from around the world. Discover, create, & sell art.</TextAnimation>
                </p>
            </div>
            <div className='space-y-3'>
                <TextAnimation className='text-xl font- pb-[30px]semibold text-white'>Pages</TextAnimation>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>AI NFTs</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>How it Works</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>Create</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>Explore</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>Privacy & Terms</TextAnimation>
                </p>
            </div>
            <div className='space-y-3'>
                <TextAnimation className='text-xl font- pb-[30px]semibold text-white'>Community</TextAnimation>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>Help Center</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>Partners</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>Suggestions</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>More</TextAnimation>
                </p>
                <p className='hover:text-[var(--voilet)] trans cursor-pointer'>
                    <TextAnimation>Newsletter</TextAnimation>
                </p>
            </div>
            <div className='flex flex-col items-center md:items-start gap-5 w-full md:w-[20%]'>
                <TextAnimation className='text-xl font-semibold pb-[30px] text-white'>Contact Us</TextAnimation>
                <p className='text-center md:text-start'>
                    <TextAnimation>83838, Yumanuna Bridge, Salem, Tamil Nadu</TextAnimation>
                </p>
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
