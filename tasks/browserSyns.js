import { config } from "./../gulp-config.js";

const { browser_2_server } = config.tasks;
const { build } = config.paths;

const { init } = browser_2_server;

export const server = (done) => {
  init({
    server: {
      baseDir: `${build}`
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
