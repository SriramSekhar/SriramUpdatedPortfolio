import React, { useEffect } from "react";

// Import project images
import Password from "../Assets/Password.jpeg";
import test from "../Assets/test.jpeg";
import test1 from "../Assets/test1.png";
import ProjectCard from "./ProjectCard";


const Work = () => {
    const types = [ 'PROJECTS', 'All'];
    const [selectedType, setSelectedType] = React.useState('All');
    const [animate, setAnimate] = React.useState(false);

    useEffect(() => {
        setAnimate(false);
        const timer = setTimeout(() => setAnimate(true), 10);
        return () => clearTimeout(timer);
    }, [selectedType]);

    return (
        <div name='work' className="w-full min-h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 pl-4 pt-4">
                    <p className="text-6xl font-bold inline border-b-4 text-[#416D19] border-pink-300">Projects</p>
                    <p className="py-6">/ Check out my previous works. /</p>
                </div>

                {/* Filter buttons */}
                <div className="flex justify-center pb-8 space-x-4">
                    {types.map((type, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedType(type)}
                            className={`px-2 py-1 text-sm font-semibold rounded-lg transition-all duration-150 sm:px-4 sm:py-2 sm:text-lg ${selectedType === type ? 'bg-green-600 text-white shadow-lg shadow-green-600/50' : 'bg-[#0a192f] text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'}`}
                            style={{
                                boxShadow: selectedType === type ? '' : 'inset 5px 5px 10px #050f1f, inset -5px -5px 10px #0f2b4f'
                            }}
                        >
                            {type}
                        </button>
                    ))}
                </div> {/* ✅ Closing div added for filter buttons */}

                {/* Python/HTML-CSS Projects */}
                {(selectedType === 'PROJECTS' || selectedType === 'All') &&
                    <div className={`grid pb-8 sm:grid-cols-2 pl-6 pr-6 sm:pl-2 sm:pr-2 md:grid-cols-3 gap-4 ${animate ? 'fadeIn' : ''}`}>

                    <ProjectCard
                        image={test} 
                        title={"CineVerse Project"} 
                        // description={"Check your body mass index and seek advice"} 
                        appLink={"https://cineverse-project.vercel.app/"} 
                        codeLink={"https://github.com/SriramSekhar/CineverseProject"}
                        detailed={"A simple webpage for collection of movies."}
                        techStack={["React JS", "Tailwind CSS"]}
                    />
                    <ProjectCard
                        image={Password} 
                        title={"Apple Clone Webpage"} 
                        // description={"Check your body mass index and seek advice"} 
                        appLink={" https://qlithbiswo.netlify.app/ "} 
                        codeLink={"https://github.com/Biswojit143/Qlith--Apple-Website-Clone"}
                        detailed={"A simple clone webpage of a Apple servicing webpage."}
                        techStack={[ "HTML", "CSS" , "Java Script"]}
                    />

                        <ProjectCard
                        image={test1} 
                        title={"Superlist Landing Clone"} 
                        // description={"Check your body mass index and seek advice"} 
                        appLink={"https://mern-02-m002-theta.vercel.app/"} 
                        codeLink={"https://github.com/SriramSekhar/MERN02M002/tree/main/june/week2/day5"}
                        detailed={"A simple tool to calculate body mass index and offer personalized advice on maintaining a healthy BMI."}
                        techStack={[ "HTML", "CSS"]}
                    />
                    </div>
                }
            </div>
        </div>
    );
}; // ✅ Closing brace for the function component

export default Work;
