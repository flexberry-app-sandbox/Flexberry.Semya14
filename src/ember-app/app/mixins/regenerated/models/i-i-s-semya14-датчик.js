import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерД: DS.attr('number'),
  погрешность: DS.attr('decimal'),
  производ: DS.attr('string'),
  контроллер: DS.belongsTo('i-i-s-semya14-контроллер', { inverse: 'датчик', async: false })
});

export let ValidationRules = {
  номерД: {
    descriptionKey: 'models.i-i-s-semya14-датчик.validations.номерД.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  погрешность: {
    descriptionKey: 'models.i-i-s-semya14-датчик.validations.погрешность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  производ: {
    descriptionKey: 'models.i-i-s-semya14-датчик.validations.производ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контроллер: {
    descriptionKey: 'models.i-i-s-semya14-датчик.validations.контроллер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДатчикE', 'i-i-s-semya14-датчик', {
    номерД: attr('Номер Д', { index: 0 }),
    погрешность: attr('Погрешность', { index: 1 }),
    производ: attr('Производ', { index: 2 })
  });

  modelClass.defineProjection('ДатчикL', 'i-i-s-semya14-датчик', {
    номерД: attr('', { index: 0 }),
    погрешность: attr('', { index: 1 }),
    производ: attr('', { index: 2 })
  });
};
