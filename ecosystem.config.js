module.exports = {
  apps: [{
    name: 'tutorial',
    script: './server/server_index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-173-235-60.compute-1.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'https://github.com/csspence/reviews.git',
      path: '/home/ubuntu/tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
