//= require vue
//= require vue-router
//= require vue-material/dist/vue-material
//= require_tree .

// ActionCable
(function() {
    console.log(this);
    this.App || (this.App = {});

    // App.cable = ActionCable.createConsumer();
}).call(this);

// Vue Materialのテーマを変更
Vue.material.registerTheme('default', {
    primary: {
        color: 'teal',
        hue: 'A700'
    },
})

Vue.use(VueMaterial);

var topNav = new Vue({
    el: '#topNavbar',
    // data: [],
    methods: {
        // 左側ナビゲーションを開閉する
        toggleSideNav: function() {
            sideNav.$refs.leftSidenav.toggle();
        }
    }
});

var sideNav = new Vue({
    el: '#sideNav',
    // data: []
});
