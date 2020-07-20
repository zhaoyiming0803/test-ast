const originalArgv = JSON.parse(process.env.npm_config_argv)
  .original
  .filter(item => item.indexOf('--') === 0)
  .map(item => item.slice(2))

if (originalArgv.length) {
  originalArgv.forEach(type => {
    require(`./parse-${type}`)()
  })
}