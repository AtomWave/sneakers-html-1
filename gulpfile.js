import { pug2html, watcherPug } from './tasks/pug2html.js'
import { config } from './gulp-config.js'
import { server } from './tasks/browserSyns.js'

<<<<<<< HEAD
import { optimizeImages } from './tasks/optimizeRastr.js'
import { fontsTTF2WOFF } from './tasks/fontsTTF2WOFF.js'

const { series } = config.gulp
const img = series(optimizeImages)

const build = series(pug2html, fontsTTF2WOFF)
=======
import { resizeImage, watchImg } from "./tasks/sharp.js";
import { fontsTTF2WOFF } from "./tasks/fontsTTF2WOFF.js";

const { series } = config.gulp;

const build = series(pug2html, fontsTTF2WOFF, resizeImage);
>>>>>>> ac48b5afac0f029b6f8a39d67d422d839e793e0d

export default series(
  build,
  server,
  watcherPug,
  watchImg
)
