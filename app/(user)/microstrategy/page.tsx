import Footer from "@/components/footer";
import FooterSecond from "@/components/footer_second";
import MicrostrategyPage from "@/components/microstrategy_page";
import NavbarSecond from "@/components/navbar_second";
import { Poppins } from 'next/font/google'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'


const font = Poppins({
    subsets: ['latin'],
    weight: '400'
});

const micro_page_data = [
    {imgurl: "./images/micro_page.png", title: "MicroStrategy", desc: "Business platform Intelligence to present dashboards and reports automatically"}
];

const query_carousel_micro = groq`
  *[_type == "carousel_micro"] {
    title,
    desc,
    "imgurl": image.asset->url
  }
`

export default async function Home() {
    const carousel_micro = await client.fetch(query_carousel_micro);
    console.log("micro", carousel_micro)

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-[#204E62] ${font.className}`}>
            <NavbarSecond />
            <MicrostrategyPage data={carousel_micro}/>
            <Footer />
        </main>
    )
}