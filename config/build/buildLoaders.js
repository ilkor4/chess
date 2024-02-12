import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders() {
  const babelLoader = {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: '/node_modules/',
  };

  const fileLoader = {
    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
    type: 'asset/resource',
    generator: {
      filename: '[name].[hash][ext]',
    },
  };

  const cssLoader = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    'postcss-loader'],
  };

  return [
    babelLoader,
    fileLoader,
    cssLoader,
  ];
}
