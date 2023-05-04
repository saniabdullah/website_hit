import FooterSecond from "@/components/footer_second";
import MicrostrategyPage from "@/components/microstrategy_page";
import NavbarSecond from "@/components/navbar_second";
import { Poppins } from 'next/font/google'


const font = Poppins({
    subsets: ['latin'],
    weight: '400'
});

const micro_page_data = [
    {imgurl: "./images/micro_page.png", title: "MicroStrategy", desc: "Business platform Intelligence to present dashboards and reports automatically"}
];

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-gray-600 ${font.className}`}>
            <NavbarSecond />
            <MicrostrategyPage data={micro_page_data}/>
            <FooterSecond />
        </main>
    )
}