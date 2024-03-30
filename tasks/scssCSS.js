import { config } from "../gulp-config.js";

const { scssCSS, plumber_watch, browser_2_server, minifyCSS, rename, postcss, clean_css, autoprefixer, concat } = config.tasks;
const { src, dest, watch, series } = config.gulp;
const { source, build, scss } = config.paths;

function watcherSCSS() {
  watch(`${scss.all}**/*.scss`).on('change', series(scss2CSS, browser_2_server.reload))
}

export const scss2CSS = () => {
  return src(`${source}sass/*.scss`, { sourcemaps: true }).pipe(scssCSS({ pretty: true, }))
    .pipe(clean_css())
    .pipe(plumber_watch())
    .pipe(scssCSS().on('error', scssCSS.logError))
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ["last 3 versions"],
      })
    ]))
    .pipe(concat('css/style.css'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(`${build}css`, { sourcemaps: '.' }))
    .pipe(browser_2_server.stream());
}

export async function scss_CSS() {
  scss2CSS()
  watcherSCSS()
}


