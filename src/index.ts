import {
    Elysia
} from 'elysia'

import { staticPlugin } from '@elysiajs/static'

import dotenv from 'dotenv'
import { throwUp } from './utils';


dotenv.config()

const port = process.env.PORT || 3000;

const files_folder = process.env.FILES_FOLDER ?? throwUp("FILES_FOLDER must be defined");


new Elysia()
    .use(staticPlugin({ enableDecodeURI: true, assets: files_folder, prefix: "/files" }))
    .get('/feed.rss', 'Hola World')
    .listen(port, () => {
        console.log("Using files from", files_folder)
        console.log("Listening on", port);
    });



