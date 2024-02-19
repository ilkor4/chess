export function buildDevServer(options) {
  const {port} = options;
  return {
    port: port,
    open: true,
    watchFiles: ['src', 'public/index.html'],
    hot: true,
  };
}
