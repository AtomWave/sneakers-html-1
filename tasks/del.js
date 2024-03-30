import { config } from "./../gulp-config.js";

const { del } = config.tasks

export async function removeBuild() {
  del('build', {
    force: true,
    recursive: true,
  });
}
