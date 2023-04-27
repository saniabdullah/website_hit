"use client"

import { motion } from 'framer-motion';

type PartnerProps = {
    data: {
        img_url : string;
        desc: string;
    }[];
}

export default function Partners ( {data} : PartnerProps ) {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div className="px-10 lg:px-24 bg-neutral-100 w-full my-4" id="">
                <div className='flex flex-wrap justify-center items-center mb-10 pb-10'>
                    {data.map((item, index) => (
                        <div key={index} className="md:flex-col md:w-1/2 lg:w-1/3 py-4">
                            <img 
                                src={item.img_url}
                                alt=""
                                width={75}
                                height={50}
                                className="mx-auto py-3 w-2/3 md:w-40"
                            />
                            <div className="lg:w-full">
                                <p className="text-center text-md lg:text-md mx-5">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}