"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

const ProfilePage = () => {
    const [user, setUser]: any = useState([]);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        setUser(res.data.data);
    };

    return (
        <>
            <Header />
            <div className="flex-grow">
                <div className="flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-2/4 mt-16">
                        <div className="flex flex-col items-center">
                            <Image
                                src="http://localhost:3000/images/default-user.png"
                                alt="Profile Picture"
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                            <h1 className="text-2xl font-semibold mt-4">
                                {user.username}
                            </h1>
                            <p className="text-gray-600">Software Developer</p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold">About Me</h2>
                            <p className="text-gray-600 mt-2">
                                I&apos;m a software developer with a passion for
                                building amazing applications. I love working
                                with modern web technologies and always strive
                                to improve my skills.
                            </p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold">Contact</h2>
                            <p className="text-gray-600 mt-2">
                                Email: {user.email}
                            </p>
                            <p className="text-gray-600">
                                Phone: (123) 456-7890
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
