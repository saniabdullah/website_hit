"use client"

import { motion } from 'framer-motion';

export default function Contact () {
    return (
        <div className="my-10 w-full lg:px-28 px-6 py-5 lg:h-screen">
            <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
            >
                <h1 className="lg:text-3xl text-xl py-2 font-bold mt-4">Start Your Journey With</h1>
                <h3 className="lg:text-xl text-md py-2 font-bold text-blue-700 mb-5">Hit Digital Indonesia</h3>
                <form>
                    <div className="grid gap-3 grid-cols-3 my-3">
                        <div className="col-span-1">
                            <p className="">Name*</p>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-3 grid-cols-3 my-3">
                        <div className="col-span-1">
                            <p className="">Email Address*</p>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-3 grid-cols-3 my-3">
                        <div className="col-span-1">
                            <p className="">Company Name*</p>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-3 grid-cols-3 my-3">
                        <div className="col-span-1">
                            <p className="">Please Explain Your Need*</p>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
                            </div>
                            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded lg:m-5 m-2 lg:w-1/5 w-2/3 shadow-2xl">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

                <h1 className="flex lg:text-3xl lg:mt-24 text-xl pt-12 font-bold mt-4 justify-between"><span>Consult  your technology needs with us!</span> <span className="bg-yellow-400 m-2 p-2">SCHEDULE A DEMO</span></h1>
                <h3 className="lg:text-xl text-md font-bold mb-5">Make <span className="text-blue-700">IT</span> Simple</h3>
            </motion.div>
        </div>
    );
}