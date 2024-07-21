import "../styles/card.css"

export default function Card({ cards, clickHandler }) {
  // to shuffle the cards
  const shuffledCards = shuffle(cards);

  // to take the first 12 cards
  const firstTwelve = shuffledCards.filter((card, index) => index < 12);

  const cardsList = firstTwelve.map((card) => {
    return <img src={card} key={card} onClick={clickHandler} />;
  });
  return <div id="cards">{cardsList}</div>;
}

// A function that shuffles an array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}