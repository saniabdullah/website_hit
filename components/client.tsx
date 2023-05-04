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
                <div className="lg:px-24mt-10 w-full bg-neutral-100 lg:px-20 px-4 py-2" id="">
                    <h1 className="lg:text-3xl text-xl font-bold mx-auto text-center py-2 mt-7 mb-4">Our Client</h1>
                    <div className='flex flex-wrap justify-center items-center'>
                        {data.map((item, index) => (
                            <div className="" key={index}>
                                <div className='text-black font-medium lg:m-5 m-2 lg:w-50'>
                                <img 
                                    src={item.img_client}
                                    alt=""
                                    className="mx-auto w-20 h-14 lg:w-40 lg:h-28"
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
