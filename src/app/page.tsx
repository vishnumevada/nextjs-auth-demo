"use client";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex justify-center h-screen m-auto mx-auto">
            <div className="mt-16">
                <p className="my-10">Home page</p>
                <Link href={"/login"}>
                    <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}
