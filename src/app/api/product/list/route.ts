import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/productModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
    try {
        const products = await Product.find();
        return NextResponse.json({
            message: "Products fetched successfully",
            success: true,
            data: products,
            status: 200,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
