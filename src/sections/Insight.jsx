import React from 'react'

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { people01, people02, people03, map } from '../assets';


const Insight = () => {
    return (
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex flex-col'
        >
            <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className='text-[25px] font-bold text-left sm:text-[40px] md:text-center'>
            Reach out to customers, Sell Anywhere, at any time using WhatsApp.
            </motion.h1>

            {/* can we have something like that map on browpay's mail site probably as an hero or so... I have an idea in mind, but not  */}
            {/* <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className="relative mt-[68px] flex w-full h-[550px]"
            >
                <img src={map} alt="map" className="w-full h-full object-cover" />

                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                <img src={people01} alt="people" className="w-full h-full" />
                </div>

                <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                <img src={people02} alt="people" className="w-full h-full" />
                </div>

                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                <img src={people03} alt="people" className="w-full h-full" />
                </div>
            </motion.div> */}
        </motion.div>
    )
}

export default Insight;