import { BackendModule } from 'i18next';

const LazyImportPlugin: BackendModule = {
  type: 'backend',
  init: function (services, backendOptions, i18nextOptions) {
  },
  read: function (language, namespace, callback) {
    import(/* webpackChunkName: "i18n/[request]" */ `./${language}/${namespace}.json`).then(
      (obj) => {
        callback(null, obj);
      }
    );
  },

  save: function (language, namespace, data) {
  },

  create: function (languages, namespace, key, fallbackValue) {
    /* save the missing translation */
  },
};

export default LazyImportPlugin;