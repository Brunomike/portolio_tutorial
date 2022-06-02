import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import { API_KEY, PROJECT_ID } from './keys';

export const client = sanityClient({
    projectId: PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: API_KEY
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
