import DisplayLottie from './DisplayLottie';
import coding from './coding.json';
import heroimage from '../Lottie/heroimage.jpg';

const Lottie = () => {
    return (
        <div className="bg-[#0a192f] w-full py-10 px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                
                {/* Left Side Image with Shadow and Hover */}
                <div className="w-full max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                    <img
                        src={heroimage}
                        alt="heroimage"
                        className="w-full h-[400px] border rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-sky-500 cursor-pointer"
                    />
                </div>
                
                {/* Right Side Lottie Animation with Hover */}
                <div className="w-full max-w-[500px] transition duration-300 ease-in-out transform hover:scale-105">
                    <DisplayLottie animationData={coding} />
                </div>

            </div>
        </div>
    );
};

export default Lottie;
