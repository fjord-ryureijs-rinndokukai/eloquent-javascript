const fs = require('fs').promises
const Path = require('path')

const pattern = new RegExp(process.argv[2])
const paths = process.argv.slice(3)
const list = []

const readdirRecursively = async (dir) => {
  const paths = (await fs.readdir(dir)).map((path) => Path.join(dir, path))
  const list = []

  for (const path of paths) {
    const stats = await fs.stat(path)
    if (stats.isDirectory()) {
      const dir_ = await readdirRecursively(path)
      list.push(...dir_)
    } else {
      list.push(path)
    }
  }

  return list
}

(async () => {
  for (const path of paths) {
    list.push(...(await readdirRecursively(path)))
  }
  for (const file of list) {
    const content = await fs.readFile(file, 'utf8');
    if (pattern.test(content)) {
      console.log(file);
    }
  }
})();
