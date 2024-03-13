import { config } from "./../gulp-config.js";

const { pug_2_html, plumber_watch, browser_2_server } = config.tasks;
const { src, dest, watch, series } = config.gulp;
const { build, pug } = config.paths;

function pagesPug() {
  return (
    src(`${pug.pages}`)
      .pipe(plumber_watch())
      .pipe(pug_2_html({ pretty: true }))
      .pipe(dest(`${build}pages`))
      .pipe(browser_2_server.stream())
  )
};

function mainPug() {
  return (
    src(`${pug.main}`)
      .pipe(plumber_watch())
      .pipe(pug_2_html({ pretty: true }))
      .pipe(dest(`${build}`))
      .pipe(browser_2_server.stream())
  )
};

export const pug2html = (done) => {
  pagesPug();
  mainPug();
  done();
};

export const watcherPug = () => {
  watch(`${pug.all}**/*.pug`).on('change', series(pug2html, browser_2_server.reload));
}
