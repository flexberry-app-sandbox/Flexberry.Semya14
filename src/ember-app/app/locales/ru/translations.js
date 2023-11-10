import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Semya14',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya14',
          title: 'Semya14'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-semya14-контроллер-l': IISSemya14КонтроллерLForm,
    'i-i-s-semya14-темпа-устан-l': IISSemya14ТемпаУстанLForm,
    'i-i-s-semya14-контроллер-e': IISSemya14КонтроллерEForm,
    'i-i-s-semya14-темпа-устан-e': IISSemya14ТемпаУстанEForm
  },

});

export default translations;
