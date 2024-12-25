import {dirname, resolve} from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main:resolve(__dirnamedirname,"index.html"),
                news:resolve(__dirnamedirname,"news.html")
            },
        },
    },
});