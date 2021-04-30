const app = new Vue({
    el: "#app",
    data: {
        immagini: [
            // grandezza immagini: 960x720
            "http://www.lentitaliane.it/blog/wp-content/uploads/2014/12/illusione-ottica-del-movimento.jpg",
            "https://odesza.com/wp-content/uploads/2015/04/960-720.jpg",
            "http://www.liberamente-me.com/wp-content/uploads/2015/02/The-White-Queen-the-white-queen-bbc-36817434-960-720.jpg",
            "https://calabria7.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-02-at-12.41.11-960x720.jpeg",
        ],
        indiceImmagineAttiva: 0,
    },
    methods: {
        immagineAvanti() {
            this.indiceImmagineAttiva += 1

            if(this.indiceImmagineAttiva > 3) {
                this.indiceImmagineAttiva = 0
            }
        },

        immagineIndietro() {
            this.indiceImmagineAttiva -= 1

            if(this.indiceImmagineAttiva < 0) {
                this.indiceImmagineAttiva = 3
            }
        }
    }
})