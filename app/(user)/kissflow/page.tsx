"use client"

import Footer from "@/components/footer";
import KissflowPage from "@/components/kissflow_page";
import KissflowSecondPage from "@/components/kissflow_second_page";
import MicrostrategyPage from "@/components/microstrategy_page";
import NavbarSecond from "@/components/navbar_second";
import { Poppins } from 'next/font/google'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { useClient } from 'sanity'
import { useState, useEffect } from "react";



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

// const query_carousel_kissflow = groq`
//   *[_type == "carousel_kissflow"] {
//     title,
//     desc,
//     "imgurl": image.asset->url
//   }
// `

// const query_item_kissflow = groq`
//   *[_type == "item_kissflow"] {
//     title,
//     desc,
//     "imgurl": image.asset->url,
//     list
//   }
// `

export const data = async () => {
  const query_item_kissflow = groq`
    *[_type == "item_kissflow"] {
      title,
      desc,
      "imgurl": image.asset->url,
      list
    }
  `
  const item_kissflow = await client.fetch(query_item_kissflow);
  console.log("data2", item_kissflow)

  return {
    item_kissflow
  }
}

export default async function Home({item_kissflow}: any) {
    // const carousel_kissflow = await client.fetch(query_carousel_kissflow, { next: { revalidate: 6 } });
    // const item_kissflow = await client.fetch(query_item_kissflow, { next: { revalidate: 6 } });
    console.log("data", item_kissflow)
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between text-[#204E62] ${font.className}`}>
            <NavbarSecond />
            <KissflowPage data={carousel_kissflow_data}/>
            {/* <KissflowSecondPage data={item_kissflow}/> */}
            <Footer />
        </main>
    )
}
