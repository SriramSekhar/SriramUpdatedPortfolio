import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { FaLaptopCode, FaDatabase, FaMobileAlt } from 'react-icons/fa';

// cutom imports, change these imports in the Assets folder
import backend from '../Assets/backend.png';
import frontend from '../Assets/frontend.png';
import android from '../Assets/android.png';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.4, // Trigger when 50% of the component is in view
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.5,
            },
        },
    };

    return (
        <div ref={ref} name='about' className="w-full min-h-screen bg-[#0a192f] text-gray-300 overflow-hidden">
            <div className="flex flex-col justify-center items-center w-full h-full">
                
                <div className="max-w-[1000px] pt-4 w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-left pb-6 pl-4">
                        <p className="text-6xl  text-[#416D19] font-bold inline border-b-4 border-pink-300">About</p>
                    </div>
                </div>

                <div className="max-w-[1000px] w-full mt-8 px-4">
                    <div className="pt-2 rounded-lg shadow-lg">
                        {/* change the description in the <p> tag below */}
                        <p className="text-2xl text-white"> 
                            As a front-end developer, I specialize in crafting visually appealing and functional websites.
                            Proficient in HTML, CSS, JavaScript, React, Materials UI, and Tailwind CSS, I am currently pursuing MCA and doing internship at Qlith Innovation
                            My journey as a self-taught developer involves working on various minor projects, android development and I am enthusiastic about exploring new opportunities for continuous learning and professional growth.
                        </p>
                    </div>
                </div>

                <motion.div
                    className="max-w-[1000px] w-full mt-16 mb-28 grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-[#1c3a5a] p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
                    >
                        {/* <FaLaptopCode className="text-4xl mb-4" /> */}
                        <img src={frontend} alt="Frontend" className="w-20 h-20 mb-4" />
                        <h3 className="text-2xl">Front-end</h3>
                        <h3 className="text-1xl mb-4">Developer</h3>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-[#1c3a5a] p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
                    >
                        {/* <FaDatabase className="text-4xl mb-4" /> */}
                        <img src={backend} alt="Backend" className="w-20 h-20 mb-4" />
                        <h3 className="text-2xl">Back-end</h3>
                        <h3 className="text-1xl mb-4">Developer</h3>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-[#1c3a5a] p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
                    >
                        {/* <FaMobileAlt className="text-4xl mb-4" /> */}
                        <img src={android} alt="Android" className="w-20 h-20 mb-4" />
                        <h3 className="text-2xl">Android</h3>
                        <h3 className="text-1xl mb-4">Developer</h3>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
