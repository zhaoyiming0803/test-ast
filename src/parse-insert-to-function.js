const { parse } = require('babylon')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')
const { variableDeclarator } = require('@babel/types')

module.exports = function () {
  const code = `
    function fn () {
      var a = 1
      var b = 200
      return a + b + c
    }
  `
  const ast = parse(code)

  traverse(ast, {
    BlockStatement (path) {
      if (path.parent.id.name === 'fn' && path.node.body.length === 3) {
        const body = path.node.body

        // const newBlockStatement = t.blockStatement(body.concat(
        //   t.returnStatement(t.binaryExpression('>=', t.numericLiteral(1), t.numericLiteral(2))),
        //   body.pop()
        // ))
        
        const newBlockStatement = t.blockStatement(
          body.concat(
            t.variableDeclaration('var', [
              variableDeclarator(t.identifier('c'), t.numericLiteral(300))
            ]),
            body.pop()
          )
        )

        path.replaceWith(newBlockStatement)
      }
    }
  })

  console.log(generate(ast).code)

  eval(`console.log(${generate(ast).code}())`)
}