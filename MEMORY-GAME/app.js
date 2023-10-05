const cardArray = [
    {
        name: 'cerdito',
        img: 'images/cerdito.jpg',
    },
    {
        name: 'conejo',
        img: 'images/conejo.jpg',
    },
    {
        name: 'gatito',
        img: 'images/gatito.jpg',
    },
    {
        name: 'lagarto',
        img: 'images/lagarto.jpg',
    },
    {
        name: 'perrito',
        img: 'images/perrito.jpg',
    },
    {
        name: 'zebra',
        img: 'images/zebra.jpg',
    },
    {
        name: 'cerdito',
        img: 'images/cerdito.jpg',
    },
    {
        name: 'conejo',
        img: 'images/conejo.jpg',
    },
    {
        name: 'gatito',
        img: 'images/gatito.jpg',
    },
    {
        name: 'lagarto',
        img: 'images/lagarto.jpg',
    },
    {
        name: 'perrito',
        img: 'images/perrito.jpg',
    },
    {
        name: 'zebra',
        img: 'images/zebra.jpg',
    },

]

cardArray.sort(() => 0.5 - Math.random());


const gridDisplay  = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/rosa.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('Check for match!');
    
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/rosa.jpg');
        cards[optionTwoId].setAttribute('src', 'images/rosa.jpg');
        alert('You have clicked the same image!');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpg');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/rosa.jpg');
        cards[optionTwoId].setAttribute('src', 'images/rosa.jpg');
        alert('Sorry try again!');
    }
    
    resultDisplay.textContent = cardsWon.length

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
   
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    console.log('clicked', cardId);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}