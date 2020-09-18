const type = JSON.parse(process.env.npm_config_argv)
  .original[1].split(':')[1]

if (type) {
  require(`./parse-${type}`)()
}