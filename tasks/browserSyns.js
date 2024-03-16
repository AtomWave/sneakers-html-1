import { config } from './../gulp-config.js'
import serveStatic from 'serve-static'

const { browserServer } = config.tasks
const { build, source } = config.paths

const { init } = browserServer

export const server = (done) => {
  init({
    server: {
      baseDir: build
    },
    cors: true,
    notify: false,
    ui: false,
    middleware: [
      serveStatic(source, {
        route: ['images', 'fonts']
      })
    ]
  })
  done()
}
