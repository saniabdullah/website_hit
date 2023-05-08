import Footer from "@/components/footer";
import KissflowPage from "@/components/kissflow_page";
import KissflowSecondPage from "@/components/kissflow_second_page";
import MicrostrategyPage from "@/components/microstrategy_page";
import NavbarSecond from "@/components/navbar_second";
import { Poppins } from 'next/font/google'


const font = Poppins({
    subsets: ['latin'],
    weight: '400'
});

const carousel_kissflow_data = [
    {imgurl: "./images/kissflow_page.png", title: "Work Platform", desc: "The Power of Simple"}
];

const kissflow_second_data = [
    {imgurl: "./images/kissflow_second_page_1.png", title: "Get more done with pre-built processes", desc: "With cloud workflow software, businesses can turn all their paper-based workflows into dynamic, automated processes. Users can either create a process from scratch or use pre-built workflows.", list: ['New hire request', 'Purchase requisitions', 'Travel reimbursements', 'Marketing blog request']},
    {imgurl: "./images/kissflow_second_page_2.png", title: "Customize forms effortlessly", desc: "Create fluid forms that fit around your processes like a glove. Patch up process bottlenecks and human dependency with rule-based, conditional workflows", list: ['14+ customizable field types', 'Conditional accessibility', 'Transparent audit trails']},
    {imgurl: "./images/kissflow_second_page_3.png", title: "Gain actionable insights", desc: "Stop skimming through endless threads of emails and ever-growing array of spreadsheets to find the status of a task.", list: ['Spot process bottlenecks', 'Identify process trends', 'Speed up decision making']},
    {imgurl: "./images/kissflow_second_page_4.png", title: "Plays well with other software", desc: "Connect Kissflow instantly with other essential third-party tools using seamless API integration", list: ['G Suite', 'Office 365', 'Dropbox']}
];

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-[#204E62] ${font.className}`}>
            <NavbarSecond />
            <KissflowPage data={carousel_kissflow_data}/>
            <KissflowSecondPage data={kissflow_second_data}/>
            <Footer />
        </main>
    )
}