import { config } from './../gulp-config.js'
import ttf2Woff from 'gulp-ttf2woff'
import ttf2Woff2 from 'gulp-ttf2woff2'

// деструктуризация
const { source } = config.paths
const { src, dest } = config.gulp

export const fontsTTF2WOFF = (done) => {
  ttf2woff()
  ttf2woff2()
  done()
}
function ttf2woff () {
  return src(`${source}fonts/*.ttf`).pipe(ttf2Woff()).pipe(dest(`${source}fonts`))
}

function ttf2woff2 () {
  return src(`${source}fonts/*.ttf`).pipe(ttf2Woff2()).pipe(dest(`${source}fonts`))
}
