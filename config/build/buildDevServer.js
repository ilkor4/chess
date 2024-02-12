export function buildDevServer(options) {
  const {port} = options;
  return {
    port: port,
    open: true,
  };
}
