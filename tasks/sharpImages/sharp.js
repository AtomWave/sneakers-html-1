import { config } from '../../gulp-config.js'
import fs from 'fs'
import { readdir } from 'node:fs/promises'
import { arr, getAllPaths } from './findCatalogs.js'

const { sharp } = config.tasks
const { source, raws, images } = config.paths
const getPng = /.png/gm


let allFiles = (async () => {
  await getAllPaths;
  return arr;
})()

allFiles.then(files => files.forEach(file => createImages(file)))

async function createImages(image) {
  let reg = /\.png\.jpg\.jpeg/g
  let allPath;
  let path;
  // let existention =
  //   sharp(image)
  //     .resize(200, 200)
  //     .toFile(`${image + '1'}`)
}
