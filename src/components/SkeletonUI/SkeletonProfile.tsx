"use client";
import React from "react";

const SkeletonProfile = () => {
    return (
        <div className="flex-grow">
            <div className="flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-2/4 mt-16">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="mt-4">
                            <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-3/4 h-4 bg-gray-200 rounded mt-2 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded mt-2 animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded mt-2 animate-pulse"></div>
                    </div>
                    <div className="mt-6">
                        <div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded mt-2 animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProfile;
