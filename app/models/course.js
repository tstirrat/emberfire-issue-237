import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),
  lessons: DS.hasMany('video', { async: true })
});
