"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import SkeletonProductList from "@/components/SkeletonUI/SkeletonProductList";
import Image from "next/image";

const Products = () => {
    const [products, setProducts] = useState<any>([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getProductList();
        }, 1000);
        return () => {};
    }, []);

    const getProductList = async () => {
        try {
            setLoading(true);
            const response: any = await axios.get("/api/product/list");
            if (response.data.success) {
                setProducts(response.data.data);
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <SkeletonProductList />
            ) : (
                <div className="flex-grow">
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Customers also purchased
                        </h2> */}

                            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {products.map((product: any) => (
                                    <div
                                        key={product.id}
                                        className="group relative"
                                    >
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <Image
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                width={100}
                                                height={100}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <Link
                                                        href={
                                                            "product/" +
                                                            product._id
                                                        }
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        />
                                                        {product.name}
                                                    </Link>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {product.color}
                                                </p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
