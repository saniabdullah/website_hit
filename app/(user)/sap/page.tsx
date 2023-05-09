import Footer from "@/components/footer";
import FooterSecond from "@/components/footer_second";
import NavbarSecond from "@/components/navbar_second";
import CarouselSap from "@/components/sap_page";
import SecoundSectionSapPage from "@/components/sap_second_page";
import { Poppins } from 'next/font/google'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

const font = Poppins({
    subsets: ['latin'],
    weight: '400'
});

const carousel_sap_data = [
    {imgurl: "./images/bg_sap.png", title: "SAP 4 HANA", desc: "Enterprise Solution Built on RISE with SAP S/4HANA – Cloud, Public and Private Cloud Edition"}
];
  
const second_section_sap_page_data = [
    {imgurl: "./images/finance.png", title: "Finance"},
    {imgurl: "./images/material_management.png", title: "Material Management"},
    {imgurl: "./images/manufacturing_sap_page.png", title: "Manufacturing"},
    {imgurl: "./images/sales.png", title: "Sales"},
    {imgurl: "./images/hr.png", title: "HR"},
    {imgurl: "./images/procurement.png", title: "Procurement"},
    {imgurl: "./images/supply_chain.png", title: "Supply Chain"}
];

const query_carousel_sap = groq`
  *[_type == "carousel_sap"] {
    title,
    desc,
    "imgurl": image.asset->url
  }
`

const query_item_sap = groq`
  *[_type == "item_sap"] {
    title,
    desc,
    "imgurl": image.asset->url
  }
`


export default async function Home() {
    const carousel_sap = await client.fetch(query_carousel_sap);
    const item_sap = await client.fetch(query_item_sap);

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-[#204E62] ${font.className}`}>
            <NavbarSecond />
            <CarouselSap data={carousel_sap} />
            <SecoundSectionSapPage data={item_sap} />
            <Footer />
        </main>
    )
}