const app = new Vue({
    el: "#app",
    data: {
        imagesList: [
            "https://picsum.photos/1080/600?i=0",
            "https://picsum.photos/1080/600?i=1",
            "https://picsum.photos/1080/600?i=2",
            "https://picsum.photos/1080/600?i=3",
            "https://picsum.photos/1080/600?i=4"
        ],
        activeImg: 0,
        interval: null
    },
    methods: {
        /**
         * @param {number} direction - +1 se vogliamo andare avanti, -1 se indietro.
         */
        changeImg(direction, changedByAI) {
            let newIndex = this.activeImg + direction;

            if (newIndex < 0) {
                /*
                Se indice < di 0, facciamo andare l'utente all'ultima immagine della lista
                */
                newIndex = this.imagesList.length - 1;

            } else if (newIndex > (this.imagesList.length - 1)) {
                /*
                Se l'indice è già l'ultimo della lista delle immagini, facciamo andare l'utente alla prima immagine
                */
                newIndex = 0;
            }

            this.activeImg = newIndex;
        },
        onDotClick(clickedIndex) {
            this.activeImg = clickedIndex;
        },
        play() {
            clearInterval(this.interval);

            this.interval = setInterval(() => {
                this.changeImg(+1, true);
            }, 5000);
        },
        pause() {
            clearInterval(this.interval);
        }
    },
    mounted() {
        const elementoHtml = document.querySelector(".slider-container");

        elementoHtml.focus();

        this.play();
    }
});