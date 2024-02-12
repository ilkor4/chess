import {buildLoaders} from './buildLoaders.js';
import {buildResolvers} from './buildResolvers.js';
import {buildPlugins} from './buildPlugins.js';
import {buildDevServer} from './buildDevServer.js';

export function buildWebpackConfig(options) {
  const {paths, mode, isDev} = options;

  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
