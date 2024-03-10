import { pug_2_html } from "./tasks/pug2html.js";
import { config } from "./gulp-config.js";

const { series } = config.gulp;

const build = series(pug_2_html);
export default series(build)