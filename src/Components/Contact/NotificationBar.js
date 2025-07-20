import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdCheckCircle, MdError } from 'react-icons/md';

const NotificationBar = ({ message, type, onClose }) => {
    const { width } = useSpring({
        from: { width: '0%' },
        to: { width: '100%' },
        config: { duration: 4000 },
        onRest: onClose, // Trigger the onClose callback after the animation
    });

    useEffect(() => {
        const timer = setTimeout(onClose, 4000); // Ensure the notification closes after the animation
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed bottom-2 right-2 max-w-sm p-4 ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            <div className="flex items-center">
                {type === 'success' ? <MdCheckCircle className="text-green-200 mr-2" size="24" /> : <MdError className="text-red-200 mr-2" size="24" />}
                <p className="flex-grow font-semibold text-sm">{message}</p>
                <button onClick={onClose} className="ml-4 rounded-md p-1 focus:outline-none" aria-label="Close">
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <animated.div className="mt-2 bg-gray-200 h-1" style={{ width }}></animated.div>
        </div>
    );
};

export default NotificationBar;