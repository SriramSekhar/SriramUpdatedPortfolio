import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import { MdSend } from 'react-icons/md';
import DisplayLottie from "../Lottie/DisplayLottie";
import Shape from "../Lottie/Shape.json";
import NotificationBar from "./NotificationBar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// EmailJS Config
const serviceID = 'service_n0kd2cf';
const templateID = 'template_x3x854r';
const publicKey = 'jaFsALq06iHH2biem';  // This is your Public Key

const Contact = () => {
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [isEmailSent, setIsEmailSent] = useState('');
    const [notification, setNotification] = useState({ message: '', type: '' });

    // ✅ Initialize EmailJS once
    useEffect(() => {
        emailjs.init(publicKey);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        const isNameValid = !!name;
        const isEmailValid = !!email;
        const isMessageValid = !!message;

        setNameValid(isNameValid);
        setEmailValid(isEmailValid);
        setMessageValid(isMessageValid);

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            setNotification({ message: 'Please fill out all the fields', type: 'error' });
            setTimeout(() => {
                setNameValid(true);
                setEmailValid(true);
                setMessageValid(true);
                setNotification({ message: '', type: '' });
            }, 3000);
            return;
        }

        // Set the full message into form before sending
        e.target.message.value = `${name} with email ${email}. ${message}`;

        emailjs.sendForm(serviceID, templateID, e.target)
            .then(() => {
                setIsEmailSent('Email sent successfully');
                setNotification({ message: 'Email sent successfully', type: 'success' });
                setTimeout(() => {
                    setIsEmailSent('');
                    setNotification({ message: '', type: '' });
                }, 5000);
            })
            .catch(() => {
                setIsEmailSent('Email not sent');
                setNotification({ message: 'Email not sent', type: 'error' });
                setTimeout(() => {
                    setIsEmailSent('');
                    setNotification({ message: '', type: '' });
                }, 5000);
            });

        e.target.reset();
    };

    return (
        <div name="contact" className="relative min-h-[800px] bg-[#0a192f] flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-5xl flex flex-col md:flex-row md:gap-10 items-start">

                {/* Left Section */}
                <div className="z-10 md:w-1/2 w-full text-green-400 mb-10 md:mb-0">
                    <h1 className="text-6xl font-bold inline border-b-4 border-pink-300 text-[#416D19] mb-6">Contact's</h1>
                    <p className="text-gray-300 text-lg mb-6 mt-8 font-bold">
                        I’d love to hear from you.<br />
                        Whether you have a question or just want to say hi,<br />
                        feel free to drop a message!
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                        <FaPhoneAlt className="text-teal-400" />
                        <span className="text-lg">+91 7847996036</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <FaEnvelope className="text-teal-400" />
                        <span className="text-lg">sriramsekhar63@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <FaMapMarkerAlt className="text-teal-400" />
                        <span className="text-lg">Bhubaneswar, Odisha, India</span>
                    </div>
                </div>

                {/* Right Section: Form */}
                <form onSubmit={sendEmail} className="z-10 w-full md:w-1/2 max-w-lg">
                    <div className="flex flex-col space-y-10">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-300 text-xl font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                className={`w-full bg-gray-200 text-gray-700 border ${!nameValid ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 focus:outline-none focus:bg-white`}
                                id="name" type="text" placeholder="Your name" name="name" />
                            {!nameValid && <p className="text-red-500 text-xs italic mt-1">Please fill out this field.</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-300 text-xl font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                className={`w-full bg-gray-200 text-gray-700 border ${!emailValid ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 focus:outline-none focus:bg-white`}
                                id="email" type="email" placeholder="xyz@gmail.com" name="email" />
                            {!emailValid && <p className="text-red-500 text-xs italic mt-1">Please fill out this field.</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-gray-300 text-xl font-bold mb-2" htmlFor="message">Message</label>
                            <textarea
                                style={{ resize: 'vertical', maxHeight: '250px', minHeight: '80px' }}
                                className={`w-full bg-gray-200 text-gray-700 border ${!messageValid ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 focus:outline-none focus:bg-white`}
                                id="message" placeholder="Your message..." name="message" />
                            {!messageValid && <p className="text-red-500 text-xs italic mt-1">Please fill out this field.</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button className="w-40 h-14 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full flex items-center justify-center" type="submit">
                                <MdSend className="mr-2" /> Send
                            </button>
                        </div>

                        {/* Success/Error Message */}
                        {isEmailSent && (
                            <p className={`text-center text-${isEmailSent === 'Email sent successfully' ? 'green' : 'red'}-500`}>
                                {isEmailSent}
                            </p>
                        )}

                        {/* Notification */}
                        {notification.message && (
                            <NotificationBar
                                message={notification.message}
                                type={notification.type}
                                onClose={() => setNotification({ message: '', type: '' })}
                            />
                        )}
                    </div>
                </form>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 flex justify-center items-center opacity-60 pointer-events-none z-0">
                <DisplayLottie animationData={Shape} />
            </div>
        </div>
    );
};

export default Contact;
