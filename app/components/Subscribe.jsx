import React from 'react';
import Button from './Button';
import sub from '../assets/subscribe.png'

const Subscribe = () => {
    return (
        <section className='w-full flex justify-center'>
            <div className='w-full rounded-[20px] bg-[var(--voilet)] max-h-max md:h-[300px] flex flex-col md:flex-row items-center justify-center gap-5 p-10'>
                <div className="w-full md:w-[20%] h-full flex items-center justify-center">
                    <img src={sub.src} alt="" className='w-[200px] h-[200px] object-contain' />
                </div>
                <div className="w-full md:w-[45%] h-full flex flex-col gap-5 justify-between">
                    <h2>Subscribe and get updates every week</h2>
                    <input
                        type="text"
                        className='w-full h-[50px] px-5 bg-black text-white rounded-[10px]'
                        placeholder='Enter your Email Address'
                    />
                </div>
                <div className="w-full md:w-[30%] h-full flex-col-reverse flex md:flex-col gap-5 justify-between ">
                    <p className='text-white/60'>We have blogs related to NFTs where we share thoughts and routines. Our blogs are updated weekly.</p>
                    <Button >Subscribe</Button>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
