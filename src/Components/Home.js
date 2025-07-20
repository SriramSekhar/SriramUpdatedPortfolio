import React, { useEffect, useRef } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Typed } from "react-typed";
import {Link} from 'react-scroll';
import { motion } from "framer-motion";
import ThreeBackground from "./bg";
import Space from './Lottie/Space.json';
import DisplayLottie from './Lottie/DisplayLottie';

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

const textVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 5 } },
    whileHover: { scale: 1.1, color: "#f08", transition: { yoyo: Infinity, duration: 0.3 } },
};

const Home = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Front-end Developer", "React Developer"],
            typeSpeed: 40,
            backSpeed: 50,
            loop: true,
            cursorChar: '_',
        });

        // Cleanup
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div name='home' className="w-full h-screen bg-[#0a192f]">
            <ThreeBackground />
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <motion.p
                    className="text-pink-500 font-bold text-6xl z-10"
                    variants={textVariants} // Apply variants
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                >
                    Hi, I'm
                </motion.p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#416D19]">SRIRAM SEKHAR </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"><span ref={el} className="descriptionTyped" /></h2>

                <div className="flex flex-row mt-4">
                    {/* change the text as you wish */}
                    <motion.div
                        className="flex flex-col"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p className="text-white font-bold text-xl  py-1 max-w-[700px]" variants={itemVariants}>
                            Welcome to my portfolio! I specialize in crafting beautiful and functional web applications.
                        </motion.p>
                        <motion.p className="text-white font-bold text-xl  py-1 max-w-[700px]" variants={itemVariants}>
                           "Building seamless digital experiences from front to back."
                        </motion.p>
                        <motion.p className="text-white font-bold text-xl py-1 max-w-[700px]" variants={itemVariants}>
                            "Turning coffee and code into user-friendly solutions."
                        </motion.p>
                    </motion.div>
                    <div className="w-[17%] ml-8 hidden md:block">
                        <DisplayLottie animationData={Space} />
                    </div>
                </div>

                <div className="z-10 pt-2">
                    <div className="inline-block"><Link to="work" duration={700} smooth={true} className=" text-white group border-4 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500 font-bold rounded-full">View Projects
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 hover font-bold" />
                        </span>
                    </Link></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
