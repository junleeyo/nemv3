module.exports = {
  apps : [{
    name      : 'nemv',
    script    : './be/bin/www',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_pr : {
      NODE_ENV: 'production',
      PORT: 80
    }
  }]
};
