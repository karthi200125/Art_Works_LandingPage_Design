'use client';

import { artCards } from '@/app/data';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ArtCards = () => {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <motion.div
            className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
        >
            {artCards.map((card) => (
                <motion.div
                    key={card.id}
                    className='w-full bg-white/10 h-[300px] rounded-[20px] p-5 relative overflow-hidden group cursor-pointer'
                    variants={cardVariants}
                >
                    <img
                        src={card.img}
                        alt={card.title}
                        className='absolute top-0 left-0 w-full h-full object-cover rounded-[20px] brightness-100 group-hover:brightness-100 trans'
                    />
                    <div className='absolute bottom-3 left-3 w-[60%] max-h-max space-y-3 text-sm'>
                        <h4>{card.title}</h4>
                        <div className='max-w-max px-5 py-2 glass text-center rounded-full'>{card.desc}</div>
                    </div>
                    <div
                        className='absolute right-[-11px] bottom-[-11px] w-[85px] h-[85px] bg-black flex items-center justify-center'
                        style={{ borderTopLeftRadius: '34px' }}
                    >
                        <div className='flex items-center justify-center bg-white/10 text-white w-[60px] h-[60px] border-[1px] border-solid border-white/10 rounded-full -rotate-45 group-hover:rotate-0 trans group-hover:bg-[var(--voilet)]'>
                            <HiArrowLongRight size={20} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ArtCards;
