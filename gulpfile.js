import { pug2html } from './tasks/pug2html.js'
import { config } from './gulp-config.js'
import { server, serverBuild } from './tasks/browserSyns.js'
import { optimizeRaster } from './tasks/sharp.js'
import { fontsTTF2WOFF } from './tasks/fontsTTF2WOFF.js'
import { createScripts } from './tasks/scripts.js'
import { getStack } from './tasks/stack.js'
import { optimizeVector } from "./tasks/optimizeVector.js"
import { removeBuild } from './tasks/del.js'
import { copyAssets } from './tasks/copyAssets.js'

const { series, parallel } = config.gulp


export async function scripts() {
  await createScripts()
}
export async function optimizeVectors() {
  await optimizeVector()
}
export async function createStack() {
  await getStack()
}

export async function optimizeAllImages() {
  await optimizeRaster()
  await optimizeVectors()
  await createStack()
}

export const development = (done) => series(del, parallel(pug2html, scripts), server)(done)
export const build = (done) => series(del, copy, parallel(pug2html, scripts), serverBuild)(done)

export const statics = (done) => {
  series(optimizeAllImages, fontsTTF2WOFF)(done)
}
// export default series(
//   build,
//   server,
//   watcherPug
// )

export async function del() {
  await removeBuild()
}
export async function copy() {
  await copyAssets()
}
