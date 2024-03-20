import { config } from './../gulp-config.js'
import serveStatic from 'serve-static'

const { browser_2_server } = config.tasks
const { build, source } = config.paths

const { init } = browser_2_server

export const server = (done) => {
  init({
    server: {
      baseDir: build
    },
    browser: "chrome",
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
