// Обьединяет js файлы в один и переносит файл в папку dist/js

module.exports = function () {

  $.gulp.task("scripts", () => {

    return $.gulp.src($.config.paths.js + '*.js')
      .pipe($.webpack({
        mode: $.config.toggle.mode,
        entry: {
          // каркас общий
          main: {
            import: './src/js/main.js'
          },

          // главная страница
          index: {
            import: './src/js/index.js',
            dependOn: ['slick'],
          },

          // регистрация страница
          reg: {
            import: './src/js/reg.js',
            dependOn: ['validation']
          },

          // личный кабинет / кабинет врача страницы
          personalAccount: {
            import: './src/js/personalAccount.js',
            dependOn: ['validation']
          },

          // кабинет администратора / регистратуры страницы
          adminAccount: {
            import: './src/js/adminAccount.js',
            dependOn: ['datepicker','select2']
          },

          // слайдер
          'slick' : 'slick-carousel',

          // календарь
          'datepicker' : 'jquery-ui/ui/widgets/datepicker',

          // валидация
          'validation' : {
            import : ['jquery-validation', 'jquery-validation/dist/additional-methods'],
          },

          // выпадающий список
          'select2' : 'select2',
        },
        output: {
          filename: '[name].js'
        },
        externals: {
          jquery: 'jQuery',
        },
        optimization: {
          runtimeChunk: 'single',
          // splitChunks: {
          //   chunks: 'all',
          // },
        },
        watch: false,
        devtool: 'source-map',
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', {
                    debug: true,
                    corejs: 3,
                    useBuiltIns: "usage"
                  }]]
                }
              }
            }
          ]
        }
      }))
      .pipe($.gulp.dest($.config.output.pathJs))
      .on("end", $.browserSync.reload);

  });
}
