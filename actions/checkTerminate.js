import database from '../firebase/firebase';

export default (userId) => {
    return database.ref(userId + '/game/gameState').once('value').then((snapshot) => {
        return database.ref(userId + '/game/gameState').once('child_added').then((secondSnapshot) => {
            console.log("from check terminate ", snapshot.val(), secondSnapshot.val());
            return {gameState: snapshot.val().state, lastMove: secondSnapshot.val()};
        })
    })
}