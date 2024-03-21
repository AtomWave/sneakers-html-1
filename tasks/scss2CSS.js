import { config } from "./../gulp-config.js";
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import gulp from 'gulp'



const { scss2CSS, browser_2_server } = config.tasks;
const { src, dest, watch, series } = config.gulp;
const { source, build } = config.paths;



export const scss_2_CSS = () => {
  return src(`${source}sass/*.scss`).pipe(scss2CSS({ pretty: true, }))
    .pipe(plumber())
    .pipe(scss2CSS().on('error', scss2CSS.logError))
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ["last 3 versions"], cascade: false
      })
    ]))
    .pipe(concat('css/style.css'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`${build}`))
    .pipe(browser_2_server.stream())
}
export const watcherSCSS = () => {
  watch(`${source}scss/*.scss`).on('change', series(scss2CSS, browser_2_server.reload));
};

