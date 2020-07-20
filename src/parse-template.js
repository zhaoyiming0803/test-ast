const {parse, parseExpression} = require('babylon')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')
const {tagMap, conditionMap} = require('./config/template')
const {trimCurly} = require('./utils')

const mode = 'web'

function parseTemplate (path, mode) {
  let node = path.node
  if (t.isJSXElement(node)) {
    let currentTag = node.openingElement.name.name
    let targetTag = tagMap.targetTagMap[currentTag] && tagMap.targetTagMap[currentTag][mode]

    if (targetTag && currentTag !== targetTag) {
      node.openingElement.name.name = targetTag
      // 处理自闭和标签
      node.closingElement && (node.closingElement.name.name = targetTag)
    }
  }
}

function parseConditionalStatement(path, mode) {
  let node = path.node
  const conditionStateList = ['z-if', 'z-else-if', 'z-else']
  if (t.isJSXAttribute(node) && conditionStateList.indexOf(node.name.name) > -1) {
    let currentCondition = node.name.name
    let targetCondition = conditionMap[currentCondition] && conditionMap[currentCondition][mode]
    if (targetCondition && currentCondition !== targetCondition) {
      node.name.name = targetCondition
      // z-if="{{condition}}"
      node.value && t.isStringLiteral(node.value) && (node.value.value = trimCurly(node.value.value))
    }
  }
}

module.exports = function () {
  const template = `
    <template>
      <view z-if="{{isShow1}}">
        <view z-if="{{isShow2}}"></view>
      </view>
    </template>
  `
  const ast = parse(template, {
    plugins: ['jsx']
  })
  // console.log('ast: ', ast)

  traverse(ast, {
    enter (path) {
      parseTemplate(path, mode)
      parseConditionalStatement(path, mode)
    }
  })

  const result = generate(ast)
  console.log(result)
}
