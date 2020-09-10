#!/usr/bin/env node

/* eslint-disable no-console */
require('colors')
const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

const rootDir = path.resolve(__dirname, '../')
const componentPath = path.resolve(rootDir, './src/lib')
const distPath = path.resolve(rootDir, './dist')

const blackListDir = ['lib', '__tests__', 'utils', 'mixins']

const execOptions = {
  shell: true
}

/** Make Sure dist Folder Exists */
function setup() {
  // Create dist folder
  if (!fs.existsSync(distPath)) {
    // Clean dist
    execSync(`rm -rf ${distPath}/*`, { shell: true, stdio: 'inherit' })
    // make dist
    fs.mkdirSync(distPath)
    console.log('dist folder cleaned'.yellow)
  }
}

/** Copy SCSS */
const copyScss = () => {
  execSync(`find ${componentPath} -maxdepth 1 -type f -name \\*.scss -exec cp {} ./dist \\;`, execOptions)
  console.log(
    `
CSS copied over
`.magenta
  )
}

/**
 * [findType get files or folders and spit it out into an array]
 * @param  {String} [filters='-type d'] [filters for find command]
 * @param  {String} [folderPath=componentPath] [path of directory]
 * @return {array}           [description]
 */
const findType = (filters = '-type d', folderPath = componentPath) => {
  const data = execSync(`find ${folderPath} ${filters}`, execOptions)
  return [
    ...new Set(
      data
        .toString()
        .split('\n')
        .map((folder) => path.basename(folder))
    )
  ]
}

/** Build components array to prevent it from bundling itself when compoennts reuse other components */
const buildComponents = () => {
  let reusabledComponents = []

  /* Components */
  const components = findType()
  components
    .filter((folder) => blackListDir.indexOf(folder) === -1 || !folder) // Get rid of blacklisted directories
    .filter((file) => file !== '')
    .forEach((file) => {
      reusabledComponents.push(`mfcl/dist/${file}`)
    })

  reusabledComponents = JSON.stringify(reusabledComponents, null, 2)
  const write = `export default ${reusabledComponents}`

  /** Write file */
  fs.writeFileSync(`${distPath}/components.js`, write, 'utf8')
}

/** Build Entries Object */
const buildEntries = () => {
  let entries = {}
  const folders = findType()
  folders
    .filter((file) => file !== '')
    .filter((folder) => blackListDir.indexOf(folder) === -1 || !folder) // Get rid of blacklisted directories
    .forEach((folder) => {
      const data = execSync(`find ${componentPath}/${folder} -type f -name index.tsx`)
      const result = data
        .toString()
        .split('\n')
        .filter((d) => !!d)
      if (result.length > 0) {
        const [component] = result
        entries[folder] = `./${path.relative(rootDir, component)}`
      }
    })

  // Sort for readability
  entries = Object.keys(entries)
    .sort()
    .reduce(
      (prev, key) => ({
        ...prev,
        [key]: entries[key]
      }),
      {}
    )

  /** Write Entries JSON */
  fs.writeFileSync(`${distPath}/entries.json`, JSON.stringify(entries, null, 4), 'utf8')

  console.log('component entries object created'.blue)
  console.log(
    `Ready for rollup build!!
  `.green.bold
  )
}

Promise.resolve(setup())
  .then(copyScss)
  .then(buildComponents)
  .then(buildEntries)
  .catch((error) => console.error(`Bundle Failed: ${error}`.red))
