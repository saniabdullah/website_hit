"use client"
import Image from "next/image";
import { motion } from 'framer-motion';


type ClientProps = {
    data: {
        img_client: string;
    }[];
};


export default function Client ({data} : ClientProps) {

    return(
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div className="">
                <div className="px-10 lg:px-24 bg-neutral-100" id="#client">
                    <h1 className="lg:text-3xl text-xl font-bold my-10 text-center pt-10">OUR CLIENT</h1>
                    <div className='flex flex-wrap justify-center items-center mb-10 pb-10'>
                        {data.map((item, index) => (
                            <div className="" key={index}>
                                <div className='bg-white border border-gray-400 py-2 px-4 rounded text-black font-medium lg:m-5 m-2 lg:w-40'>
                                <Image 
                                    src={item.img_client}
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
            </div>
        </motion.div>
    );
}
