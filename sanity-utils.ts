import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { CarouselProps } from "@/types/Project";



export async function getCarouselData(): Promise<any> {
    return createClient(clientConfig).fetch(
        groq`
        *[_type == "carousel"] {
            title,
            desc,
            "imgurl": image.asset->url
        }`
    )
}