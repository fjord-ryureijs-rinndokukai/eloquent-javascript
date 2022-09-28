const fs = require('fs').promises

const pattern = new RegExp(process.argv[2])
const paths = process.argv.slice(3)

paths.forEach(async path => {
  const stats = await fs.stat(path)
  if (stats.isDirectory()) {
    const files = await fs.readdir(path);
    console.dir(files);
  } else {
    const content = await fs.readFile(path, 'utf-8')
    if (pattern.test(content)) {
      console.log(path)
    }
  }
})

// pathsの場合
// input: ['dir1', 'test.txt']
// output: ['dir1/file.txt', 'dir1/subdir/subfile.txt', 'test.txt']
