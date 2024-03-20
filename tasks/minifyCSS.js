import { config } from "./../gulp-config.js";
import minifyCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

const { src, dest } = config.gulp;
const { source, build } = config.paths;

export const minify_CSS = () => {
  return src(`${build}css/*.css`)
    .pipe(minifyCSS())
    .pipe(dest(`${build} css`))
    .pipe(rename({ extname: '.min.css' }))
}
