// import { createClient } from "next-sanity";

// export const projectId = 'o00aen5e';
// export const dataset = 'production';
// export const apiVersion = '2023-04-25';

// export const client = createClient({
//     projectId,
//     dataset,
//     apiVersion,
//     useCdn: false
// })

import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const client = createClient({projectId, dataset, apiVersion, useCdn: false})