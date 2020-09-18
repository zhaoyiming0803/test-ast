const { parse } = require('babylon')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

module.exports = function () {
  const code = `
    if(3>5) {}
  `
  const ast = parse(code)
  
  traverse(ast, {
    BinaryExpression (path) {
      const { node } = path
      if (node.operator === '>') {
        path.replaceWith(
          t.binaryExpression('<=', node.left, node.right)
        )
      }
    }
  })

  console.log(generate(ast))
}


