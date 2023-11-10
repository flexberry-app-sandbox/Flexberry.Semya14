import {
  defineNamespace,
  defineProjections,
  Model as ДатчикMixin
} from '../mixins/regenerated/models/i-i-s-semya14-датчик';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДатчикMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
