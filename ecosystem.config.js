module.exports = {
  apps : [{
    name      : 'nemv3', // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
    script    : './be/bin/www', // pm2로 실행될 파일 경로
    env: {
      PORT: 3000,
      NODE_ENV: 'development'
    },
    env_production: {
      PORT: 8080,
      NODE_ENV: 'production'
    },
    watch: true, // 파일이 변경되면 자동으로 재실행 (true || false)
    instances: 2, // 앱 인스턴스의 수
    exec_mode: 'cluster' // 실행 모드.    
  }]

  /*,deploy: {
    production: {
      // sample
      user: 'node',
      host: '123.12.123.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }*/

};
