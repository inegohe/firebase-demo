const form = document.getElementById('submit');

form.addEventListener('submit', (e) => {
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
})