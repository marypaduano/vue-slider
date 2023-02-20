console.log('vue carousel')

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
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
            ]
        }
    },
    methods: {

        nextSlide() {
            let currentIndex = 0
            let photoEl = document.querySelectorAll('.slide')
            const lastIndex = photoEl.length - 1

            photoEl[currentIndex].classList.remove('active')

            if (currentIndex < lastIndex) {
                currentIndex++
            }
            else {
                currentIndex = 0
            }

            photoEl[currentIndex].classList.add('active')
        },

        prevSlide() {
            let currentIndex = 0
            let photoEl = document.querySelectorAll('.slide')
            photoEl[currentIndex].classList.remove('active')

            if (currentIndex > 0) {
                currentIndex--
            }
            else {
                currentIndex = photoEl.length - 1
            }

            photoEl[currentIndex].classList.add('active')
        }
    }
}).mount('#app')

