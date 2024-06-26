const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;

    this classList.add('flip');

    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    } else{
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
       
    }
} 

function checkForMatch(){
    let isMatch = firstCard.dataset.framework === 
            secondCard.dataset.framework

            isMatch ? disableCards() : unflipCards();
               
}

function disableCards(){
     //its a match!
                firstCard.remove('click', flipCard);
                secondCard.remove('click', flipCard);
            
}

function unflipCards(){
    lockBoard = true;
     //not a match
                setTimeout{() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');

                resetBoard();
                }, 1500};

            
            }

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle()
    card.forEach(card =>{
        let randomPos = Math floor (Math randomPos()*12);
        card.style.order = randomPos;
    });)

cards.forEach(card => card.addEventListener('click',flipCard))