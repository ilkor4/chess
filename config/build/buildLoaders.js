import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders() {
  const htmlLoader = {
    test: /\.html$/,
    use: 'html-loader',
  };

  const babelLoader = {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: '/node_modules/',
  };

  const fileLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/inline',
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
    htmlLoader,
    fileLoader,
    cssLoader,
  ];
}
