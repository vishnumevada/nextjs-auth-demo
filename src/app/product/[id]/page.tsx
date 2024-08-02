"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import SkeletonProductDetail from "@/components/SkeletonUI/SkeletonProductDetail";
import Image from "next/image";

const product = {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
        { id: 1, name: "Men", href: "#" },
        { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
            alt: "Model wearing plain black basic tee.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
            alt: "Model wearing plain gray basic tee.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
            alt: "Model wearing plain white basic tee.",
        },
    ],
    colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
        { name: "XXS", inStock: false },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "2XL", inStock: true },
        { name: "3XL", inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
    const [productDetail, setProductDetail] = useState<any>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProduct();
        return () => {};
    }, []);

    const getProduct = async () => {
        try {
            setLoading(true);
            const response: any = await axios.get(`/api/product/${id}`);
            if (response.data.success) {
                setProductDetail(response.data.data);
            }
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
                <SkeletonProductDetail />
            ) : (
                <div className="flex-grow">
                    <div className="bg-white">
                        <div className="pt-6">
                            {/* Image gallery */}
                            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <Image
                                        src={productDetail.imageSrc}
                                        alt={productDetail.imageAlt}
                                        // width={100}
                                        // height={100}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Product info */}
                            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                        {productDetail.name}
                                    </h1>
                                </div>

                                {/* Options */}
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">
                                        Product information
                                    </h2>
                                    <p className="text-3xl tracking-tight text-gray-900">
                                        {productDetail.price}
                                    </p>

                                    {/* Reviews */}
                                    <div className="mt-6">
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                {[0, 1, 2, 3, 4].map(
                                                    (rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                reviews.average >
                                                                    rating
                                                                    ? "text-gray-900"
                                                                    : "text-gray-200",
                                                                "h-5 w-5 flex-shrink-0"
                                                            )}
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <p className="sr-only">
                                                {reviews.average} out of 5 stars
                                            </p>
                                            <a
                                                href={reviews.href}
                                                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                {reviews.totalCount} reviews
                                            </a>
                                        </div>
                                    </div>

                                    <form className="mt-10">
                                        {/* Colors */}
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">
                                                Color
                                            </h3>

                                            <fieldset
                                                aria-label="Choose a color"
                                                className="mt-4"
                                            >
                                                <RadioGroup
                                                    value={selectedColor}
                                                    onChange={setSelectedColor}
                                                    className="flex items-center space-x-3"
                                                >
                                                    {product.colors.map(
                                                        (color) => (
                                                            <Radio
                                                                key={color.name}
                                                                value={color}
                                                                aria-label={
                                                                    color.name
                                                                }
                                                                className={classNames(
                                                                    color.selectedClass,
                                                                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                                                                )}
                                                            >
                                                                <span
                                                                    aria-hidden="true"
                                                                    className={classNames(
                                                                        color.class,
                                                                        "h-8 w-8 rounded-full border border-black border-opacity-10"
                                                                    )}
                                                                />
                                                            </Radio>
                                                        )
                                                    )}
                                                </RadioGroup>
                                            </fieldset>
                                        </div>

                                        {/* Sizes */}
                                        <div className="mt-10">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-medium text-gray-900">
                                                    Size
                                                </h3>
                                                <a
                                                    href="#"
                                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Size guide
                                                </a>
                                            </div>

                                            <fieldset
                                                aria-label="Choose a size"
                                                className="mt-4"
                                            >
                                                <RadioGroup
                                                    value={selectedSize}
                                                    onChange={setSelectedSize}
                                                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                                >
                                                    {product.sizes.map(
                                                        (size) => (
                                                            <Radio
                                                                key={size.name}
                                                                value={size}
                                                                disabled={
                                                                    !size.inStock
                                                                }
                                                                className={classNames(
                                                                    size.inStock
                                                                        ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                                                        : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                                    "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                                                                )}
                                                            >
                                                                <span>
                                                                    {size.name}
                                                                </span>
                                                                {size.inStock ? (
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                                    />
                                                                ) : (
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                    >
                                                                        <svg
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 100 100"
                                                                            preserveAspectRatio="none"
                                                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        >
                                                                            <line
                                                                                x1={
                                                                                    0
                                                                                }
                                                                                x2={
                                                                                    100
                                                                                }
                                                                                y1={
                                                                                    100
                                                                                }
                                                                                y2={
                                                                                    0
                                                                                }
                                                                                vectorEffect="non-scaling-stroke"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </Radio>
                                                        )
                                                    )}
                                                </RadioGroup>
                                            </fieldset>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled
                                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Add to bag
                                        </button>
                                    </form>
                                </div>

                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only">Description</h3>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Highlights
                                        </h3>

                                        <div className="mt-4">
                                            <ul
                                                role="list"
                                                className="list-disc space-y-2 pl-4 text-sm"
                                            >
                                                {product.highlights.map(
                                                    (highlight) => (
                                                        <li
                                                            key={highlight}
                                                            className="text-gray-400"
                                                        >
                                                            <span className="text-gray-600">
                                                                {highlight}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h2 className="text-sm font-medium text-gray-900">
                                            Details
                                        </h2>

                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">
                                                {product.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default ProductDetail;
