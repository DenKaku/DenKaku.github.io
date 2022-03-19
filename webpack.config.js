const path = require('path')

module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    mode: 'production',
    // mode: 'development',
    // エントリーポイントの設定
    entry: './src/index.tsx',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
              test: /\.css$/,
              use: 'css-loader'
          },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'json' ],
      },
    // 出力の設定
    output: {
      // 出力するファイル名
      filename: 'build.js',
      // 出力先のパス（絶対パスを指定する必要がある）
      path: path.resolve(__dirname, 'dist'),
  },
}