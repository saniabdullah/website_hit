import Footer from "@/components/footer";
import FooterSecond from "@/components/footer_second";
import NavbarSecond from "@/components/navbar_second";
import CarouselSap from "@/components/sap_page";
import SecoundSectionSapPage from "@/components/sap_second_page";
import { Poppins } from 'next/font/google'


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


export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-[#204E62] ${font.className}`}>
            <NavbarSecond />
            <CarouselSap data={carousel_sap_data} />
            <SecoundSectionSapPage data={second_section_sap_page_data} />
            <Footer />
        </main>
    )
}