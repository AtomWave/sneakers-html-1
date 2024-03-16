import { config } from './../gulp-config.js'

const { pug2HTML, plumberWatch, browserServer } = config.tasks
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
  watch(`${pug.all}**/*.pug`).on('change', series(pug2html, browserServer.reload))
}
