import { config } from "./../gulp-config.js";
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';



const { scss2CSS } = config.tasks;
const { src, dest } = config.gulp;
const { source, build } = config.paths;



export const scss_2_CSS = () => {
	return src(`${source}sass/*.scss`).pipe(scss2CSS({pretty: true,}))
  .pipe(plumber())
  .pipe(scss2CSS().on('error', scss2CSS.logError))
  .pipe(postcss([
    autoprefixer({
			overrideBrowserslist: ["last 3 versions"],
		})
  ]))
  .pipe(concat('css/style.css'))

  // .pipe(app.plugins.if(app.isBuild, cleanCss({ compatibility: 'ie8' })))
  // .pipe(rename({ extname: '.min.css' }))

  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write('.'))
  .pipe(dest(`${build}`))
}
