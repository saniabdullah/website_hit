"use client"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Image from "next/image";
import { motion } from 'framer-motion';

export default function Industries () {
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

    return (
        <div className="w-full lg:px-20 px-4 py-2 bg-neutral-100">
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.6 }}
                className=""
            >
                <h1 className="lg:text-3xl text-xl font-extrabold py-2 mt-4 text-center">Industies</h1>
                <p className="lg:text-lg text-md text-center">HIT Digital indonesia provides comprehensive services in various industries</p>
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-4 p-5 ">
                {/* bg-white py-2 rounded-md shadow-md */}
                    <div>
                        <div className="flex justify-center lg:h-[200px] py-2 my-2 md:m-2">
                            <div className="w-2/3">
                                <p className="text-end mt-4 lg:text-lg text-sm font-extrabold mx-5">Mining Industry</p>
                                <p className="text-end text-sm lg:text-md mx-5">We are have strong experience in mining industry. Development of extend custom system based on mining&rsquo;s best practice.</p>
                            </div>
                            <div className="w-1/2 text-center">
                                <img 
                                    src="./images/mining.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover p-2"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center lg:h-[200px] py-2 my-2 md:m-2">
                            <div className="w-2/3">
                                <p className="text-end mt-4 lg:text-lg text-sm font-extrabold mx-5">Manufacturing Industry</p>
                                <p className="text-end text-sm lg:text-md mx-5">We provide the best solutions in manufacturing industry, complete with custom expertise based on your needs.</p>
                            </div>
                            <div className="w-1/2 text-center">
                                <img 
                                    src="./images/manufacturing.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover p-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center hidden lg:block">
                        <img 
                            src="./images/img_center_industri.png"
                            alt=""
                            width={150}
                            height={150}
                            className="h-full w-full object-cover "
                        />
                    </div>
                    <div>
                        <div className="flex justify-center lg:h-[200px] py-2 my-2 md:m-2">
                            <div className="w-1/2 text-center">
                                <img 
                                    src="./images/shipping.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover p-2"
                                />
                            </div>
                            <div className="w-2/3">
                                <p className="text-start mt-4 lg:text-lg text-sm font-extrabold mx-5">Shipping Industry</p>
                                <p className="text-start text-sm lg:text-md mx-5">Integrated shipping ERP, scheduling and ship tracking system.</p>
                            </div>
                        </div>
                        <div className="flex justify-center lg:h-[200px] py-2 my-2 md:m-2">
                            <div className="w-1/2 text-center">
                                <img 
                                    src="./images/palm.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover p-2"
                                />
                            </div>
                            <div className="w-2/3">
                                <p className="text-start mt-4 lg:text-lg text-sm font-extrabold mx-5">Palm Oil Industry</p>
                                <p className="text-start text-sm lg:text-md mx-5">Palm oil vertical and horizontal solutions including e-Bkm and executive information dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>




        // <div className="w-[100vw] bg-neutral-100 lg:px-20 px-4 py-2 shadow-md md:h-[300px]">
        //     <motion.div
        //         whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        //         transition={{ duration: 0.6 }}
        //     >
        //         <div className="flex mb-4">
        //             <div className="w-1/3 text-center items-center mx-5">
        //                 <h1 className="lg:text-3xl text-xl font-extrabold py-2 mt-4 text-center">Industies</h1>
        //                 <p className="lg:text-lg text-md text-center">HIT Digital indonesia provides comprehensive services in various industries</p>
        //             </div>
        //                 <div className="App bg-gray-100 w-[700px]">
        //                 <div className="relative">
        //                     <div className="text-center py-4  text-xl font-bold"></div>
        //                     <div className="absolute left-0 top-0 ">
        //                         <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
        //                         <FiChevronLeft />
        //                         </button>
        //                     </div>
        //                     <div className="absolute right-0 top-0 ">
        //                         <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
        //                             <FiChevronRight />
        //                         </button>
        //                     </div>
        //                     <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
        //                         <div className="mx-2">
        //                             <div className="flex justify-center w-[500px] bg-white rounded-md shadow-md hover:scale-105">
        //                                 <div className="w-2/3">
        //                                     <p className="text-end mt-4 lg:text-lg text-sm font-extrabold mx-5">Mining Industry</p>
        //                                     <p className="text-end text-sm lg:text-md mx-5">We are have strong experience in mining industry. Development of extend custom system based on mining&rsquo;s best practice.</p>
        //                                 </div>
        //                                 <div className="w-1/2 text-center">
        //                                     <img 
        //                                         src="./images/mining.png"
        //                                         alt=""
        //                                         width={100}
        //                                         height={100}
        //                                         className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover"
        //                                     />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="mx-2">
        //                             <div className="flex justify-center w-[500px] bg-white rounded-md shadow-md hover:scale-105">
        //                                 <div className="w-2/3">
        //                                     <p className="text-end mt-4 lg:text-lg text-sm font-extrabold mx-5">Mining Industry</p>
        //                                     <p className="text-end text-sm lg:text-md mx-5">We are have strong experience in mining industry. Development of extend custom system based on mining&rsquo;s best practice.</p>
        //                                 </div>
        //                                 <div className="w-1/2 text-center">
        //                                     <img 
        //                                         src="./images/mining.png"
        //                                         alt=""
        //                                         width={100}
        //                                         height={100}
        //                                         className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover"
        //                                     />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="mx-2">
        //                             <div className="flex justify-center w-[500px] bg-white rounded-md shadow-md hover:scale-105">
        //                                 <div className="w-2/3">
        //                                     <p className="text-end mt-4 lg:text-lg text-sm font-extrabold mx-5">Mining Industry</p>
        //                                     <p className="text-end text-sm lg:text-md mx-5">We are have strong experience in mining industry. Development of extend custom system based on mining&rsquo;s best practice.</p>
        //                                 </div>
        //                                 <div className="w-1/2 text-center">
        //                                     <img 
        //                                         src="./images/mining.png"
        //                                         alt=""
        //                                         width={100}
        //                                         height={100}
        //                                         className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover"
        //                                     />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="mx-2">
        //                             <div className="flex justify-center w-[500px] bg-white rounded-md shadow-md hover:scale-105">
        //                                 <div className="w-2/3">
        //                                     <p className="text-end mt-4 lg:text-lg text-sm font-extrabold mx-5">Mining Industry</p>
        //                                     <p className="text-end text-sm lg:text-md mx-5">We are have strong experience in mining industry. Development of extend custom system based on mining&rsquo;s best practice.</p>
        //                                 </div>
        //                                 <div className="w-1/2 text-center">
        //                                     <img 
        //                                         src="./images/mining.png"
        //                                         alt=""
        //                                         width={100}
        //                                         height={100}
        //                                         className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover"
        //                                     />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 </div>
        //         </div>
        //     </motion.div>
        // </div>
    );
}