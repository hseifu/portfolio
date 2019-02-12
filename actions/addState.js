import database from '../firebase/firebase';

//Takes in: which square to cross and the user's character
//Updates database waits for input from server
//Return the position chosen by the server
export default (writeValue, userState  ) => {
    const retVal = [];
    const curVal = [];
    const dif = [];
    const updateObj = {};
    updateObj[writeValue.toString()] = userState;
    return database.ref('/game/userState').set(userState).then(() => {
        return database.ref('/game/turn/').set('computer').then(() => {
            return database.ref(`game/values/`).update(updateObj).then(() => {
                return database.ref('/game/values').once('value').then((snapShot) => {
                    curVal.push(snapShot.val());
                    return database.ref('/game').once('child_changed').then((childSnapshot) => {
                        if (childSnapshot.key == 'values') {
                            retVal.push(childSnapshot.val());
                            console.log("returned ", retVal, " with key ", childSnapshot.key)
                            for (var i in retVal[0]) {
                                if (!curVal[0][i]){
                                    dif.push(i)
                                }
                            };
                            return database.ref('/game/turn/').set('user').then(() => {
                                return dif[0];
                            });
                        }
                        else {
                            return false;
                        }
                    })
                })
            })
        })   
    })
}