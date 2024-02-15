import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export function buildDevServer(options) {
  const {port} = options;
  return {
    port: port,
    open: true,
    watchFiles: ["src", "public/index.html"],
    hot: true
  };
}
