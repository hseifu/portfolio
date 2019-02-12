import database from '../firebase/firebase';

export default () => {
    return database.ref('/game/gameState').once('value').then((snapshot) => {
        return database.ref('/game/gameState').once('child_added').then((secondSnapshot) => {
            console.log("from check terminate ", snapshot.val(), secondSnapshot.val());
            return {gameState: snapshot.val().state, lastMove: secondSnapshot.val()};
        })
    })
}