import { readdir } from 'fs/promises'
import { join } from 'path'
import fs from 'node:fs'

const paths = []
const files = []
const source = 'raws'
const regExpPaths = /\\/g
const regExpestentions = /.png|.jpg|.jpeg/gm

async function getFiles(dir) {
  const output = []
  if (fs.lstatSync(dir).isDirectory()) {
    const files = await readdir(dir, { withFileTypes: true })
    const file = files.map((file) => join(dir, file.name))
    output.push(file)
  } else {
    const files = await readdir(source, { withFileTypes: true })
    const file = files.map((file) => join(source, file.name))
    output.push(file)
  }
  return output
}

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
export const arr = []
export const getAllPaths = allPaths();

getAllPaths.then(res => {
  let arr1 = res.map((el) =>
    arr.push(...res)
    return arr1
)}
).then(file => {
      arr.concat(file)
      console.log(file, 'file');
      console.log(arr1, 'arr');
    })
