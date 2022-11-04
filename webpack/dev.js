import { merge } from 'webpack-merge';
import commonConfig from './common.js';

// 공통설정에서 추가로 mode와 devtool 을 합성하여 새로운 객체 devConfig 생성
const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
});

export default devConfig;
