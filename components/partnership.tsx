"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


type PartnershipProps = {
    data: {
        img_parthership: string;
    }[];
};

export default function Partnership ({ data }: PartnershipProps) {
    const scrollLeft = (): void => {
        const contentElement: HTMLElement | null = document.getElementById("content");
            if (contentElement) {
            contentElement.scrollLeft -= 400;
            console.log("success", contentElement)
            }
        };
        
    const scrollRight = (): void => {
        const contentElement: HTMLElement | null = document.getElementById("content");
        if (contentElement) {
        contentElement.scrollLeft += 400;
        }
    };

    return(
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div className="px-10 py-2 lg:px-24" id="partnership">
                <h1 className="lg:text-3xl text-lg font-extrabold mt-7 mb-4 text-center">Our Partnership</h1>
                    <div className='flex flex-wrap justify-center items-center mb-7'>
                        {data.map((item, index) => (
                            <div className="" key={index}>
                                <div className='items-center text-center rounded text-black font-medium lg:m-5 m-2 lg:w-40'>
                                    <img 
                                        src={item.img_parthership}
                                        alt=""
                                        // width={150}
                                        // height={150}
                                        className="mx-auto w-20 h-14 lg:w-40 lg:h-28"
                                        />
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            {/* <div className='w-[100vw]'>
                <div className="relative px-10 py-2 lg:px-24" id="partnership">
                    <h1 className="lg:text-3xl text-lg font-extrabold mt-7 mb-4 text-center">Our Partnership</h1>
                    <div className="absolute hidden left-10 top-32 lg:block">
                        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                        <FiChevronLeft />
                        </button>
                    </div>
                    <div className="absolute hidden right-10 top-32 lg:block">
                        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                            <FiChevronRight />
                        </button>
                    </div>
                    <div id="content" className="p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide mb-7">
                        {data.map((item, index) => (
                            <div className="" key={index}>
                                <div className='items-center text-center rounded text-black font-medium lg:m-5 m-2 lg:w-40'>
                                    <img 
                                        src={item.img_parthership}
                                        alt=""
                                        // width={150}
                                        // height={150}
                                        className="mx-auto w-20 h-14 lg:w-40 lg:h-28"
                                        />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </motion.div>
    );
}
