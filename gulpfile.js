import { pug2html, watcherPug } from './tasks/pug2html.js'
import { scss_2_CSS, watcherSCSS } from "./tasks/scss2CSS.js";
import { minify_CSS } from "./tasks/minifyCSS.js";
import { config } from './gulp-config.js'
import { server } from './tasks/browserSyns.js'

import { resizeImage } from './tasks/sharp.js';
import { fontsTTF2WOFF } from './tasks/fontsTTF2WOFF.js';

const { series } = config.gulp;

const build = series(pug2html, fontsTTF2WOFF, scss_2_CSS, minify_CSS);

export default series(
  build,
  server,
  watcherSCSS,
  watcherPug,
)
