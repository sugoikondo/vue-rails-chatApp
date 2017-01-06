//= require vue
//= require vue-router
//= require vue-material/dist/vue-material
//= require_tree .

// ActionCable
(function() {
    this.App || (this.App = {});

    App.cable = ActionCable.createConsumer();
}).call(this);

Vue.use(VueMaterial);

// new Vue({
//     el: '#app'
// });