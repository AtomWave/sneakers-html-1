import { config } from './../gulp-config.js'
import ttf_2_woff from 'gulp-ttf2woff'
import ttf_2_woff_2 from 'gulp-ttf2woff2'

// деструктуризация
const { source, build } = config.paths
const { src, dest } = config.gulp

export const fontsTTF2WOFF = (done) => {
  ttf2woff()
  ttf2woff2()
  done()
}
function ttf2woff () {
  return src(`${source}fonts/*.ttf`).pipe(ttf_2_woff()).pipe(dest(`${source}fonts`))
}

function ttf2woff2 () {
  return src(`${source}fonts/*.ttf`).pipe(ttf_2_woff_2()).pipe(dest(`${source}fonts`))
}
