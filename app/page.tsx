import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '@/components/carousel'
import Navbar from '@/components/navbar'
import Partnership from '@/components/partnership'
import Client from '@/components/client'
import Service from '@/components/service'
import Product from '@/components/product'
import Footer from '@/components/footer'
import Partners from '@/components/partners'
import Contact from '@/components/contact'
import Industries from '@/components/industries'
import Gallery from '@/components/gallery'

import { Source_Sans_Pro } from 'next/font/google'
import { motion } from 'framer-motion';

const font = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '400'
})

const inter = Inter({ subsets: ['latin'] })

const carousel_data = [
  {imgurl: "./images/image1.png", title: "Make IT Simple", desc: "End to end solution for digitizing business processes easily"},
  {imgurl: "./images/image2.png", title: "Software Development", desc: "We are proud of our experience on custom software development for various industries, and our clients mainly from mining industries in Indonesia."},
  {imgurl: "./images/image3.png", title: "IT Infrastructure", desc: "More than 10 years of experience managing infrastructure projects: internet network, server, CCTV"},
];

const partnership_data = [
  {img_parthership: "./images/sap.png"},
  {img_parthership: "./images/odoo.png"},
  {img_parthership: "./images/epicor.png"},
  {img_parthership: "./images/kissflow.png"},
  {img_parthership: "./images/micro.png"},
  {img_parthership: "./images/huawei.png"},
  {img_parthership: "./images/cloud.png"},
];

const client_data = [
  {img_client:  "./images/hg.png"},
  {img_client:  "./images/bre.png"},
  {img_client:  "./images/hrs_logo.png"},
  {img_client:  "./images/tpe-removebg.png"},
  {img_client:  "./images/pasar_jaya-removebg.png"},
  {img_client:  "./images/ruang_guru.png"},
  {img_client:  "./images/t4t.png"},
  {img_client:  "./images/ktc.png"},
  {img_client:  "./images/prager.png"},
];

const service_data =[
  {img_url: "./images/it_consulting_red.png", title: "IT CONSULTING", desc: "We provide the best advice to build your technology"},
  {img_url: "./images/erp_solutions_red.png", title: "ERP SOLUTIONS", desc: "Providing a variety of ERP solutions based on your needs."},
  {img_url: "./images/data_analisys_red.png", title: "DATA ANALYTICS", desc: "Business platform Intelligence to present dashboards and reports automatically"},
  {img_url: "./images/software_dev_red.png", title: "SOFTWARE DEVELOPMENT", desc: "Experienced in designing custom website and mobile applications"}
]

const product_data = [
  {imgurl: "./images/Weighbridge.png", title: "Weighbridge", sub_title: 'Our Own Product', desc: "Integrated Application to ERP System. Simplify the process of tracking data by integrating weighing equipment in the field and ERP system. Now, real time data can be accesed in the back office."},
  {imgurl: "./images/cms.png", title: "Coal Monitoring System", sub_title: 'Our Own Product',  desc: "CMS helps you to develop & impelement operational target, executing cost reduction and seamless operational process. Comprehensive real time monitoring for a better decision, quickly and precisely."},
  {imgurl: "./images/e_bkm.png", title: "E-BKM", sub_title: 'Our Own Product', desc: "Electronic Buku Kerja Mandor (E-BKM) is an application to record the work process and work results of the palm oil industry. Track & trace the activities of field workers starting activities from planting, seeding, harvesting, and distributing palm fruit."},
  {imgurl: "./images/attendance.png", title: "HG Attendance", sub_title: 'Our Own Product', desc: "An mobile attendance to record flexible employee presence. Verified presence data with GPS tracking and face recognition"},
  {imgurl: "./images/harp.png", title: "HARP", sub_title: 'Our Own Product', desc: "Hasnur Agriculture Resources Planning (HARP) is an application for recording field activities that produce output payroll calculations"},
  {imgurl: "./images/eis.png", title: "Executive Information System", sub_title: 'Our Own Product', desc: "Executive Information System (EIS) is an rapplication to produce executive reports on agribusiness activities."},
];

const partners_data =[
  {img_url: "./images/sap_partner.png", desc: "SAP is the leading ERP among multinationals. SAP as a single solution accommodating end to end solutions. Starting from finance, HR, Operations, Supply Chain, and also Marketing."},
  {img_url: "./images/odoo_partner.png", desc: "Odoo is a new coomer ERP with a fresh and user fiendly look. Odoo is suitable to be implemented from MSME businesses to multinational businesses."},
  {img_url: "./images/epicor_partner.png", desc: "Epicor is an ERP system for automating & integrating workflows with strong points in Manufacturing. Epicor helps companies to calculate daily production costs in every workers. So that effectiveness can be done."},
  {img_url: "./images/micro_partner.png", desc: "Business platform Intelligence to present dashboards and reports automatically"},
  {img_url: "./images/kissflow_partner.png", desc: "Specialize in providing application low code no code which can help you to automate operation"}
]

const gallery_data =[
  {imgurl: "./images/photo_1.png"},
  {imgurl: "./images/photo_2.png"},
  {imgurl: "./images/photo_3.png"},
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-gray-600 font-sans">
      <div className={font.className}>
        <Carousel data={carousel_data}/>
        <Partnership data={partnership_data}/>
        <Client data={client_data}/>
        <Service data={service_data}/>
        <Industries />
        <Product data={product_data}/>
        <Partners data={partners_data}/>
        <Gallery data={gallery_data}/>
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
