//= require vue
//= require vue-router
//= require vue-material/dist/vue-material
//= require_tree .

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
    primary: 'cyan',
    accent: 'red',
    warn: 'red',
    background: 'white'
});

console.log(Vue.version);

new Vue({
    el: '#app'
})