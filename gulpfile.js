import { pug_2_html } from "./tasks/pug2html.js";
import { config } from "./gulp-config.js";
import {optimizeImages} from "./tasks/optimizeRastr.js";

const { series } = config.gulp;

const build = series(pug_2_html);
export default series(build);


const img = series(optimizeImages);
export {img};

