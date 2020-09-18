const { parse } = require('babylon')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

module.exports = function () {
  const code = `
    function Fn () {
      this.print123()
    }
    
    Fn.prototype.print123 = function () {
      return 123
    }

    const fn = new Fn()
  `
  const ast = parse(code)

  traverse(ast, {
    CallExpression: {
      enter (path) {
        const callee = path.node.callee
        if (
          t.isMemberExpression(callee) && 
          t.isThisExpression(callee.object) &&
          callee.property.name.indexOf('print') > -1
        ) {
          path.isPrint = true
        }
      },
      exit (path) {
        if (path.isPrint) {
          path.remove()
          delete path.isPrint
        }
      }
    }
  })

  console.log(generate(ast))
}