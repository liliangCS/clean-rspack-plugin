const fs = require("node:fs")
const PLUGIN_NAME = "CleanRspackPlugin"

class CleanRspackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      const buildPath = compilation.outputOptions.path
      fs.rm(buildPath, { recursive: true }, () => {
        console.log("clean-rspack-plugin run success!")
      })
    })
  }
}

module.exports = CleanRspackPlugin