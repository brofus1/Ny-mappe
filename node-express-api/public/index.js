console.log('vi er her')
fetch('10.78.66.74/api/mariotitles')
    .then(res=> res.json())
        .then(json=>console.log(json))