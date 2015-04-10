import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.find('course');
  },

  actions: {
    create() {
      var course = this.store.createRecord('course', {
        title: '' + new Date(),
        slug: '' + new Date().getTime()
      });

      course.save();
    }
  }
});
