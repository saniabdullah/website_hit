"use client"

import Image from "next/image";
import { motion } from 'framer-motion';

export default function Industries () {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div className="mt-10 w-full bg-neutral-100 lg:px-20 px-4 py-5">
                <h1 className="lg:text-3xl text-xl py-2 font-bold mt-4 text-center">INDUSTRIES</h1>
                <p className="lg:text-lg text-md text-center">HIT Digital indonesia provides comprehensive services in various industries</p>
                <div className="grid-1 grid gap-8 md:grid-cols-3 my-5">
                    <div>
                        <div className="flex justify-center lg:h-[150px]">
                            <div className="w-2/3">
                                <p className="text-end mt-4 lg:text-lg text-sm font-bold mx-5">Mining Industry</p>
                                <p className="text-end text-sm lg:text-md mx-5">We are have strong experience in mining industry. Development of extend custom system based on mining's best practice.</p>
                            </div>
                            <div className="w-1/2 text-center">
                                <Image 
                                    src="/images/mining.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center h-[150px]">
                            <div className="w-2/3">
                                <p className="text-end mt-4 lg:text-lg text-sm font-bold mx-5">Manufacturing Industry</p>
                                <p className="text-end text-sm lg:text-md mx-5">We provide the best solutions in manufacturing industry, complete with custom expertise based on your needs.</p>
                            </div>
                            <div className="w-1/2 text-center">
                                <Image 
                                    src="/images/manufacturing.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <Image 
                            src="/images/img_center_industri.png"
                            alt=""
                            width={150}
                            height={150}
                            className="h-full w-full object-cove hidden lg:block"
                        />
                    </div>
                    <div>
                        <div className="flex justify-center h-[150px]">
                            <div className="w-1/2 text-center">
                                <Image 
                                    src="/images/shipping.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="w-2/3">
                                <p className="text-start mt-4 lg:text-lg text-sm font-bold mx-5">Shipping Industry</p>
                                <p className="text-start text-sm lg:text-md mx-5">Development of custom system website and mobile apps for shipping industry.</p>
                            </div>
                        </div>
                        <div className="flex justify-center h-[150px]">
                            <div className="w-1/2 text-center">
                                <Image 
                                    src="/images/palm.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="w-2/3">
                                <p className="text-start mt-4 lg:text-lg text-sm font-bold mx-5">Palm Oil Industry</p>
                                <p className="text-start text-sm lg:text-md mx-5">Development of custom innovative system for Palm Oil Industry named E-BKM.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}