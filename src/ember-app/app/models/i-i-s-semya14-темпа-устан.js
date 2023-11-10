import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТемпаУстанMixin
} from '../mixins/regenerated/models/i-i-s-semya14-темпа-устан';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТемпаУстанMixin, Validations, {
});

defineProjections(Model);

export default Model;
