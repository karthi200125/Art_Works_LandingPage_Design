'use client';

import { createArt } from '@/app/data';
import { easeInOut, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            easeInOut:''
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const CreateCards = () => {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 py-10 overflow-hidden"
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
        >
            {createArt.map((card) => (
                <motion.div
                    key={card.id}
                    className='w-full h-[400px] bg-white/10 rounded-[20px] p-5 relative flex flex-col justify-center gap-3 items-center trans hover:bg-[var(--voilet)] cursor-pointer'
                    variants={cardVariants}
                >
                    <h2 className='mt-[50px] text-white/20 text-[60px]'>{card.count}</h2>
                    <h4>{card.title}</h4>
                    <p className='text-white/40 line-clamp-6'>{card.desc}</p>

                    {/* Image */}
                    <img
                        src={card.img}
                        alt={card.title}
                        className='imageshadow absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] object-contain'
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default CreateCards;
