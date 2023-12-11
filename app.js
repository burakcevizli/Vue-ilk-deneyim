const app = Vue.createApp({
    data(){
        return {
            showBooks:true,
            title:"The Final Empire 2",
            author:"Brandon Sanderson",
            age:45
        }
    },
    methods:{
        toggleShowBook(){
        this.showBooks= !this.showBooks
       }
    }
})

app.mount("#app")