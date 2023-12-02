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
            <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className='text-[25px] font-bold text-left sm:text-[40px] md:text-center'>We solve data problems with your sales the AI way</motion.h1>
            <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className='text-[20px] md:text-center'>We help businesses achieve, measurable results faster. Focusing on the numbers that matters — communicating relevant insights about your business with the help of artificial intelligence, to enable increased profitability.</motion.p>

            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='flex flex-col justify-center md:flex-row gap-10 mt-20'>
                <div className='p-5 border border-blue-400'>
                    <div className='flex justify-between items-center pb-5'>
                        <h1 className='text-[20px] font-bold'>Better audiences</h1>
                        <GrAnnounce size={45} className='bg-blue-300 p-2 rounded-full' />
                    </div>
                    <p>Explore the potential of ML and AI algorithms in providing numbers that do not lie, about your businesses transaction to sell better.</p>
                </div>
                
                <div className='p-5 border border-blue-400'>
                    <div className='flex justify-between items-center pb-5'>
                        <h1 className='text-[20px] font-bold'>Intelligent analytics</h1>
                        <TbBrandGoogleAnalytics size={45} className='bg-blue-300 p-2 rounded-full' />
                    </div>
                    <p>Our proprietary solution is tailored to help your business by taking on an industry-based approach to data starting with your sales.</p>
                </div>
                <div className='p-5 border border-blue-400'>
                    <div className='flex justify-between items-center pb-5'>
                        <h1 className='text-[20px] font-bold'>Better profitability</h1>
                        <CiDollar size={45} className='bg-blue-300 p-2 rounded-full' />
                    </div>
                    <p>Be rest assured that your profitability is fueled by personalized business data, to help grow the stable figures and cover more sales cycles within a shorter time.</p>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default About;