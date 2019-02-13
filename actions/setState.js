import database from '../firebase/firebase';

export default (state, userState,  ) => {
    database.ref('/game/').set('');
    database.ref('/game/gameState/state').set('play');
    database.ref('/game/gameState/lastmove').set('');
    if(userState) {
        Object.keys(state).forEach((key) => {
            if(parseInt(key) && state[parseInt(key)]) {
                const updateObj = {}
                updateObj[key.toString()] = state[key]; 
                database.ref('/game/userState').set(userState)
                .then(() => {
                    return database.ref('/game/turn/').set(`${state["turn"]}`);
                })
                .then(() => {
                    return database.ref('/game/values/').update(updateObj);
                })
                .then(() => {
                    return database.ref('/game/gameState/').set(`${state["gameState"]}`)
                })
            }
        })
        
    }
}