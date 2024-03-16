import { pug_2_html } from "./tasks/pug2html.js";
import { scss_2_CSS } from "./tasks/scss2CSS.js";
import { config } from "./gulp-config.js";

const { series } = config.gulp;

const build = series(pug_2_html, scss_2_CSS);
export default series(build)
