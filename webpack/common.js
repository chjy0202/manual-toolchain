import { resolve } from 'node:path';

const commonConfig = {
  target: ['browserslist'],
  entry: {
    // 절대경로 처리 (join은 상대경로 처리)
    main: resolve('src/main.js'),
  },
  output: {
    path: resolve('public'),
    filename: '[name].bundle.js',
  },
};

export default commonConfig;
