"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import SkeletonProfile from "@/components/SkeletonUI/SkeletonProfile";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
    const [user, setUser]: any = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getUserDetails();
        }, 3000);
    }, []);

    const getUserDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/users/me");
            setUser(response.data.data);
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            {loading ? (
                <SkeletonProfile />
            ) : (
                <div className="flex-grow">
                    <div className="flex items-center justify-center py-2 px-4">
                        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mt-8 sm:mt-12 md:mt-16">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/images/default-user.png"
                                    alt="Profile Picture"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                                <h1 className="text-xl sm:text-2xl font-semibold mt-4">
                                    {user.username}
                                </h1>
                                <p className="text-gray-600">
                                    Software Developer
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-6">
                                <h2 className="text-lg sm:text-xl font-semibold">
                                    About Me
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    I&apos;m a software developer with a passion
                                    for building amazing applications. I love
                                    working with modern web technologies and
                                    always strive to improve my skills.
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-6">
                                <h2 className="text-lg sm:text-xl font-semibold">
                                    Contact
                                </h2>
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
            )}
            <Footer />
        </>
    );
};

export default ProfilePage;
