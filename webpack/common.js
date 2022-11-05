import { resolve } from 'node:path';

const commonConfig = {
  target: ['browserslist'],
  // .jsx 확장자 없이도 불러올 수 있도록 수정
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'],
  },
  entry: {
    // 절대경로 처리 (join은 상대경로 처리)
    main: resolve('src/main.jsx'),
  },
  output: {
    path: resolve('public'),
    filename: '[name].bundle.js',
  },
};

export default commonConfig;
