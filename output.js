{
  mode: 'development',
  context: 'E:\\wlzsy\\iot-mgr-web',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'E:\\wlzsy\\iot-mgr-web\\dist',
    filename: 'assets/js/[name].js',
    publicPath: '/',
    chunkFilename: 'assets/js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'E:\\wlzsy\\iot-mgr-web\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      src: 'E:\\wlzsy\\iot-mgr-web\\src',
      assets: 'E:\\wlzsy\\iot-mgr-web\\src\\assets',
      css: 'E:\\wlzsy\\iot-mgr-web\\src\\assets\\css',
      images: 'E:\\wlzsy\\iot-mgr-web\\src\\assets\\images',
      views: 'E:\\wlzsy\\iot-mgr-web\\src\\views',
      components: 'E:\\wlzsy\\iot-mgr-web\\src\\components',
      api: 'E:\\wlzsy\\iot-mgr-web\\src\\api',
      mixins: 'E:\\wlzsy\\iot-mgr-web\\src\\mixins',
      store: 'E:\\wlzsy\\iot-mgr-web\\src\\store',
      service: 'E:\\wlzsy\\iot-mgr-web\\src\\service',
      validate: 'E:\\wlzsy\\iot-mgr-web\\src\\service\\validate'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
      '.js',
      '.vue',
      '.json',
      '.less',
      '.css'
    ],
    modules: [
      'node_modules',
      'E:\\wlzsy\\iot-mgr-web\\node_modules',
      'E:\\wlzsy\\iot-mgr-web\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      'E:\\wlzsy\\iot-mgr-web\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'E:\\wlzsy\\iot-mgr-web\\node_modules',
      'E:\\wlzsy\\iot-mgr-web\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '716e92c2'
            }
          },
          {
            loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-loader\\lib\\index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '716e92c2'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'assets/img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'assets/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'assets/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'assets/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/assets/css/elementUI/color_1fc2dc/var.scss'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/assets/css/elementUI/color_1fc2dc/var.scss'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/assets/css/elementUI/color_1fc2dc/var.scss'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/assets/css/elementUI/color_1fc2dc/var.scss'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'E:\\wlzsy\\iot-mgr-web\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '72ac0a5c'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'iot-mgr-web',
        templateParameters: function () { /* omitted long function */ },
        template: 'E:\\wlzsy\\iot-mgr-web\\public\\index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'E:\\wlzsy\\iot-mgr-web\\public',
          to: 'E:\\wlzsy\\iot-mgr-web\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    {
      definitions: {
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
