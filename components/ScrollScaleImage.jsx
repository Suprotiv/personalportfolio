'use client'
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function ScrollScaleImage() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: '/bg1.avif',
            scale: scale4
        },
        {
            src: '/bg1.avif',
            scale: scale5
        },
        {
            src: '/bg1.avif',
            scale: scale6
        },
        {
            src: '/bg1.avif',
            scale: scale5
        },
        {
            src: '/bg1.avif',
            scale: scale6
        },
        {
            src: '/bg1.avif',
            scale: scale8
        },
        {
            src: '/bg1.avif',
            scale: scale9
        }
    ]

    return (
        <div ref={container} className='Container'>
            <div className='sticky'>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className='el'>
                            <div className='imageContainer'>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}