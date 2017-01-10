// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
Vue.use(VueMaterial);

App.chats = new Vue({
    el: '#app',
    data: {
        chats: [
            { body: 'hoge' },
            { body: 'fuga' },
            { body: 'kage' }
        ],
        chatFormParam: ''
    },
    created: function () {
    },
    methods: {
        insertNewChat: function () {
            if (this.chatFormParam === '') return;
            this.chats.push({ body: this.chatFormParam });
            this.chatFormParam = '';
        }
    }
});
