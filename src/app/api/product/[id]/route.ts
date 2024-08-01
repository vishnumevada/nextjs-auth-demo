import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/productModel";
import { connect } from "@/dbConfig/dbConfig";
import { useParams } from "next/navigation";

connect();

export async function GET(request: NextRequest) {
    try {
        // Extracting the product ID from the request URL
        const { pathname } = new URL(request.url);
        const productId = pathname.split("/")[3];

        if (!productId) {
            return NextResponse.json({
                message: "Product ID is required",
                status: 400,
            });
        }

        // Finding the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            return NextResponse.json({
                message: "Product not found",
                status: 404,
            });
        }

        return NextResponse.json({
            message: "Product fetched successfully",
            success: true,
            data: product,
            status: 200,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
