import Footer from "@/components/footer";
import FooterSecond from "@/components/footer_second";
import NavbarSecond from "@/components/navbar_second";
import OdooPage from "@/components/odoo_page";
import OdooSecondPage from "@/components/odoo_second_page";
import { Poppins } from 'next/font/google'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'


const font = Poppins({
    subsets: ['latin'],
    weight: '400'
});

const odoo_page_data = [
    {imgurl: "./images/odoo_page.png", title: "Odoo ERP", desc: "The only platform you will ever need to help run your business: integrated apps, kept simple, and loved by millions of happy users"}
];

const query_carousel_odoo= groq`
  *[_type == "carousel_odoo"] {
    title,
    desc,
    "imgurl": image.asset->url
  }
`

export default async function Home() {
    const carousel_odoo = await client.fetch(query_carousel_odoo);
    console.log('odoo', carousel_odoo)

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-gray-600 ${font.className}`}>
            <NavbarSecond />
            <OdooPage data={carousel_odoo}/>
            <OdooSecondPage />
            <Footer />
        </main>
    )
}