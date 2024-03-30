const data = JSON.parse(localStorage.getItem('sampleData'));

console.log(data);

if(localStorage.getItem('sampleData')){
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
}

function clearUsers(){
    if(localStorage.getItem('sampleData') != null){
        localStorage.removeItem('sampleData');
    }
    window.location.reload();
}