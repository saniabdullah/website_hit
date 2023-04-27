"use client"

import { motion } from 'framer-motion';
import Image from "next/image";

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
            <div className="px-10 lg:px-24" id="#partnership">
                <h1 className="lg:text-3xl text-lg font-semibold my-4 text-center">OUR PARTNERSHIP</h1>
                    <div className='flex flex-wrap justify-center items-center'>
                        {data.map((item, index) => (
                            <div className="" key={index}>
                                <div className='items-center text-center bg-white border border-gray-400 py-2 px-4 rounded text-black font-medium lg:m-5 m-2 lg:w-40'>
                                    <Image 
                                        src={item.img_parthership}
                                        alt=""
                                        width={75}
                                        height={75}
                                        className="mx-auto"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </motion.div>
    );
}
