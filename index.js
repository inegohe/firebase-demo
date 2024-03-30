
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'
import { getDatabase, ref, set, onValue, child, get } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js'

//create a database object
const firebaseConfig = {
    databaseURL: "https://database-ivan-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const dbRef = ref(getDatabase(app));
get(child(dbRef, `testUsers/`)).then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        data.forEach((element) => {
            document.getElementById('header').insertAdjacentHTML('afterend',
                `<div class="row border-bottom header">
                        <div class="col-3">${element.firstName} ${element.lastName}</div>
                        <div class="col-3">${element.dateOfBirth}</div>
                        <div class="col-3">${element.contact}</div>
                        <div class="col-3">${element.location}</div>
                    </div>`
            )
        });
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

document.getElementById('clear').addEventListener('click', () => {
    const db = getDatabase(app);
    set(ref(db, 'testUsers/'), null);
    window.location.reload();
});
