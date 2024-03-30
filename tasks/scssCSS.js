import { config } from "../gulp-config.js";
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import clean_css from 'gulp-clean-css';
import minifyCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
// import browser from 'browser-sync'

const { scssCSS, plumber_watch, browser_2_server } = config.tasks;
const { src, dest, watch, series } = config.gulp;
const { source, sass, build } = config.paths;



export const scss_CSS = () => {
  return src(`${source}sass/*.scss`, { sourcemaps: true }).pipe(scssCSS({ pretty: true, }))
    .pipe(clean_css())
    .pipe(plumber())
    .pipe(scssCSS().on('error', scssCSS.logError))
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ["last 3 versions"],
      })
    ]))
    .pipe(concat('css/style.css'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(dest(`${build}css`, { sourcemaps: '.' }))
    .pipe(browser_2_server.stream());
}


