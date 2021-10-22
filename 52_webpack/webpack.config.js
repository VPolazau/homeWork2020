// С помощью require мы подлючаем модули
const path = require("path"); // "path"-модуль node для работы с путями
const autoprefixer = require("autoprefixer"); // Для вендерных префиксов в css(вебкит, мос). Для кросбраузерности css.
const precss = require("precss");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Для работы с html файлами.

module.exports = {
  // Итак,  чтобы вебпак начал свою работу, нужно указать главный (основной) файл, который будет включать в себя все другие необходимые файлы (модули).
  entry: {
    polyfill: "babel-polyfill",
    // Полифилы долны быть обьявлены раньше основного кода
    app: "./js/app.js",
  },
  // Также webpack рекомендует явно указывать, в какой директории находятся исходные файлы проекта (ресурсы). Для этого следует использовать свойство context:
  context: path.resolve(__dirname, "src"),
  // Запуск локального сервера
  devServer: {
    publicPath: "/",
    port: 9000,
    contentBase: path.join(process.cwd(), "dist"),
    host: "localhost",
    historyApiFallback: true,
    noInfo: false,
    stats: "minimal",
    hot: true,
    open: "Google Chrome Dev",
  },
  module: {
    // Для того, чтобы трансформировать файл, используются специальные утилиты - загрузчики (loaders).
    //Для любых настроек модуля вебпак используется поле module.
    //Массив rules  внутри объекта module определяет список правил для загрузчиков.
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        test: /\.js$/, // Регулярное выражение, для обращение к любым js файлам
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",

            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [precss, autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  // Вебпак плагины используются для настройки процесса сборки.
  //Например, плагин для минификации кода (во время сборки код подвергается очистке и минификации).
  //Или плагин для сборки html страницы и css кода (скрипты вставляются в html, куски css собираются в один файл).
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  // Кроме entry, мы можем указать поле, куда (в какой файл) собирать конечный результат. Это свойство задаётся с помощью поля output.
  //По умолчанию, весь результирующий код собирается в папку dist.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js", //name и hash - переменные
  },
  mode: "development",
};
