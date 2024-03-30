import { config } from "./../gulp-config.js";

const { stack } = config.tasks;
const { src, dest } = config.gulp;
const { source, raws } = config.paths;

export const getStack = () => {
  return src([`!${raws}/icons/`, `${raws}/icons/*.svg`])
    .pipe(stack())
    .pipe(dest(`${source}images/icons/`));
};
