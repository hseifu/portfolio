import storage from '../firebase/firebase';
import {firebase} from '../firebase/firebase';

const upload = (imageUrl) => {
    const storageRef = firebase.storage().ref('images');

    storageRef.putString(imageUrl, 'data_url').then(function(snapshot) {
        console.log('Uploaded a data_url string!');
    })
    
}

export default upload;