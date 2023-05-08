import Footer from "@/components/footer";
import FooterSecond from "@/components/footer_second";
import NavbarSecond from "@/components/navbar_second";
import OdooPage from "@/components/odoo_page";
import OdooSecondPage from "@/components/odoo_second_page";
import { Poppins } from 'next/font/google'


const font = Poppins({
    subsets: ['latin'],
    weight: '400'
});

const odoo_page_data = [
    {imgurl: "./images/odoo_page.png", title: "Odoo ERP", desc: "The only platform you will ever need to help run your business: integrated apps, kept simple, and loved by millions of happy users"}
];

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-gray-600 ${font.className}`}>
            <NavbarSecond />
            <OdooPage data={odoo_page_data}/>
            <OdooSecondPage />
            <Footer />
        </main>
    )
}