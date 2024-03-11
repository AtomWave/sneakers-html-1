import { pug2html } from "./tasks/pug2html.js";
import { config } from "./gulp-config.js";

const { series } = config.gulp;

const build = series(pug2html);
export default series(build)
