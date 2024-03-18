import { config } from './../gulp-config.js'

<<<<<<< HEAD
const { pug_2_html, plumber_watch, browser_2_server } = config.tasks
=======
const { pug2HTML, plumberWatch, browserServer } = config.tasks
>>>>>>> e5f9b5262ea5c3451e3746274e6d7f2f1500512f
const { src, dest, watch, series } = config.gulp
const { build, pug } = config.paths

function pagesPug () {
  return (
    src(`${pug.pages}`)
      .pipe(plumberWatch())
      .pipe(pug2HTML({ pretty: true }))
      .pipe(dest(`${build}pages`))
      .pipe(browserServer.stream())
  )
};

function mainPug () {
  return (
    src(`${pug.main}`)
      .pipe(plumberWatch())
      .pipe(pug2HTML({ pretty: true }))
      .pipe(dest(`${build}`))
      .pipe(browserServer.stream())
  )
};

export const pug2html = (done) => {
  pagesPug()
  mainPug()
  done()
}

export const watcherPug = () => {
<<<<<<< HEAD
  watch(`${pug.all}**/*.pug`).on('change', series(pug2html, browser_2_server.reload))
=======
  watch(`${pug.all}**/*.pug`).on('change', series(pug2html, browserServer.reload))
>>>>>>> e5f9b5262ea5c3451e3746274e6d7f2f1500512f
}
