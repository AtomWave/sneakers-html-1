import { pug2html, watcherPug } from "./tasks/pug2html.js";
import { config } from "./gulp-config.js"
import { server } from "./tasks/browserSyns.js";

const { series } = config.gulp;

const build = series(pug2html);

export default series(
  build,
  server,
  watcherPug
  )
