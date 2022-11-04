import { merge } from 'webpack-merge';
import commonConfig from './common.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  output: {
    ...commonConfig.output,
    // 최적화
    filename: '[name].min.js',
  },
});

export default prodConfig;
