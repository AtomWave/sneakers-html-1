import { readdir } from 'fs/promises'
import { resolve, join } from 'path'

async function getFiles(dir) {
  const files = await readdir(dir, { withFileTypes: true })
  const output = files.map((file) => join(dir, file.name))
  return output
}

let paths = []
let files = []

const getDirectories = async (source) => {
  const dirents = await readdir(source, { withFileTypes: true })
  const directories = dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => join(source, dirent.name))
  paths.push(...directories)
}

async function processDirectories() {
  for (const path of paths) {
    const filesInDir = await getFiles(path)
    files.push(...filesInDir)
  }
}

async function populatePaths() {
  const source = 'raws'
  try {
    const dirents = await readdir(source, { withFileTypes: true })
    const directories = dirents.filter(dirent => dirent.isDirectory()).map(dirent => join(source, dirent.name))
    paths.push(...directories)
    await processDirectories()
  } catch (err) {
    console.error(err)
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

  let arr1 = res.map(el => el.replace(reg, '/'))
  arr.push(...arr1);
  return arr
}).then(file => {
  console.log(file, 'file');
})
