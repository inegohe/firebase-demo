
/* form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(localStorage.getItem('sampleData') === null){
        localStorage.setItem('sampleData',JSON.stringify([]));
    }
    const data = JSON.parse(localStorage.getItem('sampleData'));
    data.push({
        firstName:form.fname.value,
        lastName: form.lname.value,
        dateOfBirth: form.dob.value,
        contact: form.contact.value,
        location: form.location.value
    });
    localStorage.setItem('sampleData', JSON.stringify(data));
    console.log(data);
    window.location.replace('./index.html')
}) */

        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'
        import { getDatabase, ref, set, onValue, child, get } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js'

        //create a data base object
        const firebaseConfig = {
            databaseURL: "https://database-ivan-default-rtdb.asia-southeast1.firebasedatabase.app",
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        
        // Initialize Realtime Database and get a reference to the service
        const database = getDatabase(app);

        const form = document.getElementById('submit');

        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            /* const names = ref(database);
            onValue(names, (snapshot) => {
                const data = snapshot.val();
                //console.log(data.testUsers.length)
                //writeUserData(data.testUsers.length);
            }); */
            const dbRef = ref(getDatabase(app));
            get(child(dbRef, `testUsers/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    console.log('data updated succesfully');
                    writeUserData(data.length);
                    window.location.replace('./index.html');
                } else {
                    console.log("No data available");
                    writeUserData(0);
                    window.location.replace('./index.html');
                }
            }).catch((error) => {
                console.error(error);
            });
        });


        function writeUserData(userId) {
                const db = getDatabase(app);
                set(ref(db, 'testUsers/' + userId), {
                    firstName:form.fname.value,
                    lastName: form.lname.value,
                    dateOfBirth: form.dob.value,
                    contact: form.contact.value,
                    location: form.location.value
                });
            }


            /* const dbRef = ref(getDatabase(app));
            get(child(dbRef, `admin/`)).then((snapshot) => {
              if (snapshot.exists()) {
                console.log(snapshot.val());
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            }); */
//read data from firebase

    /* const names = ref(database);
    onValue(names, (snapshot) => {
        const data = snapshot.val();
        console.log(data.testUsers);
    }); */
