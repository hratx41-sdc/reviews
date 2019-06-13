module.exports = {
  apps: [{
    name: 'sdc-server',
    script: './server/server_index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-175-179-239.compute-1.amazonaws.com',
      key: '~/Documents/GitHub/sf-fashova-reviews/psql-sdc-ec2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:hratx41-sdc/sf-fashova-reviews.git',
      path: '/home/ubuntu/sf-fashova-reviews',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
