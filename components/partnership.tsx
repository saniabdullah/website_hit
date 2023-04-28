"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";


type PartnershipProps = {
    data: {
        img_parthership: string;
    }[];
};

export default function Partnership ({ data }: PartnershipProps) {

    return(
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div className="px-10 py-2 lg:px-24" id="partnership">
                <h1 className="lg:text-3xl text-lg font-bold mt-7 mb-4 text-center">OUR PARTNERSHIP</h1>
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
        </motion.div>
    );
}
