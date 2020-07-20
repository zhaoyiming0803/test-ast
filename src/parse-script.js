const {parse, parseExpression} = require('babylon')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const fs = require("fs")
const { CachedInputFileSystem, ResolverFactory } = require("enhanced-resolve")

const myResolver = ResolverFactory.createResolver({
	fileSystem: new CachedInputFileSystem(fs, 4000),
  extensions: [".js", ".json"],
  plugins: []
})

const mode = 'web'

module.exports = function () {
  const script = `
    const utils = require('./utils')
    class Person {
      constructor (name) {
        this.name = name
      }
    }
  `
  const ast = parse(script)
  
  traverse(ast, {
    // https://babeljs.io/docs/en/babel-types#api
    CallExpression (p) {
      const node = p.node
      if (node.callee.name === 'require') {
        node.callee.name = '__zpack_require__'
      }

      const context = {}
      const resolveContext = {}
      const lookupStartPath = __dirname
      const request = node.arguments[0].value
      myResolver.resolve({}, lookupStartPath, request, resolveContext, (err, path, result) => {
        if (err) {
          return console.error(err)
        } else {
          node.arguments[0].value = path
        }

        const codeResult = generate(ast)
        console.log(codeResult)
      })
    }
  })
}