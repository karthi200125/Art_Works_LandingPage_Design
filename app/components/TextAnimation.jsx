'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation variants for sliding up
export const slideUp = {
    initial: {
        y: '100%',
    },
    open: (i) => ({
        y: '0%',
        transition: { duration: 0.5, delay: 0.05 * i },
    }),
    closed: {
        y: '100%',
        transition: { duration: 0.5 },
    },
};

// Animation variants for opacity
export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
};

const TextAnimation = ({ children, className }) => {
    const descriptionRef = useRef(null);
    const isInView = useInView(descriptionRef);

    return (
        <div ref={descriptionRef} className={`TAdescription`}>
            <div className="TAbody">
                <p className={`TAp ${className || ''}`}>
                    {children.split(' ').map((word, index) => (
                        <span className="TAmask" key={index}>
                            <motion.span
                                variants={slideUp}
                                custom={index}
                                animate={isInView ? 'open' : 'closed'}
                                style={{ display: 'inline-block' }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default TextAnimation;
