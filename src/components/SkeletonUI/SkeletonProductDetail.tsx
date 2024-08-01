"use client";
import React from "react";

const SkeletonProductDetail = () => {
    return (
        <div className="flex-grow">
            <div className="bg-white">
                <div className="pt-6">
                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg bg-gray-200 animate-pulse"></div>
                    </div>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <div className="h-10 bg-gray-200 rounded w-1/4 animate-pulse mb-6"></div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((index) => (
                                            <div
                                                key={index}
                                                className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-1"
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse ml-3"></div>
                                </div>
                            </div>

                            <form className="mt-10">
                                {/* Colors */}
                                <div>
                                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse mb-4"></div>
                                    <div className="flex items-center space-x-3">
                                        {[0, 1, 2].map((index) => (
                                            <div
                                                key={index}
                                                className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse mb-4"></div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {[0, 1, 2, 3].map((index) => (
                                            <div
                                                key={index}
                                                className="h-10 bg-gray-200 rounded animate-pulse"
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-10 h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse mb-6"></div>
                                <div className="space-y-6">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse mb-4"></div>
                                <ul
                                    role="list"
                                    className="list-disc space-y-2 pl-4 text-sm"
                                >
                                    {[0, 1, 2].map((index) => (
                                        <li
                                            key={index}
                                            className="h-4 bg-gray-200 rounded animate-pulse"
                                        ></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10">
                                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse mb-4"></div>
                                <div className="space-y-6">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProductDetail;
