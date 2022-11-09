export const babelLoader = {
  // jsx 파일 변환할 때
  test: /\.jsx?$/i,
  use: 'babel-loader',
  exclude: /node_modules/,
};
