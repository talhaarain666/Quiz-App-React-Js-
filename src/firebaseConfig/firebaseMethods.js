import app from "./firebaseConfig";
import { getDatabase, ref, push, set, onValue, remove } from "firebase/database";

const db = getDatabase(app);
const dbRef = ref(db, 'Quiz');


let getData = () => {
    return new Promise((resolve, reject) => {
        onValue(dbRef, (snapshot) => {
            const arr = [];
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();

                arr.push(childData)
            });
            resolve(arr)
        }, {
            onlyOnce: false,
        });
    })
}
let postData = (data) => {
    const newPostRef = push(dbRef);
    data.id = newPostRef.key;
    set(newPostRef, data)
        .then(function () {
            console.log("success");
        })
        .catch(function (err) {
            console.log(err);
        });
}

export { getData, postData };