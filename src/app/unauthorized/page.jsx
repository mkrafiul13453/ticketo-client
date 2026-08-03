"use client";

import Link from "next/link";
import {
    FaShieldAlt,
    FaArrowLeft,
    FaHome,
} from "react-icons/fa";

export default function UnauthorizedPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-pink-200 text-center">
                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-100">
                    <FaShieldAlt className="text-5xl text-pink-600" />
                </div>

                {/* Title */}
                <h1 className="mt-6 text-3xl font-bold text-gray-900">
                    Access Denied
                </h1>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                    Sorry! You do not have permission to access this page.
                    Please sign in with the appropriate account or contact the administrator.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-pink-600 px-5 py-3 text-white font-semibold transition-all duration-300 hover:bg-pink-700 hover:shadow-lg"
                    >
                        <FaHome />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-pink-300 bg-white px-5 py-3 text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-100"
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>
                </div>
            </div>
        </main>
    );
}