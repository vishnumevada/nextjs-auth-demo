import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });

        // Ensure the cookie is removed
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/", // Ensure the path is correctly set
            domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || undefined, // Set the domain if needed
        });

        // response.cookies.set("token", "", {
        //     httpOnly: true,
        //     expires: new Date(0),
        // });

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
