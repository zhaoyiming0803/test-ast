const { parse } = require('babylon')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

module.exports = function () {
  const code = `
    import { a, b, c, d } from 'utils'
  `
  const ast = parse(code, {
    sourceType: 'module'
  })

  traverse(ast, {
    ImportDeclaration (path) {
      const { specifiers, source } = path.node

      if(!t.isImportDefaultSpecifier(specifiers[0])) {
        const myImportDeclaration = specifiers.map(specifier => {
          return t.importDeclaration(
            [t.importDefaultSpecifier(specifier.local)],
            t.stringLiteral(`${source.value}/${specifier.imported.name}`)
          )
        })

        path.replaceWithMultiple(myImportDeclaration)
      }
    }
  })

  console.log(generate(ast))
}