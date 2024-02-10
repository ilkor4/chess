import * as path from "path";
import { fileURLToPath } from 'url';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
}

const mode = 'development';
const isDev = mode === 'development';

const config =
    buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
    })

export default config;