import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'
import { GrAnnounce } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";




function About() {
    return (
        <motion.div 
            className='w-full'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className='text-[20px] md:text-center'>WHAT WE DO</motion.p>
            <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className='text-[25px] font-bold text-left sm:text-[40px] md:text-center'>We solve digital challenges in sales</motion.h1>
            <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className='text-[20px] md:text-center'>Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.</motion.p>

            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='flex flex-col justify-center md:flex-row gap-10 mt-20'>
                <div className='p-5 border border-blue-400'>
                    <div className='flex justify-between items-center pb-5'>
                        <h1 className='text-[20px] font-bold'>Better audiences</h1>
                        <GrAnnounce size={45} className='bg-blue-300 p-2 rounded-full' />
                    </div>
                    <p>Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
                </div>
                
                <div className='p-5 border border-blue-400'>
                    <div className='flex justify-between items-center pb-5'>
                        <h1 className='text-[20px] font-bold'>Better analytics</h1>
                        <TbBrandGoogleAnalytics size={45} className='bg-blue-300 p-2 rounded-full' />
                    </div>
                    <p>Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
                </div>
                <div className='p-5 border border-blue-400'>
                    <div className='flex justify-between items-center pb-5'>
                        <h1 className='text-[20px] font-bold'>Better outcomess</h1>
                        <CiDollar size={45} className='bg-blue-300 p-2 rounded-full' />
                    </div>
                    <p>Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default About;