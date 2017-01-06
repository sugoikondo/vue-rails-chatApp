// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
Vue.use(VueMaterial);

App.chats = new Vue({
    el: '#app',
    data: {
        chats: [
            {id: 1, body: 'hoge'},
            {id: 2, body: 'fuga'},
            {id: 3, body: 'kage'}
        ],
        chatFormParam: '',
        counter: 0
    },
    created: function () {
        console.log('fugafuga')
    },
    methods: {
        insertNewChat: function (event) {
            console.log(event);
            // if (this.chatFormParam === '') return;
            // TODO: FIX THIS!!
            this.chats.push({id: 1, body: this.chatFormParam});
            this.chatFormParam = '';
            console.log('hogehoge');
        }
    }
});
