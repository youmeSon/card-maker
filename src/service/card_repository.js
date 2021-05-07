import firebaseApp from "./firebase";

class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card); //사용자 id 안에 있는 cards의 안에 있는 id 저장~!
  }

  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove(); //사용자 id 안에 있는 cards의 안에 있는 id 저장~!
  }
}

export default CardRepository;
