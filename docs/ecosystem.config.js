module.exports = {
  apps : [{
    name: "timelab-dev-vapid",
    script: "vapid",
    args: "start .",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}



