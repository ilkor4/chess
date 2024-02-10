import {buildLoaders} from "./buildLoaders.js";
import {buildResolvers} from "./buildResolvers.js";
import {buildPlugins} from "./buildPlugins.js";

export function buildWebpackConfig(options) {
    const { paths, mode } = options;

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
            scriptType: 'module'
        },
        plugins: buildPlugins(paths)
    }

}
