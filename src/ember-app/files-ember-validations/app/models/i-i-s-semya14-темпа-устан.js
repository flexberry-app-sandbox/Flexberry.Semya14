import {
  defineNamespace,
  defineProjections,
  Model as ТемпаУстанMixin
} from '../mixins/regenerated/models/i-i-s-semya14-темпа-устан';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТемпаУстанMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
