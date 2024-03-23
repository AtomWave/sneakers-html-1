import { pug2html, watcherPug } from "./tasks/pug2html.js";
import { config } from "./gulp-config.js"
import { server } from "./tasks/browserSyns.js";

import { optimizeImages } from "./tasks/optimizeRastr.js";
import { fontsTTF2WOFF } from "./tasks/fontsTTF2WOFF.js";

import { optimizeVector } from "./tasks/optimizeVector.js";
import { getSvgSpriteStack } from "./tasks/svgSprite.js";
import { getSvgSpriteSymbol } from "./tasks/svgSprite.js";
import { favicon } from "./tasks/favicons.js";

const { series } = config.gulp;
const img = series(optimizeImages);

const build = series(pug2html, fontsTTF2WOFF);

export default series(
  build,
  server,
  watcherPug
)
