import EpicorPage from "@/components/epicor_page";
import EpicorSecondPage from "@/components/epicor_second_page";
import Footer from "@/components/footer";
import FooterSecond from "@/components/footer_second";
import NavbarSecond from "@/components/navbar_second";
import { Poppins } from 'next/font/google'


const font = Poppins({
    subsets: ['latin'],
    weight: '400'
});


export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-gray-600 ${font.className}`}>
            <NavbarSecond />
            <EpicorPage />
            <EpicorSecondPage />
            <Footer />
        </main>
    )
}