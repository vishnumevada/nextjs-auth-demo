"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupPage = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const initialValues = {
        email: "",
        password: "",
        username: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address.")
            .required("Email is required."),
        password: Yup.string()
            .min(5, "Password must be at least 5 characters.")
            .required("Password is required."),
        username: Yup.string()
            .min(3, "Username must be at least 3 characters.")
            .required("Username is required."),
    });

    const onSignup = async (values: any) => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", values);
            if (response.data.success) {
                router.push("/login");
            } else {
                toast.error(response.data.error);
                setLoading(false);
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
            <div className="container flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 sm:p-10 bg-slate-500 rounded-lg">
                <h1 className="text-center mb-2">Signup Here</h1>
                <hr />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSignup}
                >
                    {({ isValid, dirty }) => (
                        <Form className="flex flex-col">
                            <label htmlFor="username" className="my-2">
                                Username
                            </label>
                            <Field
                                className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black"
                                id="username"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="text-red-500"
                            />

                            <label htmlFor="email" className="my-2">
                                Email
                            </label>
                            <Field
                                className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black"
                                id="email"
                                name="email"
                                type="text"
                                placeholder="email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                            />

                            <label htmlFor="password" className="my-2">
                                Password
                            </label>
                            <Field
                                className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500"
                            />

                            <button
                                type="submit"
                                disabled={loading}
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
                        </Form>
                    )}
                </Formik>
                <Link href="/login" className="text-center">
                    Already have an account? Login here!
                </Link>
            </div>
        </div>
    );
};

export default SignupPage;
