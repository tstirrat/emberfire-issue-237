import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),
  course: DS.belongsTo('course', { async: true })
});
