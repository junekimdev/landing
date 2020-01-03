module.exports = {
  apps: [
    {
      name: 'Landing Page Template',
      script: 'next start',
      autorestart: true,
      watch: true,
      max_memory_restart: '200M',
    },
  ],
};
