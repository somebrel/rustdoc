import fetch from 'fetch';
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return fetch('data.json')
      .then(response => response.json())
      .then(docData => {
        this.replaceWith("/" + docData.data.id);
        return this.store.push(docData);
      });
    },
});
