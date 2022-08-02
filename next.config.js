const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        username: "test",
        password: "test",
        clustername: "cluster0",
        database: "my-site-dev",
      },
    }
  }

  return {
    env: {
      username: "test",
      password: "test",
      clustername: "cluster0",
      database: "my-site",
    },
  }
}
