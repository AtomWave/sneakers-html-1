import { pug2html, watcherPug } from './tasks/pug2html.js'
import { config } from './gulp-config.js'
import { server } from './tasks/browserSyns.js'

import { resizeImage } from './tasks/sharpImages/sharp.js'
import { fontsTTF2WOFF } from './tasks/fontsTTF2WOFF.js'

const { series } = config.gulp

const build = series(pug2html, fontsTTF2WOFF, resizeImage)

export default series(
  build,
  server,
  watcherPug
)
