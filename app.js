const app = Vue.createApp({
    data() {
        return {
            url: 'www.google.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'https://www.semakirtasiye.com.tr/_contents/170969_e14603777043.png' ,isFav:true},
                { title: 'theway of the kings', author: 'branddd', img: 'https://www.semakirtasiye.com.tr/_contents/170969_e14603777043.png' ,isFav:false},
                { title: 'CEvizle', author: 'Burak', img: 'https://www.semakirtasiye.com.tr/_contents/170969_e14603777043.png' ,isFav:true},
            ]
        }
    },
    methods: {
        toggleFav(book){
            book.isFav = !book.isFav
        },
        toggleShowBook() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    }
})

app.mount("#app")