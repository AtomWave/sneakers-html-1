import { pug_2_html } from "./tasks/pug2html.js";
import { config } from "./gulp-config.js";

import {optimizeImages} from "./tasks/optimizeRastr.js";
import {fontsTTF2WOFF} from "./tasks/fontsTTF2WOFF.js";

const { series } = config.gulp;
const img = series(optimizeImages);

const build = series(pug_2_html, fontsTTF2WOFF);
export default series(build)

