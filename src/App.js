import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
// import Work from './Components/Work2';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education';
// import Certifications from './Components/Certifications';
// import LanguagesAndInterests from './Components/LanguagesAndInterests';
// import Experience from './Components/Experience';
// import Progress from './Components/Progress';
import Footer from './Components/Footer';
import Lottie from './Components/Lottie/lottie';
// import Achievement from './Components/Achievement';
// import Github from './Components/Github';

const LoadingSpinner = ({ isFadingOut }) => {
    return (
        <div className={`flex flex-col bg-[#f0f0f0] items-center justify-center h-screen ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-[#416D19] mb-4"></div>
            <p className="text-6xl font-bold text-[#416D19]">Loading...</p>
        </div>
    );
};

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000); // Match the duration of the fade-out animation
        }, 1000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSpinner isFadingOut={isFadingOut} />;
    }

    return (
        <div className="fade-in">
            <NavBar />
            <Home />
            <Lottie />
            <About />
            {/* <LanguagesAndInterests /> */}
            {/* <Progress /> */}
            <Education />
            {/* <Experience /> */}
            {/* <Certifications /> */}
            <Skills />
            <Work />
            {/* <Achievement /> */}
            {/* <Github /> */}
            <Contact />
            <Footer />
      </div>
    );
}

export default App;
