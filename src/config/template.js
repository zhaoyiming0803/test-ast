exports.tagMap = {
  targetTagMap: {
    'cover-view': {
      wx: 'cover-view',
      web: 'div',
      weex: 'div',
      alipay: 'cover-view',
      baidu: 'cover-view',
      qq: 'cover-view',
      tt: 'cover-view'
    },
    'view': {
      wx: 'view',
      web: 'div',
      weex: 'div',
      alipay: 'view',
      baidu: 'view',
      qq: 'view',
      tt: 'view'
    },
    'text': {
      wx: 'text',
      web: 'span',
      weex: 'text',
      alipay: 'text',
      baidu: 'text',
      qq: 'text',
      tt: 'text'
    },
    'image': {
      wx: 'image',
      web: 'img',
      weex: 'image',
      alipay: 'image',
      baidu: 'image',
      qq: 'image',
      tt: 'image'
    },
    'input': {
      wx: 'input',
      web: 'input',
      weex: 'input',
      alipay: 'input',
      baidu: 'input',
      qq: 'input',
      tt: 'input'

    },
    'button': {
      wx: 'button',
      web: 'div',
      weex: 'div',
      alipay: 'button',
      baidu: 'button',
      qq: 'button',
      tt: 'button'
    },
    'cell': {
      wx: 'view',
      web: 'cell',
      weex: 'cell',
      alipay: 'view',
      baidu: 'view',
      qq: 'view',
      tt: 'view'
    },
    'slider-item': {
      wx: 'swiper-item',
      web: 'div',
      weex: 'div',
      alipay: 'swiper-item',
      baidu: 'swiper-item',
      qq: 'swiper-item',
      tt: 'swiper-item'

    }
  },
  afterTagMap: {
    // 在最后处理的标签，因为template标签在jsdom中不识别
    'block': {
      wx: 'block',
      web: 'template',
      weex: 'template',
      alipay: 'block',
      baidu: 'block',
      qq: 'block',
      tt: 'block'
    }
  },
  diffTagMap: {
    wx: ['zym-wx'],
    web: ['zym-web', 'zym-web-weex'],
    weex: ['zym-weex', 'zym-web-weex'],
    alipay: ['zym-ali'],
    baidu: ['zym-baidu'],
    qq: ['zym-qq'],
    tt: ['zym-tt']
  },
  wxTagMap: {
    'carousel': 'swiper',
    'carousel-item': 'swiper-item'
  }
}

exports.conditionMap = {
  'z-if': {
    web: 'v-if',
    weex: 'v-if',
    wx: 'wx:if',
    alipay: 'a:if',
    baidu: 's-if',
    qq: 'qq:if',
    tt: 'tt:if'
  },
  'z-else-if': {
    web: 'v-else-if',
    weex: 'v-else-if',
    wx: 'wx:elif',
    alipay: 'a:elif',
    baidu: 's-elif',
    qq: 'qq:elif',
    tt: 'tt:elif'
  },
  'z-else': {
    web: 'v-else',
    weex: 'v-else',
    wx: 'wx:else',
    alipay: 'a:else',
    baidu: 's-else',
    qq: 'qq:else',
    tt: 'tt:else'

  }
}

exports.interationMap = {
  'z-for': {
    wx: 'wx:for',
    alipay: 'a:for',
    baidu: 's-for',
    qq: 'qq:for',
    tt: 'tt:for'
  },
  'z-key': {
    wx: 'wx:key',
    alipay: 'a:key',
    baidu: 's-key', // 百度文档没有提到这个，黑人问号脸
    qq: 'qq:key',
    tt: 'tt:key'
  },
  'z-for-item': {
    wx: 'wx:for-item',
    alipay: 'a:for-item',
    baidu: 's-for-item',
    qq: 'qq:for-item',
    tt: 'tt:for-item'
  },
  'z-for-index': {
    wx: 'wx:for-index',
    alipay: 'a:for-index',
    baidu: 's-for-index',
    qq: 'qq:for-index',
    tt: 'tt:for-index'
  }
}

exports.eventMap = {
  'touchstart': 'touchStart',
  'touchmove': 'touchMove',
  'touchend': 'touchEnd',
  'touchcancel': 'touchCancel',
  'longtap': 'longTap'
}

exports.conditionMapVue2Wx = {
  'v-if': {
    wx: 'wx:if',
    alipay: 'a:if',
    baidu: 's-if',
    qq: 'qq:if',
    tt: 'tt:if'
  },
  'v-else-if': {
    wx: 'wx:elif',
    alipay: 'a:elif',
    baidu: 's-elif',
    qq: 'qq:elif',
    tt: 'tt:elif'
  },
  'v-else': {
    wx: 'wx:else',
    alipay: 'a:else',
    baidu: 's-else',
    qq: 'qq:else',
    tt: 'tt:else'
  }
}