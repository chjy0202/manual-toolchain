const serverConfig = {
  host: 'localhost',
  port: 3000,
  // 전체 새로고침 없이 런타임 시 모든 종류의 모듈 업데이트 가능
  hot: true,
  open: true,
  compress: true,
  liveReload: true,
  static: ['public'],
  historyApiFallback: true,
  client: {
    // 컴파일러 오류 또는 경고가 있는 경우 브라우저에 전체 화면 오버레이를 표시
    overlay: true,
  },
};

export default serverConfig;
