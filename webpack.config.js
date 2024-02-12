import {buildWebpackConfig} from './config/build/buildWebpackConfig.js';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const paths = {
  entry: path.resolve(__dirname, 'src', 'pages', 'index.js'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build'),
};

export default (env) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config =
    buildWebpackConfig({
      mode,
      port: PORT,
      paths,
      isDev,
    });

  return config;
};
