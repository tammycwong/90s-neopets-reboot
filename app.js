document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'Lickitung',
            img: 'images/lickitung.png',
        },
        {
            name: 'grimer',
            img: 'images/grimer.png',
        },
        {
            name: 'omanyte',
            img: 'images/omanyte.png',
        },
        {
            name: 'cubone',
            img: 'images/cubone.png',
        },
        {
            name: 'Snorlax',
            img: 'images/snorlax.png',
        },
        {
            name: 'gengar',
            img: 'images/gengar.png',
        },
        {
            name: 'Lickitung',
            img: 'images/lickitung.png',
        },
        {
            name: 'grimer',
            img: 'images/grimer.png',
        },
        {
            name: 'omanyte',
            img: 'images/omanyte.png',
        },
        {
            name: 'cubone',
            img: 'images/cubone.png',
        },
        {
            name: 'Snorlax',
            img: 'images/snorlax.png',
        },
        {
            name: 'gengar',
            img: 'images/gengar.png',
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'https://i.pinimg.com/originals/1b/41/20/1b412053a7b59ab47149a3eb59e5804d.png')
            card.setAttribute('id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img:not([class])')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/pokeball.png')
            cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
            alert('Click on another pokeball to find matching pokemon!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Gotcha!')
            cards[optionOneId].setAttribute('src', 'images/gotcha.png')
            cards[optionTwoId].setAttribute('src', 'images/gotcha.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/pokeball.png')
            cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
            alert('Oh no! The Pokemon got away!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Gengar, Snorlax was sent to Bills PC'

        }
    }

    function flipCard() {
        let cardId = this.getAttribute('id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})