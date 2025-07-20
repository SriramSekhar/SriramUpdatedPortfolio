import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ image, title, detailed, appLink = '', codeLink, techStack = [] }) => {
    return (
        <div className="w-[600px] h-[350px] bg-white rounded-lg shadow-md overflow-hidden flex flex-row">
            <div className="w-1/2 h-full">
                <img className="w-full h-full object-fit" src={image} alt={title} />
            </div>
            <div className="w-1/2 p-6 flex flex-col">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <p className="mt-2 text-gray-700 flex-grow">{detailed}</p>

                {/* Display Tools/Tech Stack */}
                {techStack.length > 0 && (
                    <div className="mt-4">
                        <ul className="flex flex-wrap gap-2">
                            {techStack.map((tool, index) => (
                                <li
                                    key={index}
                                    className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
                                >
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between items-center space-x-4">
                    {appLink && (
                        <a
                            href={appLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
                        >
                            <FaExternalLinkAlt className="mr-2" />App
                        </a>
                    )}
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150"
                    >
                        <FaGithub className="mr-2" />Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;