import { config } from './../gulp-config.js'

const { dest, watch, series } = config.gulp
const { source, build, js } = config.paths
const { uglify, rename, browserify, vinylsource, notify, buffer, browser_2_server } = config.tasks

function watcherJS() {
  watch(`${js.all}**/*.js`).on('change', series(createScript, browser_2_server.reload))
}

function createScript() {
  return (
    browserify({
      entries: `./${source}js/script.js`,
    })
      .transform('babelify', {
        presets: ['@babel/preset-env'],
        sourceMaps: true,
        global: true
      })
      .bundle()
      .on(
        'error',
        notify.onError({
          title: 'JS compiling error',
          wait: true,
        })
      )
      .pipe(vinylsource('script.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename('script.min.js'))
      .pipe(dest(`./${build}/js`))
  )
}

export async function createScripts() {
  createScript()
  watcherJS()
}
