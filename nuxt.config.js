export default {
  mode: 'spa',
  target: 'static',

  head: {
    title: 'Collected Movements',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'REPLACE_ME' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  plugins: ['~plugins/init.js'],

  build: {},
};
