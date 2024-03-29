import { config } from "./../gulp-config.js";

const {favicons} = config.tasks;
const { src, dest } = config.gulp;
const { source, build } = config.paths;

//const favicons = require('gulp-favicons');

export const favicon = () => {
  return src(`${source}images/favicons/**/*`)
    .pipe(favicons())
    .pipe(dest(`${build}images/favicons`))
};
