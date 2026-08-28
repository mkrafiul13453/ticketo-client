

"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaBookOpen, FaRocket, FaTruck } from "react-icons/fa";
import { motion } from "motion/react"

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,var(--tw-gradient-stops))] from-amber-500/15 via-slate-950 to-slate-950" />
            <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-rose-500/10 blur-[120px]" />

            {/* Decorative book-themed shapes */}
            <div className="absolute left-8 top-24 -z-10 h-32 w-24 rotate-[-18deg] rounded-md border border-amber-400/20 bg-amber-500/10 shadow-2xl shadow-amber-500/10" />
            <div className="absolute bottom-20 right-10 -z-10 h-36 w-28 rotate-[18deg] rounded-md border border-rose-400/20 bg-rose-500/10 shadow-2xl shadow-rose-500/10" />

            <div className="max-w-5xl text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300"
                >
                    <FaBookOpen /> Your next read is one click away
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl"
                >
                    Books You Love,{" "}
                    <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 bg-clip-text text-transparent">
                        Delivered to Your Door
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl"
                >
                    Discover bestselling novels, timeless classics, study guides, and stories
                    for every reader. Order your favorites and enjoy fast, reliable delivery
                    straight to your doorstep.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link href="/events">
                        <Button
                            className="h-14 w-full bg-gradient-to-r from-amber-500 to-rose-500 px-8 text-md font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-105 hover:shadow-amber-500/40 sm:w-auto"
                            radius="full"
                        >
                            <FaBookOpen className="mr-2" />
                            Browse Books
                        </Button>
                    </Link>

                    <Link href="/events">
                        <Button
                            variant="bordered"
                            className="h-14 w-full border-2 border-white/10 px-8 text-md font-semibold text-white transition-all hover:border-amber-400/30 hover:bg-white/5 sm:w-auto"
                            radius="full"
                        >
                            <FaTruck className="mr-2" />
                            Track Your Delivery
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;