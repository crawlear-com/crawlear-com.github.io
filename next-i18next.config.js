/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'es',
      locales: ['en', 'es'],
      //react: { useSuspense: false }
    },
    localePath: require('path').resolve('./src/resources/locales')
  }