document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'Dot',
            img: 'images/dot.png',
        },
        {
            name: 'Lickitung',
            img: 'images/lickitung.png',
        },
        {
            name: 'Porkchop',
            img: 'images/porkchop.png',
        },
        {
            name: 'Rocco',
            img: 'images/rocco.png',
        },
        {
            name: 'Simba',
            img: 'images/simba.png',
        },
        {
            name: 'Snorlax',
            img: 'images/snorlax.png',
        },
        {
            name: 'Squidward',
            img: 'images/Squidward.png',
        }
    ]

    const grid = document.querySelector('.grid')
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/cassette.png')
            card.setAttribute('id', i)
            grid.appendChild(card)
        }
    }
    createBoard();
})