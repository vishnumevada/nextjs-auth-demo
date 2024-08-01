"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Switch } from "@headlessui/react";
import { toast } from "react-hot-toast";

const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
            agreed: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required."),
            lastName: Yup.string().required("Last name is required."),
            email: Yup.string()
                .email("Invalid email address.")
                .required("Email is required."),
            phoneNumber: Yup.string().required("Phone number is required."),
            message: Yup.string().required("Message is required."),
            agreed: Yup.bool().oneOf([true], "You must agree to the policies."),
        }),

        onSubmit: (values) => {
            console.log(values);
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                toast.success("Our team will contact you soon.");
                formik.resetForm();
            }, 1000);
        },
    });

    return (
        <>
            <Header />
            <div className="flex-grow">
                <div className="isolate bg-white px-6 py-6 sm:py-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Contact sales
                        </h2>
                        <p className="text-lg leading-8 text-gray-600">
                            Aute magna irure deserunt veniam aliqua magna enim
                            voluptate.
                        </p>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="mx-auto mt-4 max-w-xl sm:mt-4"
                    >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.firstName &&
                                    formik.errors.firstName ? (
                                        <div className="text-red-600 text-sm">
                                            {formik.errors.firstName}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.lastName &&
                                    formik.errors.lastName ? (
                                        <div className="text-red-600 text-sm">
                                            {formik.errors.lastName}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email &&
                                    formik.errors.email ? (
                                        <div className="text-red-600 text-sm">
                                            {formik.errors.email}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Phone number
                                </label>
                                <div className="relative mt-2">
                                    <input
                                        id="phone-number"
                                        name="phoneNumber"
                                        type="number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formik.values.phoneNumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.phoneNumber &&
                                    formik.errors.phoneNumber ? (
                                        <div className="text-red-600 text-sm">
                                            {formik.errors.phoneNumber}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.message &&
                                    formik.errors.message ? (
                                        <div className="text-red-600 text-sm">
                                            {formik.errors.message}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={formik.values.agreed}
                                        onChange={(checked) =>
                                            formik.setFieldValue(
                                                "agreed",
                                                checked
                                            )
                                        }
                                        className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                                    >
                                        <span className="sr-only">
                                            Agree to policies
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                        />
                                    </Switch>
                                </div>
                                <label className="text-sm leading-6 text-gray-600">
                                    By selecting this, you agree to our{" "}
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600"
                                    >
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </label>
                                {formik.touched.agreed &&
                                formik.errors.agreed ? (
                                    <div className="text-red-600 text-sm">
                                        {formik.errors.agreed}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isLoading ? (
                                    <div className="flex justify-center items-center">
                                        <div className="w-5 h-5 border-4 border-t-4 border-white border-opacity-50 border-t-indigo-600 rounded-full animate-spin"></div>
                                        <span className="ml-2">Loading...</span>
                                    </div>
                                ) : (
                                    "Let's talk"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
