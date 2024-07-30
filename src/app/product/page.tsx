"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Products from "@/components/Products/Products";

const ProductPage = () => {
    return (
        <>
            <Header />
            <div className="flex-grow">
                <Products />
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
