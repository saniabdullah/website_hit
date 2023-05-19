
import Image from 'next/image'
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

import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

import { getCarouselData } from '@/sanity-utils'

const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})


const carousel_data = [
  {imgurl: "./images/image1.png", title: "Make IT Simple", desc: "End to end solution for digitizing business processes easily"},
  {imgurl: "./images/image2.png", title: "Software Development", desc: "We are proud of our experience on custom software development for various industries, and our clients mainly from mining industries in Indonesia."},
  {imgurl: "./images/image3.png", title: "IT Infrastructure", desc: "More than 10 years of experience managing infrastructure projects: internet network, server, CCTV"},
];

const service_data =[
  {img_url: "./images/erp_solutions.png", title: "Erp Solutions", desc: "Providing a variety of ERP solutions based on your needs."},
  {img_url: "./images/it_consulting.png", title: "It Consulting", desc: "We provide the best advice to build your technology"},
  {img_url: "./images/data_analisys.png", title: "Data Analytic", desc: "Business platform Intelligence to present dashboards and reports automatically"},
  {img_url: "./images/software_dev.png", title: "Software Development", desc: "Experienced in designing and developing customized applications and mobile applications"}
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


const partnership_data = [
  {img_parthership: "./images/sap.png"},
  {img_parthership: "./images/odoo.png"},
  {img_parthership: "./images/epicor.png"},
  {img_parthership: "./images/kissflow.png"},
  {img_parthership: "./images/micro.png"},
  {img_parthership: "./images/huawei.png"},
  {img_parthership: "./images/cloud.png"},
];


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
  {imgurl: "./images/photo_1.webp"},
  {imgurl: "./images/photo_2.webp"},
  {imgurl: "./images/photo_3.webp"},
]

const query_carousel = groq`
  *[_type == "carousel"] {
    title,
    desc,
    "imgurl": image.asset->url
  }
`

const query_services = groq`
  *[_type == "services"] {
    title,
    desc,
    "img_url": image.asset->url
  }
`

const query_client = groq`
  *[_type == "clients"] {
    "img_client": image.asset->url
  }
`

const query_partnership = groq`
  *[_type == "partnership"] {
    "img_parthership": image.asset->url
  }
`

const query_product = groq`
  *[_type == "product"] {
    title,
    desc,
    sub_title,
    "imgurl": image.asset->url
  }
`

const query_partner = groq`
  *[_type == "partner"] {
    desc,
    "img_url": image.asset->url
  }
`

const query_gallery = groq`
  *[_type == "gallery"] {
    "imgurl": image.asset->url
  }
`

export default async function Home() {
  const carousel = await client.fetch(query_carousel);
  const services = await client.fetch(query_services);
  const clients = await client.fetch(query_client);
  const partnership = await client.fetch(query_partnership);
  const product = await client.fetch(query_product);
  const partner = await client.fetch(query_partner);
  const gallery = await client.fetch(query_gallery);

  const carousel2 = await getCarouselData();
  console.log('carousel', carousel);
  console.log('carousel2', carousel2);


  return (
    <main className={`flex min-h-screen flex-col items-center justify-between text-[#204E62] ${font.className}`}>
        <Navbar />
        <Carousel data={carousel}/>
        <Service data={services}/>
        <Client data={clients}/>
        <Partnership data={partnership}/>
        <Industries />
        <Product data={product}/>
        <Partners data={partner}/>
        <Gallery data={gallery}/>
        <Contact />
        <Footer />
    </main>
  )
}
