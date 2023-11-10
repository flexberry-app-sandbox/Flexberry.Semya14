import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSemya14КонтроллерLForm from './forms/i-i-s-semya14-контроллер-l';
import IISSemya14ТемпаУстанLForm from './forms/i-i-s-semya14-темпа-устан-l';
import IISSemya14КонтроллерEForm from './forms/i-i-s-semya14-контроллер-e';
import IISSemya14ТемпаУстанEForm from './forms/i-i-s-semya14-темпа-устан-e';
import IISSemya14ДатчикModel from './models/i-i-s-semya14-датчик';
import IISSemya14КонтроллерModel from './models/i-i-s-semya14-контроллер';
import IISSemya14ТемпаУстанModel from './models/i-i-s-semya14-темпа-устан';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-semya14-датчик': IISSemya14ДатчикModel,
    'i-i-s-semya14-контроллер': IISSemya14КонтроллерModel,
    'i-i-s-semya14-темпа-устан': IISSemya14ТемпаУстанModel
  },

  'application-name': 'Semya14',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Semya14',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya14',
          title: 'Semya14'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        semya14: {
          caption: 'Semya14',
          title: 'Semya14',
          'i-i-s-semya14-темпа-устан-l': {
            caption: 'Темпа устан',
            title: ''
          },
          'i-i-s-semya14-контроллер-l': {
            caption: 'Контроллер',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-semya14-контроллер-l': IISSemya14КонтроллерLForm,
    'i-i-s-semya14-темпа-устан-l': IISSemya14ТемпаУстанLForm,
    'i-i-s-semya14-контроллер-e': IISSemya14КонтроллерEForm,
    'i-i-s-semya14-темпа-устан-e': IISSemya14ТемпаУстанEForm
  },

});

export default translations;
