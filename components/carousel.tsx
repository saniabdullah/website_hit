"use client"

import Image from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion';

type CarouselProps = {
    data: {
      imgurl: string;
      title: string;
      desc: string;
    }[];
};
  

export default function Carousel ({ data }: CarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index : any) => {
        setCurrentIndex(index);
    };

    const items = data.map(item => item.imgurl)

    console.log(items);
        
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div>
                {data.length && (
                    <>
                        <div className="pt-24 p-10 lg:p-24">
                            <div className="lg:flex items-center justify-center panjang" id="#home">
                                <div className="lg:w-1/2 lg:pl-10 text-center">
                                    <Image 
                                        src={data[currentIndex].imgurl} 
                                        alt={data[currentIndex].title} 
                                        width={500}
                                        height={500}
                                        className="h-full w-full object-cover lg:object-none lg:h-auto"
                                    />

                                    <button
                                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                        type="button" onClick={() => handleClick(currentIndex === data.length - 1 ? 0 : currentIndex + 1)}>
                                        <span className="inline-block h-8 w-8 dark:grayscale">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6">
                                                <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="lg:w-1/2 lg:pr-10 text-center">
                                    <h1 className="text-3xl font-bold mb-4">{data[currentIndex].title}</h1>
                                    <p className="mb-4">{data[currentIndex].desc}</p>
                                    <button
                                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                        type="button" onClick={() => handleClick(currentIndex === 0 ? data.length - 1 : currentIndex - 1)}>
                                        <span className="inline-block h-8 w-8 dark:grayscale">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6">
                                                <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className="lg:flex text-center">

                                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded lg:m-5 m-2 w-8/12 shadow-2xl">
                                            Free Consultation
                                        </button>
                                        <button className="bg-white border border-blue-400 py-2 px-4 rounded text-black font-medium hover:bg-blue-400 hover:text-white lg:m-5 m-2 w-8/12">Learn More</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )}
                    
            </div>
        </motion.div>
    );
}