console.log('vue carousel')

const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                {
                    photo: './img/cappadocia.jpg',
                    title: "Cappadocia",
                    description: 'Mongolfiere all alba',
                },
                {
                    photo: './img/aurora.jpg',
                    title: 'Aurora boreale',
                    description: 'Uno scenario da vivere almeno una volta nella vita',
                },
                {
                    photo: './img/Barriera-corallina.jpg',
                    title: 'Barriera corallina',
                    description: 'Tutti i colori della barriera corallina a Nabq Bay',
                },
                {
                    photo: './img/route-66.jpg',
                    title: 'Route 66',
                    description: 'Da percorrere tutta in Harley',
                },
                {
                    photo: './img/Naples.jpg',
                    title: "Napoli",
                    description: "Vista del golfo di Napoli da Fuorigrotta",
                },
            ],
            currentIndex: 0
        }
    },
    methods: {

        nextSlide() {
            const lastIndex = this.slides.length - 1
            if (this.currentIndex < lastIndex) {
                this.currentIndex++
            }
            else {
                this.currentIndex = 0
            }
        },

        prevSlide() {
            const lastIndex = this.slides.length - 1
            if (this.currentIndex > 0) {
                this.currentIndex--
            }
            else {
                this.currentIndex = lastIndex
            }

        }
    }
}).mount('#app')


