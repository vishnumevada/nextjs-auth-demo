"use client";
import React from "react";

const SkeletonProductList = () => {
    const skeletonArray = Array(8).fill(0);

    return (
        <div className="flex-grow">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {skeletonArray.map((_, index) => (
                            <div
                                key={index}
                                className="group relative animate-pulse"
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80"></div>
                                <div className="mt-4 flex justify-between">
                                    <div className="w-full">
                                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                    </div>
                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProductList;
