import { config } from "./../gulp-config.js";

const {svgo} = config.tasks;
const { src, dest } = config.gulp;
const { source, build } = config.paths;

//const svgo = require('gulp-svgo');

export const optimizeVector = () => {

  return src(`${source}images/svg-icons/**/*.{svg}`)
      .pipe(svgo())
      .pipe(dest(`${build}images/svg`));
};
