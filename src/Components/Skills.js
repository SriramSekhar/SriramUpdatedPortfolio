import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss,  SiReact,  SiVisualstudiocode, SiNetlify, SiMongodb  } from "react-icons/si";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 />, name: "HTML", color: "text-orange-600" },
        { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-600" },
        { icon: <FaJs />, name: "JavaScript", color: "text-yellow-500" },
        { icon: <FaGithub />, name: "GitHub", color: "text-gray-300" },
        { icon: <FaGitAlt />, name: "Git", color: "text-orange-600" },
        { icon: <FaReact />, name: "React", color: "text-blue-400" },
        
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-blue-400" },
        
        { icon: <SiReact />, name: "React Native", color: "text-blue-400" },
       
        { icon: <SiVisualstudiocode />, name: "VS Code", color: "text-blue-600" },
       
        { icon: <SiNetlify />, name: "Netlify", color: "text-blue-600" },
        
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
    ];

    const cardVariants = (index) => ({  // Variants for the card animation
        hover: { scale: 1.1, rotate: (index % 2 === 0) ? -15 : 15 },
        rest: { scale: 1, rotate: 0 },
    });

    return (
        <Tooltip.Provider delayDuration={100}>
            <div name='skills' className="w-full  bg-[#0a192f] text-gray-300">
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div>
                        <p className="text-6xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Skills</p>
                        <p className="py-4 text-2xl">/ Some technologies I am familiar with. /</p>
                    </div>

                    <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-6 text-center py-8">
                        {skills.map((skill, index) => (
                            <Tooltip.Root key={index}>
                                <Tooltip.Trigger asChild>
                                    <motion.div
                                        className={`shadow-lg p-6 w-20 h-20 rounded-full bg-gray-800 flex flex-col items-center justify-center ${skill.color}`}
                                        variants={cardVariants(index)}
                                        initial="rest"
                                        whileHover="hover"
                                    >
                                        <div className="text-4xl">
                                            {skill.icon}
                                        </div>
                                    </motion.div>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content sideOffset={5} className="bg-gray-800 text-gray-200 p-2 rounded-md shadow-lg">
                                        <span className="font-semibold">{skill.name}</span>
                                        <Tooltip.Arrow className="fill-gray-800" />
                                    </Tooltip.Content>
                                </Tooltip.Portal>
                            </Tooltip.Root>
                        ))}
                    </div>
                </div>
            </div>
        </Tooltip.Provider>
    );
};

export default Skills;
