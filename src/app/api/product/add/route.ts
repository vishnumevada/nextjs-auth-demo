import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/productModel";

connect();

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const data = [
            {
                id: 1,
                name: "Basic Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
                imageAlt: "Front of men's Basic Tee in black.",
                price: "$35",
                color: "Black",
            },
            {
                id: 2,
                name: "Classic Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
                imageAlt: "Front of men's Classic Tee in white.",
                price: "$25",
                color: "Aspen White",
            },
            {
                id: 3,
                name: "Vintage Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
                imageAlt: "Front of men's Vintage Tee in navy.",
                price: "$30",
                color: "Charcoal",
            },
            {
                id: 4,
                name: "Premium Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
                imageAlt: "Front of men's Premium Tee in grey.",
                price: "$40",
                color: "Iso Dots",
            },
            {
                id: 5,
                name: "Graphic Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
                imageAlt: "Front of men's Graphic Tee in red.",
                price: "$35",
                color: "Red",
            },
            {
                id: 6,
                name: "Striped Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
                imageAlt: "Front of men's Striped Tee in black and white.",
                price: "$28",
                color: "Black and White",
            },
            {
                id: 7,
                name: "Pocket Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
                imageAlt: "Front of men's Pocket Tee in olive.",
                price: "$32",
                color: "Olive",
            },
            {
                id: 8,
                name: "Long Sleeve Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
                imageAlt: "Front of men's Long Sleeve Tee in burgundy.",
                price: "$38",
                color: "Burgundy",
            },
            {
                id: 9,
                name: "Henley Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
                imageAlt: "Front of men's Henley Tee in navy.",
                price: "$42",
                color: "Navy",
            },
            {
                id: 10,
                name: "V-Neck Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
                imageAlt: "Front of men's V-Neck Tee in grey.",
                price: "$34",
                color: "Grey",
            },
            {
                id: 11,
                name: "Muscle Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
                imageAlt: "Front of men's Muscle Tee in black.",
                price: "$29",
                color: "Black",
            },
            {
                id: 12,
                name: "Ringer Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
                imageAlt: "Front of men's Ringer Tee in white and red.",
                price: "$27",
                color: "White and Red",
            },
            {
                id: 13,
                name: "Performance Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
                imageAlt: "Front of men's Performance Tee in blue.",
                price: "$50",
                color: "Blue",
            },
            {
                id: 14,
                name: "Raglan Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
                imageAlt: "Front of men's Raglan Tee in white and blue.",
                price: "$37",
                color: "White and Blue",
            },
            {
                id: 15,
                name: "Thermal Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
                imageAlt: "Front of men's Thermal Tee in black.",
                price: "$45",
                color: "Black",
            },
            {
                id: 16,
                name: "Slub Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
                imageAlt: "Front of men's Slub Tee in green.",
                price: "$33",
                color: "Green",
            },
            {
                id: 17,
                name: "Pocket Long Sleeve Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
                imageAlt: "Front of men's Pocket Long Sleeve Tee in brown.",
                price: "$39",
                color: "Brown",
            },
            {
                id: 18,
                name: "Split Hem Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
                imageAlt: "Front of men's Split Hem Tee in black.",
                price: "$36",
                color: "Black",
            },
            {
                id: 19,
                name: "Tie-Dye Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
                imageAlt: "Front of men's Tie-Dye Tee in rainbow.",
                price: "$35",
                color: "Rainbow",
            },
            {
                id: 20,
                name: "Sleeveless Tee",
                href: "#",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
                imageAlt: "Front of men's Sleeveless Tee in grey.",
                price: "$31",
                color: "Grey",
            },
        ];

        // Validate the data format if needed
        if (
            !Array.isArray(data) ||
            !data.every(
                (item) =>
                    item.id &&
                    item.name &&
                    item.imageSrc &&
                    item.imageAlt &&
                    item.price &&
                    item.color
            )
        ) {
            return NextResponse.json(
                { error: "Invalid data format" },
                { status: 400 }
            );
        }

        // Insert multiple products into the database
        const result = await Product.insertMany(data);

        return NextResponse.json(
            { message: "Products inserted successfully", result },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
