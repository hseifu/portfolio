import database from '../firebase/firebase';

export default (state, userState, userId) => {
    database.ref(userId + '/game/').set('');
    console.log("to write state: ", state)
    database.ref(userId + '/game/gameState/state').set('play');
    database.ref(userId + '/game/gameState/lastmove').set('');
    if(userState) {
        Object.keys(state).forEach((key) => {
            if(parseInt(key) && state[parseInt(key)]) {
                const updateObj = {}
                updateObj[key.toString()] = state[key]; 
                database.ref(userId + '/game/userState').set(userState)
                .then(() => {
                    return database.ref(userId + '/game/turn/').set(`${state["turn"]}`);
                })
                .then(() => {
                    return database.ref(userId + '/game/values/').update(updateObj);
                })
                .then(() => {
                    return database.ref(userId + '/game/gameState/').set(`${state["gameState"]}`)
                })
            }
        })
        
    }
}