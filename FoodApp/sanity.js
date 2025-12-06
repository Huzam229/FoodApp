import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'bs6c8fuf', // Add your project ID
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01'
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
