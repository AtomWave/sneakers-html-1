import { config } from './../gulp-config.js'

const { src, dest } = config.gulp
const { raws, source } = config.paths
const { sharp } = config.tasks

export async function optimizeRaster() {
  const RAW_DENSITY = 2
  const TARGET_FORMATS = [undefined, 'webp']

  function createOptionsFormat() {
    const formats = []

    for (const format of TARGET_FORMATS) {
      for (let density = RAW_DENSITY; density > 0; density--) {
        formats.push(
          {
            format,
            rename: { suffix: `@${density}x` },
            width: ({ width }) => Math.ceil(width * density / RAW_DENSITY),
            jpegOptions: { progressive: true }
          }
        )
      }
    }

    return { formats }
  }

  return src(`${raws}images/**/*.{png,jpg,jpeg}`)
    .pipe(sharp(createOptionsFormat()))
    .pipe(dest(`${source}images`))
}
