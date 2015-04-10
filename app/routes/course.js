import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.find('course', {
      orderBy: 'slug',
      equalTo: params.slug
    })
    .then((courses) => {
      return courses.get('firstObject');
    });
  },
  actions: {
    create() {
      var video = this.store.createRecord('video', {
        title: '' + new Date(),
        slug: '' + new Date().getTime()
      });

      var course = this.modelFor('course');
      course.get('lessons').addObject(video);

      video.save().then(() => course.save());
    }
  }
});
