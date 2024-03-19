import { readdir } from 'fs/promises'
import { join } from 'path'
import fs from 'node:fs'

const source = 'raws'

async function getFiles(dir) {
  let output = []
  if (fs.lstatSync(dir).isDirectory()) {
    let files = await readdir(dir, { withFileTypes: true })
    let file = files.map((file) => join(dir, file.name))
    output.push(file)
  } else {
    let files = await readdir(source, { withFileTypes: true })
    let file = files.map((file) => join(source, file.name))
    output.push(file)
  }
  return output
}

let paths = []
let files = []

let regExestentions = /.png|.jpg|.jpeg/gm

async function populatePaths() {
  try {
    const dirents = await readdir(source, { withFileTypes: true })
    const directories = dirents.filter(dirent => dirent.isDirectory()).map(dirent => join(source, dirent.name))
    const rootFiles = dirents.filter(dirent => dirent.isFile()).map(dirent => join(source, dirent.name))
    console.log(rootFiles, 'rootFiles');
    paths.push(...directories, ...rootFiles)
    console.log(paths, 'paths')
    await processDirectories()
  } catch (err) {
    // console.error(err)
  }
}

async function processDirectories() {
  for (const path of paths) {
    // if (path.match(regExestentions)) {
    //   console.log(path, 'path');
    //   const filesInDir = await getFiles(path)
    //   files.push(...filesInDir)
    //   // console.log(files, 'FFF');
    // }
    console.log(path, 'path')
    const filesInDir = await getFiles(path)
    files.push(...filesInDir)
  }
}

async function allPaths() {
  await populatePaths()
  return files
}
let reg = /\\/g;
export let arr = [];
export let getAllPaths = allPaths();

getAllPaths.then(res => {

  // let arr1 = res.map(el => el.replace(reg, '/'))
  arr.push(...res);
  return arr
}).then(file => {
  console.log(file, 'file');
})
