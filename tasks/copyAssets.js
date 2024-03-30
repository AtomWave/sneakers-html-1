import { config } from "./../gulp-config.js";

const { src, dest } = config.gulp;
const { source, build } = config.paths;

export async function copyAssets() {
  return src([`${source}images/**/*`, `${source}fonts/**/*`], { base: source })
    .pipe(dest(build));
}
