import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';

import { banner_2 } from '../assets';
import { Link } from "react-router-dom";

const Hero = () => {
        return (
            <motion.div 
                className="mt-0 mb-20 w-full md:mt-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <div>
                    <motion.div variants={textVariant(1.1)} >
                        <h1 className="head_text blue_gradient sm:text-center">How big can your business grow with data?</h1>
                        <h1 className="text-[18px] font-bold mt-5 sm:text-[20px] sm:text-center">Amplify your business with our data-centric, performance-driven AI sales solution.</h1>
                    </motion.div>

                    <div className="mt-8 md:mt-6" />
                    <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="text-[15px] lg:text-[25px] sm:text-center ">
                        <Link to='/Sales' className="px-6 py-4 rounded-full text-[18px] bg-gray-100 shadow-md hover:bg-yellow-400">Get Started</Link>
                    </motion.div>
                </div>
                <div className="mt-10 md:mt-10" />

                <motion.div
                    variants={fadeIn('bottom', 'tween', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                >
                    <img src={banner_2} alt="image" className="rounded-3xl w-[1200px] h-[400px] md:h-[600px] object-cover"/>
                </motion.div>
                    
            </motion.div>
        )
    };

export default Hero;