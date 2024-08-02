"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignupPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response: any = await axios.post("/api/users/signup", user);
            if (response.data.success) {
                router.push("/login");
            } else {
                console.log("response.error", response.data.error);

                toast.error(response.data.error);
                setLoading(false);
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
            <div className="container flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 sm:p-10 bg-slate-500 rounded-lg">
                <h1 className="text-center mb-2">Signup Here</h1>
                <hr />
                <label htmlFor="username" className="my-2">
                    Username
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                    }
                    placeholder="username"
                />
                <label htmlFor="email" className="my-2">
                    Email
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    placeholder="email"
                />
                <label htmlFor="password" className="my-2">
                    Password
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    placeholder="password"
                />
                <button
                    onClick={onSignup}
                    disabled={buttonDisabled}
                    className="p-2 my-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                >
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="w-5 h-5 border-4 border-t-4 border-white border-opacity-50 border-t-indigo-600 rounded-full animate-spin"></div>
                            <span className="ml-2">Loading...</span>
                        </div>
                    ) : (
                        "Signup"
                    )}
                </button>
                <Link href="/login" className="text-center">
                    Already have an account? Login here!
                </Link>
            </div>
        </div>
    );
};

export default SignupPage;
