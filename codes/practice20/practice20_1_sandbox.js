// pathsの場合
// input: ['dir1', 'test.txt']
// output: ['dir1/file.txt', 'dir1/subdir/subfile.txt', 'test.txt']

// dirの場合（pathsの場合より責務が小さい）
// function: searchDir
// input: "dir1"
// output: ["dir1/test.txt", searchDir("dir/subdir")] （ファイルのオブジェクトだとなおよいけど、一旦フルパス）

const fs = require("fs").promises;
const Path = require("path");

const DIR =
  "/Users/ikuma/src/github.com/fjord-ryureijs-rinndokukai/eloquent-javascript/codes/practice20/dir1";

const readdirRecursively = async (dir) => {
  const paths = (await fs.readdir(dir)).map((path) => Path.join(dir, path));
  const list = [];

  for (const path of paths) {
    const stats = await fs.stat(path);
    if (stats.isDirectory()) {
      const dir_ = await readdirRecursively(path);
      list.push(...dir_);
    } else {
      list.push(path);
    }
  }

  return list;
};

(async () => {
  console.log(await readdirRecursively(DIR));
})();
