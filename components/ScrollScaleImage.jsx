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
            src: '/SFC.jpg',
            scale: scale4
        },
        {
            src: '/2.png',
            scale: scale5
        },
        {
            src: '/8.png',
            scale: scale6
        },
        {
            src: '/7.png',
            scale: scale5
        },
        {
            src: '/5.png',
            scale: scale6
        },
        {
            src: '/9.png',
            scale: scale8
        },
        {
            src: '/3.png',
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