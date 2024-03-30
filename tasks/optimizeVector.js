import { config } from "./../gulp-config.js";

const { svgo } = config.tasks;
const { src, dest } = config.gulp;
const { source, raws } = config.paths;

export const optimizeVector = async () => {
  return src([`${raws}/icons/**/*.svg`, `!${raws}/icons/*.svg`])
    .pipe(svgo())
    .pipe(dest(`${source}images/icons`));
};
