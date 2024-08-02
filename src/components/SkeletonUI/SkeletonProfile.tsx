"use client";
import React from "react";

const SkeletonProfile = () => {
    return (
        <div className="flex-grow">
            <div className="flex items-center justify-center py-2 px-4">
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mt-8 sm:mt-12 md:mt-16">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="mt-4">
                            <div className="w-2/3 h-4 sm:w-1/2 sm:h-5 md:h-6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-3/4 h-3 sm:w-2/3 sm:h-4 md:h-5 bg-gray-200 rounded mt-2 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-6">
                        <div className="w-1/3 h-4 sm:w-1/4 sm:h-5 md:h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-full h-3 sm:h-4 md:h-5 bg-gray-200 rounded mt-2 animate-pulse"></div>
                        <div className="w-full h-3 sm:h-4 md:h-5 bg-gray-200 rounded mt-2 animate-pulse"></div>
                    </div>
                    <div className="mt-4 sm:mt-6">
                        <div className="w-1/3 h-4 sm:w-1/4 sm:h-5 md:h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-full h-3 sm:h-4 md:h-5 bg-gray-200 rounded mt-2 animate-pulse"></div>
                        <div className="w-full h-3 sm:h-4 md:h-5 bg-gray-200 rounded mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProfile;
