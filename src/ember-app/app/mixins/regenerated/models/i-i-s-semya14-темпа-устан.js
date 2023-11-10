import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  температура: DS.attr('decimal')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-semya14-темпа-устан.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  температура: {
    descriptionKey: 'models.i-i-s-semya14-темпа-устан.validations.температура.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТемпаУстанE', 'i-i-s-semya14-темпа-устан', {
    температура: attr('Температура', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });

  modelClass.defineProjection('ТемпаУстанL', 'i-i-s-semya14-темпа-устан', {
    температура: attr('Температура', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
