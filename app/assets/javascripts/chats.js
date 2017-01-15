// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
Vue.use(VueMaterial);

App.chats = new Vue({
    el: '#chat_container',
    parent: App.root,
    data: {
        chats: gon.chats,
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
